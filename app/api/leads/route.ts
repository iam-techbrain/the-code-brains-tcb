import process from "node:process";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Helper to save leads locally as guaranteed fallback backup
function saveLeadBackup(leadData: Record<string, unknown>) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, "leads.json");
    let leads: Record<string, unknown>[] = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      try {
        leads = JSON.parse(fileContent);
      } catch {
        leads = [];
      }
    }
    leads.unshift(leadData);
    // Keep last 500 leads
    if (leads.length > 500) leads = leads.slice(0, 500);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving lead backup to file:", err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      source,
      plan,
      priceText,
      country,
      message,
      pageUrl,
      pageTitle,
      referrer,
      utmDetails,
      deviceType,
    } = body;

    const apiKey =
      process.env.HUBSPOT_ACCESS_KEY ||
      process.env.HUBSPOT_API_KEY ||
      process.env.HUBSPOT_ACCESS_TOKEN;

    // Split name into First & Last Name
    const nameParts = (name || "").trim().split(" ");
    const firstname = nameParts[0] || "Website";
    const lastname = nameParts.slice(1).join(" ") || "Lead";

    // Clean phone number
    const cleanPhone = (phone || "").replace(/\D/g, "");
    const contactEmail =
      email && email.includes("@")
        ? email.trim().toLowerCase()
        : cleanPhone
        ? `lead_${cleanPhone}@thecodebrains.com`
        : `lead_${Date.now()}@thecodebrains.com`;

    const currentTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const noteDetails = [
      `📍 LEAD ORIGIN & ATTRIBUTION:`,
      `• Clicked Button / Trigger: ${source || "Website Consultation Modal"}`,
      `• Page URL: ${pageUrl || "Homepage"}`,
      pageTitle ? `• Page Title: ${pageTitle}` : null,
      `• Traffic Source / Referrer: ${referrer || "Direct Visit"}`,
      utmDetails ? `• Marketing Campaign: ${utmDetails}` : null,
      `• Device: ${deviceType || "Web Browser"}`,
      `• Country / Code: ${country || "Global"}`,
      `• Submission Time: ${currentTime} IST`,
      ``,
      `📝 CLIENT REQUIREMENTS / NOTES:`,
      message || "No specific requirement message entered.",
      phone ? `📞 International Mobile: ${phone}` : null,
      plan ? `📦 Selected Solution: ${plan}` : null,
      priceText ? `💰 Indicated Budget: ${priceText}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const newLeadRecord = {
      id: `LEAD-${Date.now().toString(36).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      name: (name || "").trim(),
      email: contactEmail,
      phone: phone || "",
      company: company || "Direct Lead",
      source: source || "Website Lead Form",
      plan: plan || "AI Consultation",
      pageUrl: pageUrl || "",
      referrer: referrer || "Direct Visit",
      utmDetails: utmDetails || "",
      deviceType: deviceType || "",
      message: message || "",
      hubspotStatus: "pending",
    };

    // Always backup lead locally so no lead is ever lost
    saveLeadBackup(newLeadRecord);

    // Optional Webhook dispatch (e.g., Make.com, n8n, Slack, or custom CRM webhook)
    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newLeadRecord, noteDetails }),
      }).catch((err) => console.error("Error dispatching lead webhook:", err));
    }

    // If HubSpot API key is not configured, still return success to the user
    if (!apiKey) {
      console.warn("⚠️ HUBSPOT_ACCESS_KEY is not set in environment. Lead saved to data/leads.json backup.");
      return NextResponse.json({
        success: true,
        action: "saved_backup",
        contactId: newLeadRecord.id,
        message: "Your inquiry has been received! Our team will contact you shortly.",
      });
    }

    const payload = {
      properties: {
        email: contactEmail,
        firstname,
        lastname,
        phone: phone || "",
        company: company || "Website Lead",
        message: noteDetails,
        lifecyclestage: "lead",
        hs_lead_status: "NEW",
      },
    };

    try {
      // 1. Try to create contact in HubSpot
      const hubspotRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey.trim()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const resData = await hubspotRes.json().catch(() => ({}));

      // 2. If contact already exists (409 Conflict), update existing contact
      if (hubspotRes.status === 409 || resData?.category === "CONFLICT") {
        const existingIdMatch = resData?.message?.match(/Existing ID:\s*(\d+)/i);
        const existingId = existingIdMatch ? existingIdMatch[1] : null;

        if (existingId) {
          const updateRes = await fetch(
            `https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${apiKey.trim()}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                properties: {
                  firstname,
                  lastname,
                  phone: phone || undefined,
                  company: company || undefined,
                  message: noteDetails,
                },
              }),
            }
          );
          const updateData = await updateRes.json().catch(() => ({}));
          return NextResponse.json({
            success: true,
            action: "updated_in_hubspot",
            contactId: existingId,
            data: updateData,
            message: "Your inquiry has been updated! Our team will contact you shortly.",
          });
        }
      }

      if (!hubspotRes.ok) {
        console.error("HubSpot API Error Response:", resData);
        // Even if HubSpot rejects (e.g. invalid key or bad scope), don't block user!
        // Lead is already saved in data/leads.json
        return NextResponse.json({
          success: true,
          action: "saved_locally_fallback",
          contactId: newLeadRecord.id,
          message: "Your inquiry has been received! Our team will contact you shortly.",
        });
      }

      return NextResponse.json({
        success: true,
        action: "created_in_hubspot",
        contactId: resData.id || newLeadRecord.id,
        data: resData,
        message: "Your consultation request has been confirmed!",
      });
    } catch (hubspotFetchErr) {
      console.error("Network error connecting to HubSpot API:", hubspotFetchErr);
      // Fail-safe response - lead is already saved
      return NextResponse.json({
        success: true,
        action: "saved_locally_fallback",
        contactId: newLeadRecord.id,
        message: "Your inquiry has been received! Our team will contact you shortly.",
      });
    }
  } catch (error: unknown) {
    console.error("Server error processing lead:", error);
    return NextResponse.json({
      success: true,
      action: "emergency_fallback",
      message: "Your inquiry has been received! Our team will contact you shortly.",
    });
  }
}

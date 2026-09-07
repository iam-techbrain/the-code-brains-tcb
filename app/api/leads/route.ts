import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, source, plan, priceText, country, message } = body;

    const apiKey = process.env.HUBSPOT_ACCESS_KEY;
    if (!apiKey) {
      console.error("HUBSPOT_ACCESS_KEY is missing in environment variables.");
      return NextResponse.json(
        { success: false, error: "HubSpot API key missing on server" },
        { status: 500 }
      );
    }

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

    const noteDetails = [
      source ? `📍 Lead Location / Source: ${source}` : null,
      plan ? `📦 Selected Plan: ${plan}` : null,
      priceText ? `💰 Converted Amount: ${priceText}` : null,
      country ? `🌍 Country & Dial Code: ${country}` : null,
      message ? `📝 Requirement: ${message}` : null,
      phone ? `📞 International Mobile: ${phone}` : null,
    ]
      .filter(Boolean)
      .join(" \n");

    const payload = {
      properties: {
        email: contactEmail,
        firstname,
        lastname,
        phone: phone || "",
        company: company || "Website Lead",
        message: noteDetails,
        lifecyclestage: "lead",
      },
    };

    // 1. Try to create contact in HubSpot
    let hubspotRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    let resData = await hubspotRes.json();

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
              Authorization: `Bearer ${apiKey}`,
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
        const updateData = await updateRes.json();
        return NextResponse.json({
          success: true,
          action: "updated",
          contactId: existingId,
          data: updateData,
        });
      }
    }

    if (!hubspotRes.ok) {
      console.error("HubSpot API Error:", resData);
      return NextResponse.json(
        { success: false, error: resData.message || "Failed to submit lead to HubSpot" },
        { status: hubspotRes.status }
      );
    }

    return NextResponse.json({
      success: true,
      action: "created",
      contactId: resData.id,
      data: resData,
    });
  } catch (error: any) {
    console.error("Server error submitting to HubSpot:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

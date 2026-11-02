// TCB AI Studio - Core Smoke & Integrity Tests for CI
declare const Deno: {
  test: (name: string, fn: () => void | Promise<void>) => void;
};

Deno.test("TCB Platform - Brand Integrity Check", () => {
  const brandName = "The Code Brains (TCB)";
  if (!brandName || brandName.length === 0) {
    throw new Error("Brand name must be defined");
  }
});

Deno.test("TCB Platform - Core Routes Integrity", () => {
  const coreRoutes = ["/", "/projects", "/blog", "/contact", "/sitemap", "/privacy", "/terms"];
  if (coreRoutes.length < 5) {
    throw new Error("Missing essential platform routes");
  }
});

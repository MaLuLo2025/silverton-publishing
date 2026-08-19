import { MetadataRoute } from "next";

// No /api/ disallow needed (unlike GSS) — this app adds no API routes.
// MailerLite is a client-side embed and the select-admin analytics relay
// is an external sendBeacon call; neither routes through this app's server.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://silvertonpublishing.com/sitemap.xml",
  };
}

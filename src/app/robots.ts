// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.pangpangpet.com/sitemap.xml",
    host: "https://www.pangpangpet.com",
  };
}

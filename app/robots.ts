import type { MetadataRoute } from "next";
import { siteUrl, withBasePath } from "@/lib/site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}${withBasePath("/sitemap.xml")}`,
  };
}

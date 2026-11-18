import type { MetadataRoute } from "next";
import { services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = ["", "/services", "/work", "/about", "/contact", ...services.map(s => `/services/${s.slug}`)];
  return paths.map(path => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.6 }));
}

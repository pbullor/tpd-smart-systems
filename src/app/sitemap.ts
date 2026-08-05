import type { MetadataRoute } from "next";
import { getAllContactSlugs } from "@/data/teamContacts";

export default function sitemap(): MetadataRoute.Sitemap {
  const contactPages = getAllContactSlugs().map((slug) => ({
    url: `https://tpdsmart.com/c/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://tpdsmart.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...contactPages,
  ];
}

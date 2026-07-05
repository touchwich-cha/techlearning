import type { MetadataRoute } from "next";

const siteUrl = "https://techlearning-sage.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["th", "en"];
  const pages = ["", "services", "portfolio", "process", "about", "contact"];
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified,
      changeFrequency: page === "" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1 : 0.8,
    }))
  );
}
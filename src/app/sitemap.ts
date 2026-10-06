import type { MetadataRoute } from "next";

const baseUrl = "https://the-quran-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/apps",
    "/apps/my-own-prayer",
    "/software",
    "/software/my-own-quran",
    "/software/learnquran",
    "/articles",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/apps" ||
            route === "/software" ||
            route === "/articles"
          ? 0.9
          : 0.7,
  }));
}
import type { MetadataRoute } from "next";

const siteUrl = "https://worldwideedigital.in";

const routes = [
  "",
  "/about",
  "/services",
  "/celebrity-management",
  "/gallery",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}

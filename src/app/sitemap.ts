import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://dentalbrassttacks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/testimonials`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.9 },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}

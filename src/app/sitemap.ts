import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://jikgwango.vercel.app", lastModified: new Date() },
    { url: "https://jikgwango.vercel.app/games", lastModified: new Date() },
    { url: "https://jikgwango.vercel.app/stadiums", lastModified: new Date() },
    { url: "https://jikgwango.vercel.app/food", lastModified: new Date() },
    { url: "https://jikgwango.vercel.app/checklist", lastModified: new Date() },
  ];
}

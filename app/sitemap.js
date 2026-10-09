import { site } from "../lib/site";

export default function sitemap() {
  const routes = ["", "features", "pricing", "faq", "about", "contact"];
  return routes.map((route) => ({
    url: `${site.url}/${route ? route + "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

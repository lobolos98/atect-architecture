const pages = ["/","/about","/services","/projects","/3d-renderings","/process","/reviews","/resources","/resources/design-tools","/resources/construction","/resources/home-interiors","/resources/technology","/resources/architectural-drawings-vs-construction-drawings","/resources/what-should-be-included-construction-document-set","/resources/what-to-know-before-home-addition","/resources/choosing-exterior-materials","/resources/choosing-lighting","/residential-architecture","/architectural-construction-documents","/architectural-design-firm-cost","/architectural-design-firm-vs-drafting","/maryland-architect","/washington-dc-architect","/northern-virginia-architect","/contact","/privacy"];

export const GET = () => {
  const body = pages.map((path) => `<url><loc>https://atectarchitecture.com${path}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
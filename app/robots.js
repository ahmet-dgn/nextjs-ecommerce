export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/cart/",
        "/checkout/",
        "/account/",
        "/password/",
        "/login/",
        "/signup/",
      ],
    },
    sitemap: `${process.env.WEB_SITE_URL}/sitemap.xml`,
  };
}

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
  };
}

import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      "ar",
      "fr",
      "cs",
      "de",
      "dk",
      "es",
      "he",
      "id",
      "it",
      "ja",
      "ko",
      "ms",
      "nl",
      "no",
      "pl",
      "pt-BR",
      "pt",
      "ru",
      "sk",
      "sv",
      "th",
      "tr",
      "uk",
      "vi",
      "zh-Hans",
      "zh",
    ],
    theme: {
      light: {
        colors: {
          // Primary (Purple)
          primary100: "#F3E8FF",
          primary200: "#E9D5FF",
          primary500: "#A855F7",
          primary600: "#9333EA",
          primary700: "#7E22CE",

          // Deep Purple (Secondary emphasis)
          secondary100: "#EDE9FE",
          secondary200: "#DDD6FE",
          secondary500: "#7C3AED",
          secondary600: "#6D28D9",
          secondary700: "#5B21B6",

          // Background
          neutral0: "#FFFFFF",
          neutral100: "#F8F8F8",
          neutral150: "#F5F5F5",

          // Buttons
          buttonPrimary500: "#9333EA",
          buttonPrimary600: "#7E22CE",
        },
      },
    },
  },

  head: {
    title: "GreaterWorks CMS", // Browser tab title
  },

  tutorials: false,
  notifications: { releases: false },

  translations: {
    en: {
      "Auth.form.welcome.title": "Welcome to GreaterWorks CMS",
      "Auth.form.welcome.subtitle": "Log in to continue",
    },
  },

  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};

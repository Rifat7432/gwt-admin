import type { StrapiApp } from "@strapi/strapi/admin";
import { getPluginPresets } from "@_sh/strapi-plugin-ckeditor";

import "./styles/fonts.css";
import Favicon from "../extensions/favicon.png";

export default {
  config: {
    head: {
      title: "GreaterWorks CMS",
      favicon: Favicon,
    },

    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to GreaterWorks CMS",
        "Auth.form.welcome.subtitle": "Log in to continue",
      },
    },
  },

  register() {
    const presets = getPluginPresets();

    presets.defaultHtml.editorConfig = {
      ...presets.defaultHtml.editorConfig,

      fontFamily: {
        options: ["Satoshi, Arial, sans-serif"],
        supportAllValues: false,
      },
    };

    presets.defaultHtml.styles = `
      .ck-content,
      .ck.ck-editor__editable_inline {
        font-family: "Satoshi", Arial, sans-serif !important;
      }
    `;
  },

  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
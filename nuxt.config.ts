// https://nuxt.com/docs/api/configuration/nuxt-config
import { APP_NAME } from "./utils";
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  components: [{ path: "~/components", pathPrefix: false, global: true }],
  app: {
    head: {
      viewport: "width=600, initial-scale=1",
      title: "Welcome",
      titleTemplate: `%s - ${APP_NAME}`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Art Paper Board, BBQ Peach Papers, Colored Papers, Copy Paper, Duplex Board Papers, Kraft Paper, Newsprint Paper, Soft Tissue Paper, Thermal Paper Rolls, Unbleached Stuffing Paper, Writing & Printing Paper",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
        },
      ],
    },
  },
});

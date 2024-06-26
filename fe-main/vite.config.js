import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";
import { loadingScript } from "vite-plugin-loading-script";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`,
    }),
    loadingScript({
      externalSrc: `https://mini-zalo-app.pages.dev/`,
      fileName: "app.js",
    }),
    vue(),
    federation({
      name: "host-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/components/Footer.vue",
      },
      remotes: {
        fe_ordervehicle: "http://localhost:3001/assets/remoteEntry.js",
        fe_profile: "http://localhost:3002/assets/remoteEntry.js",
        fe_history: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: {
        vue: {},
        pinia: {},
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`,
    }),
    vue(),
    federation({
      name: "fe_ordervehicle",
      filename: "remoteEntry.js",
      exposes: {
        "./setup": "./src/setup.js",
      },
      remotes: {
        master_app:
          (process.env.VITE_HOST || "http://localhost:3000") +
          "/assets/remoteEntry.js",
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
    port: 3001,
  },
  preview: {
    port: 3001,
  },
});

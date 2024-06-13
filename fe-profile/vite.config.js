import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import federation from '@originjs/vite-plugin-federation'
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [topLevelAwait({
    promiseExportName: "__tla",
    promiseImportName: (i) => `__tla_${i}`
  }), vue(), federation({
    name: "fe_profile",
    filename: "remoteEntry.js",
    exposes: {
      "./App": './src/App.vue',
      "./setup": "./src/setup.js"
    },
    remotes: {
      master_app: "http://localhost:3000/assets/remoteEntry.js"
    },
    shared: {
      vue: {},
    }
  })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  server: {
    port: 3002
  },
  preview: {
    port: 3002
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import federation from '@originjs/vite-plugin-federation'
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`
    }),
    vue(),
    federation({
      name: "fe_main",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/App.vue'
      },
      remotes: {
        fe_admin: 'http://localhost:3001/assets/remoteEntry.js',
        fe_driver: 'http://localhost:3002/assets/remoteEntry.js',
        fe_restaurant: 'http://localhost:3003/assets/remoteEntry.js',
        fe_user: 'http://localhost:3004/assets/remoteEntry.js'
      },
      shared: {
        vue: {}
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})

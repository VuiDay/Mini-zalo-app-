// vite.config.js
import { defineConfig } from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-profile/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-profile/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import federation from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-profile/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import topLevelAwait from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-profile/node_modules/vite-plugin-top-level-await/exports/import.mjs";
var __vite_injected_original_dirname = "D:\\WorkSpace\\D\u1EF1 \xE1n t\u1EC9 \u0111\xF4\\Mini-zalo-app-\\fe-profile";
var vite_config_default = defineConfig({
  plugins: [
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`
    }),
    vue(),
    federation({
      name: "fe_profile",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.vue",
        "./setup": "./src/setup.js"
      },
      remotes: {
        master_app: (process.env.VITE_HOST || "http://localhost:3000") + "/assets/remoteEntry.js"
      },
      shared: {
        vue: {}
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  },
  server: {
    port: 3002
  },
  preview: {
    port: 3002
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrU3BhY2VcXFxcRFx1MUVGMSBcdTAwRTFuIHRcdTFFQzkgXHUwMTExXHUwMEY0XFxcXE1pbmktemFsby1hcHAtXFxcXGZlLXByb2ZpbGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdvcmtTcGFjZVxcXFxEXHUxRUYxIFx1MDBFMW4gdFx1MUVDOSBcdTAxMTFcdTAwRjRcXFxcTWluaS16YWxvLWFwcC1cXFxcZmUtcHJvZmlsZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV29ya1NwYWNlL0QlRTElQkIlQjElMjAlQzMlQTFuJTIwdCVFMSVCQiU4OSUyMCVDNCU5MSVDMyVCNC9NaW5pLXphbG8tYXBwLS9mZS1wcm9maWxlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tIFwiQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb25cIjtcbmltcG9ydCB0b3BMZXZlbEF3YWl0IGZyb20gXCJ2aXRlLXBsdWdpbi10b3AtbGV2ZWwtYXdhaXRcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB0b3BMZXZlbEF3YWl0KHtcbiAgICAgIHByb21pc2VFeHBvcnROYW1lOiBcIl9fdGxhXCIsXG4gICAgICBwcm9taXNlSW1wb3J0TmFtZTogKGkpID0+IGBfX3RsYV8ke2l9YCxcbiAgICB9KSxcbiAgICB2dWUoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIG5hbWU6IFwiZmVfcHJvZmlsZVwiLFxuICAgICAgZmlsZW5hbWU6IFwicmVtb3RlRW50cnkuanNcIixcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgXCIuL0FwcFwiOiBcIi4vc3JjL0FwcC52dWVcIixcbiAgICAgICAgXCIuL3NldHVwXCI6IFwiLi9zcmMvc2V0dXAuanNcIixcbiAgICAgIH0sXG4gICAgICByZW1vdGVzOiB7XG4gICAgICAgIG1hc3Rlcl9hcHA6XG4gICAgICAgICAgKHByb2Nlc3MuZW52LlZJVEVfSE9TVCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiKSArXG4gICAgICAgICAgXCIvYXNzZXRzL3JlbW90ZUVudHJ5LmpzXCIsXG4gICAgICB9LFxuICAgICAgc2hhcmVkOiB7XG4gICAgICAgIHZ1ZToge30sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMixcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDMwMDIsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVgsU0FBUyxvQkFBb0I7QUFDcFosT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLG1CQUFtQjtBQUoxQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxjQUFjO0FBQUEsTUFDWixtQkFBbUI7QUFBQSxNQUNuQixtQkFBbUIsQ0FBQyxNQUFNLFNBQVMsQ0FBQztBQUFBLElBQ3RDLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxhQUNHLFFBQVEsSUFBSSxhQUFhLDJCQUMxQjtBQUFBLE1BQ0o7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUssQ0FBQztBQUFBLE1BQ1I7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

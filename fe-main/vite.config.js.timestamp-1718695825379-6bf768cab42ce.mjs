// vite.config.js
import { defineConfig } from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-main/node_modules/.pnpm/vite@5.2.12/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-main/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.12_vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import federation from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-main/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.5/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import topLevelAwait from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-main/node_modules/.pnpm/vite-plugin-top-level-await@1.4.1_rollup@4.18.0_vite@5.2.12/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import { loadingScript } from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-main/node_modules/.pnpm/vite-plugin-loading-script@1.0.2_rollup@4.18.0_vite@5.2.12/node_modules/vite-plugin-loading-script/dist/index.js";
var __vite_injected_original_dirname = "D:\\WorkSpace\\D\u1EF1 \xE1n t\u1EC9 \u0111\xF4\\Mini-zalo-app-\\fe-main";
var vite_config_default = defineConfig({
  plugins: [
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`
    }),
    loadingScript({
      externalSrc: `https://mini-zalo-app.pages.dev/`,
      fileName: "app.js"
    }),
    vue(),
    federation({
      name: "host-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/components/Footer.vue"
      },
      remotes: {
        fe_ordervehicle: "http://localhost:3001/assets/remoteEntry.js",
        fe_profile: "http://localhost:3002/assets/remoteEntry.js",
        fe_history: "http://localhost:3003/assets/remoteEntry.js"
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
    port: 3e3
  },
  preview: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrU3BhY2VcXFxcRFx1MUVGMSBcdTAwRTFuIHRcdTFFQzkgXHUwMTExXHUwMEY0XFxcXE1pbmktemFsby1hcHAtXFxcXGZlLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdvcmtTcGFjZVxcXFxEXHUxRUYxIFx1MDBFMW4gdFx1MUVDOSBcdTAxMTFcdTAwRjRcXFxcTWluaS16YWxvLWFwcC1cXFxcZmUtbWFpblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV29ya1NwYWNlL0QlRTElQkIlQjElMjAlQzMlQTFuJTIwdCVFMSVCQiU4OSUyMCVDNCU5MSVDMyVCNC9NaW5pLXphbG8tYXBwLS9mZS1tYWluL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tIFwiQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb25cIjtcbmltcG9ydCB0b3BMZXZlbEF3YWl0IGZyb20gXCJ2aXRlLXBsdWdpbi10b3AtbGV2ZWwtYXdhaXRcIjtcbmltcG9ydCB7IGxvYWRpbmdTY3JpcHQgfSBmcm9tIFwidml0ZS1wbHVnaW4tbG9hZGluZy1zY3JpcHRcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB0b3BMZXZlbEF3YWl0KHtcbiAgICAgIHByb21pc2VFeHBvcnROYW1lOiBcIl9fdGxhXCIsXG4gICAgICBwcm9taXNlSW1wb3J0TmFtZTogKGkpID0+IGBfX3RsYV8ke2l9YCxcbiAgICB9KSxcbiAgICBsb2FkaW5nU2NyaXB0KHtcbiAgICAgIGV4dGVybmFsU3JjOiBgaHR0cHM6Ly9taW5pLXphbG8tYXBwLnBhZ2VzLmRldi9gLFxuICAgICAgZmlsZU5hbWU6IFwiYXBwLmpzXCIsXG4gICAgfSksXG4gICAgdnVlKCksXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBuYW1lOiBcImhvc3QtYXBwXCIsXG4gICAgICBmaWxlbmFtZTogXCJyZW1vdGVFbnRyeS5qc1wiLFxuICAgICAgZXhwb3Nlczoge1xuICAgICAgICBcIi4vRm9vdGVyXCI6IFwiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIudnVlXCIsXG4gICAgICB9LFxuICAgICAgcmVtb3Rlczoge1xuICAgICAgICBmZV9vcmRlcnZlaGljbGU6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2Fzc2V0cy9yZW1vdGVFbnRyeS5qc1wiLFxuICAgICAgICBmZV9wcm9maWxlOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9hc3NldHMvcmVtb3RlRW50cnkuanNcIixcbiAgICAgICAgZmVfaGlzdG9yeTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDMvYXNzZXRzL3JlbW90ZUVudHJ5LmpzXCIsXG4gICAgICB9LFxuICAgICAgc2hhcmVkOiB7XG4gICAgICAgIHZ1ZToge30sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFcsU0FBUyxvQkFBb0I7QUFDM1ksT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLHFCQUFxQjtBQUw5QixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxjQUFjO0FBQUEsTUFDWixtQkFBbUI7QUFBQSxNQUNuQixtQkFBbUIsQ0FBQyxNQUFNLFNBQVMsQ0FBQztBQUFBLElBQ3RDLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxpQkFBaUI7QUFBQSxRQUNqQixZQUFZO0FBQUEsUUFDWixZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sS0FBSyxDQUFDO0FBQUEsTUFDUjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

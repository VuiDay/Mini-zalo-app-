// vite.config.js
import { defineConfig } from "file:///D:/vue/GoApp/fe-ordervehicle/node_modules/.pnpm/vite@5.2.12/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/vue/GoApp/fe-ordervehicle/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.12_vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import federation from "file:///D:/vue/GoApp/fe-ordervehicle/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.5/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import topLevelAwait from "file:///D:/vue/GoApp/fe-ordervehicle/node_modules/.pnpm/vite-plugin-top-level-await@1.4.1_rollup@4.18.0_vite@5.2.12/node_modules/vite-plugin-top-level-await/exports/import.mjs";
var __vite_injected_original_dirname = "D:\\vue\\GoApp\\fe-ordervehicle";
var vite_config_default = defineConfig({
  plugins: [
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`
    }),
    vue(),
    federation({
      name: "fe_ordervehicle",
      filename: "remoteEntry.js",
      exposes: {
        "./setup": "./src/setup.js"
      },
      remotes: {
        master_app: "http://localhost:3000/assets/remoteEntry.js"
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
    port: 3001
  },
  preview: {
    port: 3001
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx2dWVcXFxcR29BcHBcXFxcZmUtb3JkZXJ2ZWhpY2xlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx2dWVcXFxcR29BcHBcXFxcZmUtb3JkZXJ2ZWhpY2xlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi92dWUvR29BcHAvZmUtb3JkZXJ2ZWhpY2xlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbidcclxuaW1wb3J0IHRvcExldmVsQXdhaXQgZnJvbSBcInZpdGUtcGx1Z2luLXRvcC1sZXZlbC1hd2FpdFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbdG9wTGV2ZWxBd2FpdCh7XHJcbiAgICBwcm9taXNlRXhwb3J0TmFtZTogXCJfX3RsYVwiLFxyXG4gICAgcHJvbWlzZUltcG9ydE5hbWU6IChpKSA9PiBgX190bGFfJHtpfWBcclxuICB9KSwgdnVlKCksIGZlZGVyYXRpb24oe1xyXG4gICAgbmFtZTogXCJmZV9vcmRlcnZlaGljbGVcIixcclxuICAgIGZpbGVuYW1lOiBcInJlbW90ZUVudHJ5LmpzXCIsXHJcbiAgICBleHBvc2VzOiB7XHJcbiAgICAgIFwiLi9zZXR1cFwiOiBcIi4vc3JjL3NldHVwLmpzXCJcclxuICAgIH0sXHJcbiAgICByZW1vdGVzOiB7XHJcbiAgICAgIG1hc3Rlcl9hcHA6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2Fzc2V0cy9yZW1vdGVFbnRyeS5qc1wiXHJcbiAgICB9LFxyXG4gICAgc2hhcmVkOiB7XHJcbiAgICAgIHZ1ZToge30sXHJcbiAgICB9XHJcbiAgfSlcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIilcclxuICAgIH1cclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMSxcclxuICB9LFxyXG4gIHByZXZpZXc6IHtcclxuICAgIHBvcnQ6IDMwMDFcclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFEsU0FBUyxvQkFBb0I7QUFDM1MsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLG1CQUFtQjtBQUoxQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFBQyxjQUFjO0FBQUEsTUFDdEIsbUJBQW1CO0FBQUEsTUFDbkIsbUJBQW1CLENBQUMsTUFBTSxTQUFTLENBQUM7QUFBQSxJQUN0QyxDQUFDO0FBQUEsSUFBRyxJQUFJO0FBQUEsSUFBRyxXQUFXO0FBQUEsTUFDcEIsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixLQUFLLENBQUM7QUFBQSxNQUNSO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDRDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

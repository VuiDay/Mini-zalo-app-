// vite.config.js
import { defineConfig } from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-ordervehicle/node_modules/.pnpm/vite@5.2.13/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-ordervehicle/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.2.13_vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import federation from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-ordervehicle/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.5/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import topLevelAwait from "file:///D:/WorkSpace/D%E1%BB%B1%20%C3%A1n%20t%E1%BB%89%20%C4%91%C3%B4/Mini-zalo-app-/fe-ordervehicle/node_modules/.pnpm/vite-plugin-top-level-await@1.4.1_rollup@4.18.0_vite@5.2.13/node_modules/vite-plugin-top-level-await/exports/import.mjs";
var __vite_injected_original_dirname = "D:\\WorkSpace\\D\u1EF1 \xE1n t\u1EC9 \u0111\xF4\\Mini-zalo-app-\\fe-ordervehicle";
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
    port: 3001
  },
  preview: {
    port: 3001
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrU3BhY2VcXFxcRFx1MUVGMSBcdTAwRTFuIHRcdTFFQzkgXHUwMTExXHUwMEY0XFxcXE1pbmktemFsby1hcHAtXFxcXGZlLW9yZGVydmVoaWNsZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcV29ya1NwYWNlXFxcXERcdTFFRjEgXHUwMEUxbiB0XHUxRUM5IFx1MDExMVx1MDBGNFxcXFxNaW5pLXphbG8tYXBwLVxcXFxmZS1vcmRlcnZlaGljbGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1dvcmtTcGFjZS9EJUUxJUJCJUIxJTIwJUMzJUExbiUyMHQlRTElQkIlODklMjAlQzQlOTElQzMlQjQvTWluaS16YWxvLWFwcC0vZmUtb3JkZXJ2ZWhpY2xlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tIFwiQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb25cIjtcbmltcG9ydCB0b3BMZXZlbEF3YWl0IGZyb20gXCJ2aXRlLXBsdWdpbi10b3AtbGV2ZWwtYXdhaXRcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB0b3BMZXZlbEF3YWl0KHtcbiAgICAgIHByb21pc2VFeHBvcnROYW1lOiBcIl9fdGxhXCIsXG4gICAgICBwcm9taXNlSW1wb3J0TmFtZTogKGkpID0+IGBfX3RsYV8ke2l9YCxcbiAgICB9KSxcbiAgICB2dWUoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIG5hbWU6IFwiZmVfb3JkZXJ2ZWhpY2xlXCIsXG4gICAgICBmaWxlbmFtZTogXCJyZW1vdGVFbnRyeS5qc1wiLFxuICAgICAgZXhwb3Nlczoge1xuICAgICAgICBcIi4vc2V0dXBcIjogXCIuL3NyYy9zZXR1cC5qc1wiLFxuICAgICAgfSxcbiAgICAgIHJlbW90ZXM6IHtcbiAgICAgICAgbWFzdGVyX2FwcDpcbiAgICAgICAgICAocHJvY2Vzcy5lbnYuVklURV9IT1NUIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIpICtcbiAgICAgICAgICBcIi9hc3NldHMvcmVtb3RlRW50cnkuanNcIixcbiAgICAgIH0sXG4gICAgICBzaGFyZWQ6IHtcbiAgICAgICAgdnVlOiB7fSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAxLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogMzAwMSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzWSxTQUFTLG9CQUFvQjtBQUNuYSxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sbUJBQW1CO0FBSjFCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxNQUNaLG1CQUFtQjtBQUFBLE1BQ25CLG1CQUFtQixDQUFDLE1BQU0sU0FBUyxDQUFDO0FBQUEsSUFDdEMsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLGFBQ0csUUFBUSxJQUFJLGFBQWEsMkJBQzFCO0FBQUEsTUFDSjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sS0FBSyxDQUFDO0FBQUEsTUFDUjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

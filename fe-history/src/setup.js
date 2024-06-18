// import en from "/src/languages/en";
// import vi from "/src/languages/vi";

// if (window.$i18n) {
//     window.$i18n.setLocaleMessage("vi", vi);
//     window.$i18n.setLocaleMessage("en", en);
//     // setTimeout(() => {
//     //     window.$i18n.changeLocale("en");
//     // }, 5000);
// }

import { useHistoryStore } from "@/stores/historyStore";

if (window.$router) {
  const addedRoute = window.$router.getRoutes();
  const routes = [
    {
      path: "/history",
      name: "HistoryCar",
      component: () => import("@/layouts/layoutMain.vue"),
      children: [
        {
          path: "",
          name: "HistoryMain",
          component: () => import("@/views/History.vue"),
        },

        {
          path: "history-detail",
          name: "HistoryDetail",
          component: () => import("@/views/details/HistoryDetails.vue"),
        },
      ],
    },
  ];
  routes.forEach((r) => {
    const existed = addedRoute.find((r2) => r2.path === r.path);
    if (!existed) {
      window.$router.addRoute(r);
    }
  });
}

if (window.$stores) {
  // window.$stores.layout.tab.push({
  //     label: window.remoteApp["orderVehicle"].label || "Sản phẩm",
  //     icon: window.remoteApp["orderVehicle"].icon || "pi pi-inbox",
  //     position: window.remoteApp["orderVehicle"].position,
  //     component: shallowRef(Product),
  //     role: ["owner", "manage", "staff", "user"]
  // });
  window.$stores.history = useHistoryStore;
}

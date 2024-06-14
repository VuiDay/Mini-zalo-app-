import en from "@/languages/en";
import vi from "@/languages/vi";
import { useOrderVehicleStore } from "./stores/orderVehicle";
// import './style.css';

if (window.$i18n) {
  window.$i18n.setLocaleMessage("vi", vi);
  window.$i18n.setLocaleMessage("en", en);
  // setTimeout(() => {
  //     window.$i18n.changeLocale("en");
  // }, 5000);
}

if (window.$router) {
  const addedRoute = window.$router.getRoutes();
  const routes = [
    {
      path: "/order-vehicle",
      name: "OrderVehicle",
      component: () => import("@/layouts/layoutMain.vue"),
      children: [
        {
          path: "",
          name: "main",
          component: () => import("@/views/Main.vue"),
        },
      ],
    },
    {
      path: "/booking",
      name: "booking",
      component: () => import("@/layouts/layoutBooking.vue"),
      children: [
        {
          path: "",
          name: "formbooking",
          component: () => import("@/views/FormBooking/BookingForm.vue"),
        },
        {
          path: "accept",
          name: "acceptbooking",
          component: () => import("@/views/FormBooking/AcceptBooking.vue"),
        },
      ],
    },
  ];
  routes.forEach((r) => {
    const existed = addedRoute.find((r2) => r2.path === r.path);
    if (!existed) {
      console.log(window.$router, "123");
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
  window.$stores.orderVehicle = useOrderVehicleStore;
}

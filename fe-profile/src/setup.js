import "./style.css";
import { useProfileStore } from "./stores/profileStrore";

if (window.$router) {
  const addedRoute = window.$router.getRoutes();
  const routes = [
    {
      path: "/profile",
      name: "Profile",
      component: () => import("@/layouts/layoutMain.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/Information.vue"),
        },
      ],
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import("@/views/FAQ.vue"),
    },
    {
      path: "/invite",
      name: "Invite",
      component: () => import("@/views/InviteFriend.vue"),
    },
    {
      path: "/registration",
      name: "Registration",
      component: () => import("@/views/Registration.vue"),
    },
    {
      path: "/authen-card",
      name: "AuthenCard",
      component: () => import("@/views/AuthenCard.vue"),
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
}

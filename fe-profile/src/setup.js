import "./style.css";

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
  ];
  routes.forEach((r) => {
    const existed = addedRoute.find((r2) => r2.path === r.path);
    if (!existed) {
      window.$router.addRoute(r);
    }
  });
}

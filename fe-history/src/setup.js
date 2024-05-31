// import en from "/src/languages/en";
// import vi from "/src/languages/vi";

// if (window.$i18n) {
//     window.$i18n.setLocaleMessage("vi", vi);
//     window.$i18n.setLocaleMessage("en", en);
//     // setTimeout(() => {
//     //     window.$i18n.changeLocale("en");
//     // }, 5000);
// }
import History from "./views/History.vue";


if (window.$router) {
    const addedRoute = window.$router.getRoutes();
    const routes = [
        {
            path: "/history",
            name: "History",
            component: () => import("@/views/History.vue"),

        }
    ];
    routes.forEach((r) => {
        const existed = addedRoute.find((r2) => r2.path === r.path);
        if (!existed) {
            window.$router.addRoute(r);
        }
    });
}
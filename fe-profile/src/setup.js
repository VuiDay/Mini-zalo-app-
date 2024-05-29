console.log(1)

if (window.$router) {
    const addedRoute = window.$router.getRoutes();
    const routes = [
        {
            path: "/profile",
            name: "Profile",
            component: () => import("@/layouts/layoutMain.vue")
        }
    ];
    routes.forEach((r) => {
        const existed = addedRoute.find((r2) => r2.path === r.path);
        if (!existed) {
            window.$router.addRoute(r);
        }
    });
}
import en from "/src/languages/en";
import vi from "/src/languages/vi";

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
                    name: 'main',
                    component: () => import("@/views/Main.vue"),
                },
            ]
        },
        {
            path: "/booking",
            name: 'booking',
            component: () => import("@/layouts/layoutBooking.vue"),
            children: [
                {
                    path: "",
                    name: 'formbooking',
                    component: () => import("@/views/BookingForm.vue"),
                }
            ]
        }
    ];
    routes.forEach((r) => {
        const existed = addedRoute.find((r2) => r2.path === r.path);
        if (!existed) {
            console.log(window.$router, '123')
            window.$router.addRoute(r);
        }
    });
}
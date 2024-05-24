import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "",
            component: () => import("@/components/HelloWorld.vue")
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (document.documentElement.scrollTop) window.scrollTo(0, 0);
    next();
});
window.$router = router;
export default router;
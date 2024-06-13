import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "",
      component: () => import("@/views/Welcome.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (document.documentElement.scrollTop) window.scrollTo(0, 0);
  next();
});
window.$router = router;
export default router;

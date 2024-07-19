import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MainContent",
      component: () => import("@/components/pages/MainContent.vue"),
    },
    {
      path: "/rule",
      name: "RulePage",
      component: () => import("@/components/pages/RulePage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next("/");
  } else {
    next();
  }
});

export default router;

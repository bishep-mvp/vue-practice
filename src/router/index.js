import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: "main",
        auth: true,
      },
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/HelpView.vue"),
      meta: {
        layout: "main",
        auth: true,
      },
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
      meta: {
        layout: "auth",
        auth: false,
      },
    },
  ],
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;

  if (requireAuth && store.getters["auth/isAuthenticated"]) {
    next();
  } else if (requireAuth && !store.getters["auth/isAuthenticated"]) {
    next("/auth?message=auth");
  } else {
    next();
  }
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/main/main.vue";
import Signup from "@/views/auth/signup.vue";
import Portfolio from "@/views/portfolio/portfolio.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

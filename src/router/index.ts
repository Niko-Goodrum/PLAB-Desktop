import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/main/main.vue";
import Signup from "@/views/auth/signup/signup.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

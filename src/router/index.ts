import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Signup from "@/views/auth/signup.vue";

const routes: Array<RouteRecordRaw> = [
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

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/main/main.vue";
import Signup from "@/views/auth/signup/signup.vue";
import Signin from "@/views/auth/signin/signin.vue";

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
        path: "/signin",
        component: Signin,
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

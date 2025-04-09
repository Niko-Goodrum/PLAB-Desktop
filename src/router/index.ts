import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Main from "@/views/main/main.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Main,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {paths} from "src/constants/paths";


const Router: Array<RouteRecordRaw> = [
    {
        path: `${paths.main}`,
        name: "Main",
        component: () => import("src/views/시현이 사랑해")  // 경로는 추후 서정하기
    }
]

export default Router;
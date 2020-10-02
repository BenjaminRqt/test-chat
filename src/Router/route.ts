import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../components/HomePage.vue";
import RegisterPage from "../components/RegisterPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: HomePage
    },
    {
        path: "/register",
        alias: "/register",
        name: "register",
        component: RegisterPage
    }
];

export default createRouter({
    history: createWebHistory(),
    routes: routes,
});

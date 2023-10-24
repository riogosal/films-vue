import { createWebHistory, createRouter } from "vue-router";
import AboutVue from "../pages/About.vue";
import HomeVue from "../pages/Home.vue";
import ContactVue from "../pages/Contact.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: HomeVue
    },
    {
        path: "/about",
        name: "about",
        component: AboutVue
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
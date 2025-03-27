import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/contact-us', name: 'Contact Us', component: ContactUsView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

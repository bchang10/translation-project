import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Test from '../pages/Test.vue'
import Translate from '../pages/Translate.vue'

// Define routes for your application
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/translate', name: 'Translate', component: Translate },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/test', name: 'Test', component: Test }
]

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
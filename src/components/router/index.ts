import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Flashcard from '../pages/Flashcard.vue'

// Define routes for your application
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/flashcard', name: 'Flashcard', component: Flashcard }
]

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
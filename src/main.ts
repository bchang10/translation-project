import './assets/main.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './components/router/index.ts'

const app = createApp(App)

const myPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
})

app.use(createPinia())
app.use(PrimeVue, {
    theme: {
        preset: myPreset,
        options: {
            darkModeSelector: 'none'
        }
    }
})
app.use(router)

app.mount('#app')

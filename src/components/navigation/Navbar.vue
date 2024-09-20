<script setup>
import Toolbar from 'primevue/menubar'
import Logo from './Logo.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const items = [
    { 
        label: 'Flashcard',
        command: () => {router.push('/flashcard')} 
    },
    { 
        label: 'Contact',
        command: () => {router.push('/contact')} 
    },
    { 
        label: 'About',
        command: () => {router.push('/about')}
    }
]

</script>

<template>
    <Toolbar :model="items">
        <template #start>
            <Logo />
        </template>
        <template #item="{ item }">
            <RouterLink>
                {{ item.label }}
            </RouterLink>
        </template>
    </Toolbar>
</template>

<style lang="scss" scoped>

</style>

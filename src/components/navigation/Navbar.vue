<script setup>
import MenuBar from 'primevue/menubar'
import Logo from './Logo.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const items = [
    { 
        label: 'Translate',
        command: () => {router.push('/translate')} 
    },
    { 
        label: 'Test',
        command: () => {router.push('/test')} 
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
    <MenuBar :model="items">
        <template #start>
            <Logo />
        </template>
        <template #item="{ item }">
            {{ item.label }}
        </template>
    </MenuBar>
</template>

<style lang="scss" scoped>

</style>

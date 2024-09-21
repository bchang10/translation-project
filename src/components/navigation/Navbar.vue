<script setup>
import MenuBar from 'primevue/menubar'
import Logo from './Logo.vue'
import { useRouter } from 'vue-router'

import { ref, onMounted } from 'vue'
import { auth, provider } from '../../firebaseConfig';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

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

const user = ref(null)

const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider)
        user.value = result.user
        console.log('User Info:', user.value)
    } catch (error) {
        console.error('Error during login:', error)
    }
}

const logout = async () => {
    try {
        await signOut(auth)
        user.value = null
    } catch (error) {
        console.error('Error during logout:', error)
    }
}

onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
    })
})

</script>

<template>
    <MenuBar :model="items">
        <template #start>
            <Logo />
        </template>
        <template #item="{ item }">
            {{ item.label }}
        </template>

        <template #end>
            <button @click="user ? logout() : loginWithGoogle()">
                {{ user ? `Logout (${user.displayName})` : 'Login with Google' }}
            </button>
        </template>


    </MenuBar>
</template>


<style lang="scss" scoped>
.menu-bar {
    display: flex;
    justify-content: space-between; // Distribute space evenly
    width: 100%;
}

.menu-item {
    flex: 1; // Make each item take up equal space
    text-align: center; // Center text in each item
}

button {
    padding: 10px 20px;
    background-color: #4285F4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px; // Add space between menu items and button
}

button:hover {
    background-color: #357AE8;
}
</style>

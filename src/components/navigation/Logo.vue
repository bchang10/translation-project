<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateHome() {
    return router.push('/')
}
</script>

<template>
    <RouterLink>
        <img @click=navigateHome() src="../../assets/SmileyFace.jpg"/>
    </RouterLink>
</template>

<style lang="scss" scoped>

</style>
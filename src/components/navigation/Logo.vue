<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateHome() {
    router.push('/')
}
</script>

<template>
    <img @click=navigateHome() src="../../assets/SmileyFace.jpg"/>
</template>

<style lang="scss" scoped>

</style>
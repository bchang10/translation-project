<script setup>
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import { ref } from 'vue'
    import axios from 'axios'

    const userText = ref('')
    const translatedText = ref('')

    const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY
    const API_URL = "https://translation.googleapis.com/language/translate/v2"

    async function translate(text){
        if(text!=""){
            const res = await axios.post(
                `${API_URL}?key=${API_KEY}`,
                {
                    q: text,
                    target: "hmn"
                }
            )
        translatedText.value = (res.data.data.translations[0].translatedText)
        }
    }
</script>

<template>
    <div>
        Translated text: {{ translatedText }}
    </div>
    <div>
        <InputText type="text" id="userText" size="large" placeholder="Enter text" v-model="userText"/>
        <Button label = "Translate" @click="translate(userText)" />
        
    </div>
</template>

<style lang="scss" scoped>

</style>
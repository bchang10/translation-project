<script setup>
    import Words from '../../words.json'
    import { ref } from 'vue'
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import axios from 'axios'

    const API_URL = "https://translation.googleapis.com/language/translate/v2"
    const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY

    const randomWord = ref(Words.nounArray[Math.floor(Math.random() * Words.nounArray.length)])
    const userResponse = ref('')
    const translatedWord = ref('')
    const previousAnswer = ref('')
    const score = ref(0)
    const total = ref(0)
    const generatedNumbers = new Set()

    generateNextWord()

    async function generateNextWord(){
        
        const res = await axios.post(
                `${API_URL}?key=${API_KEY}`,
                {
                    q: randomWord.value,
                    target: "hmn"
                }
            )
        translatedWord.value = (res.data.data.translations[0].translatedText)
    }

    function checkAnswer(){
        previousAnswer.value = randomWord.value
        const randomNumber = Math.floor(Math.random() * Words.nounArray.length)

        if (userResponse.value == randomWord.value){
            score.value = score.value + 1
        }
        total.value = total.value + 1

        console.log("User response: ", userResponse.value)
        console.log("Random word : ", randomWord.value)
        console.log("Translated word: ", translatedWord.value)
        userResponse.value = ""
        randomWord.value = Words.nounArray[randomNumber]
        generateNextWord()
    }
</script>

<template>
    <h1>{{ translatedWord }}</h1>
    <div>
        <InputText placeholder="Enter answer" v-model="userResponse" class="w-full p-2 border-2 border-gray-300 focus:border-blue-500 rounded-lg"/>
        <Button label="Submit" @click="checkAnswer()"/>
    </div>
    <h1>Score: {{score}}/{{total}}</h1>
    <h1>Previous answer: {{ previousAnswer }}</h1>
</template>

<style lang="scss" scoped>

</style>
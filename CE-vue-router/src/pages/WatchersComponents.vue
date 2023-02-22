

<template>
    <br /><br />
    <h2>{{question}}</h2>
    <input type="text" v-model="answer">
    <br>
    <h3 v-text="response"></h3>


</template>

<script setup>
import answers from "../assets/answerData.json"

import {ref, watch} from "vue";
let question = ref("Do you like Pizza?")
let answer = ref("");
let response = ref("Give me an answer!!!");

watch (answer, async (newAnswer) => {
    // console.log("Watch conected")
    if (answer.value.toLocaleLowerCase() === "si") {
        response.value = answers.positive
    } else if (answer.value.toLocaleLowerCase() === "no") {
        response.value = answers.negative
    } else {
        response.value = answers.random
    }
})

</script>


<style scooped>


</style>
<script setup>
import Submit from "./Submit.vue";
import Input from "./Input.vue";
import {ref} from "vue"
const nameVariable = ref('Andoni Goicoechea')
const changeName = (newName) => {
    nameVariable.value = newName
}

const newVariable = ref("")
</script>

<template>
    <h1 v-text="nameVariable"></h1>
    <Input newName="newVariable"/>
    <Submit />
</template>

<style scoped>

</style>
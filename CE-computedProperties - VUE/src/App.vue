<script setup>
import {ref, computed, reactive} from "vue"
const userName = ref("Andoni")
const userLastName = ref("Goicoechea")

const favGuitarPlayerComputed = computed({
  // Syntax
  get() {
    return `${userName.value} ${userLastName.value}`;
  },
  set(miNuevoValor) {
    // estoy guardando los dos valores de los datos de el nombre+apellido dentro de un array, 
    // para poder aglomerar estos dos datos dentro de el paramtero "miNuevoValor"
    [userName.value, userLastName.value] = miNuevoValor;
  },
});

const myWatchlist = reactive([
  {
    title: "The last of us",
    year: "2023",
    whereToWatch: ["HBO Max"]
  },
  {
    title: "The Sopranos",
    year: "1999",
    whereToWatch: ["HBO Max", "Amazon Prime","Pop Tv"]
  },
  {
    title: "Shrinking",
    year: "2023",
    whereToWatch: ["Apple TV+", "Pop TV"]
  },
])

</script>

<template>
  <hr>
  <h5>Ejercicio 1</h5>
  <hr>
  <h1>{{ favGuitarPlayerComputed }}</h1>
  <input id="firstNameInput" type="text" v-model="userName"> <br> <br>
  <input id="lastNameInput" type="text" v-model="userLastName">
  <hr>
  <h5>Ejercicio 2</h5>
  <hr>
  <div v-for="(serie, index) in myWatchlist" :key="index">
    <h1>{{ serie.title }}</h1>
    <h2>{{ serie.year }}</h2>
    <ul>
      <li v-for="(platform, index) in serie.whereToWatch" :key="index">{{ platform }}</li>
    </ul>
    <hr>
  </div>


</template>

<style scoped>

</style>

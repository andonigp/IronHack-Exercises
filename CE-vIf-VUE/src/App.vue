<script setup>
// Ejercicios Conditional Rendering

import { ref, reactive } from "@vue/reactivity";

// Creamos la estructura básica de un componente de vue en la que 
// vamos a mostrar el resultado de los ejercicios. Recordad importar el 
// componente donde sea necesario para poder ver el avance de vuestros 
// ejercicios.

// Ej.1: Creamos dos <h1> diferentes, uno que diga 
// "I'm showing up beacuse our reactive data is true!" y el otro que
// diga "I'm the option anytime our reactive data cannot be read as true".
// Como vemos, los dos dependerán de una variable reactiva en vuestro script 
// y, según si esta es true or false, enseñaréis uno u otro.

// Ej.2: Creamos cuatro <p> tags. Los cuatro se renderizarán condicionalmente
// mirando a una misma variable que llamaremos "language". Esta variable podrá
// tener tres valores distintos: "HTML", "CSS" o "JS". En nuestro template 
// deberemos leer dicha variable y enseñar un <p> u otro según su valor. 
// Cada uno de los <p> tags a su vez contendrá el texto "Today we are learing"
// seguido del valor de la variable que imprimiréis en pantalla usando la
// moustache syntax. El último <p> tag se encargará de aparecer cuando el 
// valor de "language" no sea ninguno de los tres mencionado anteriormente, 
// y contendrá el texto "Today there's no class!".

// Ej.3***: Creamos una variable reactiva que contenga un objeto con 
// vuestro nombre (string), vuestra edad (number) y una key hasCodedBefore 
// (boolean) la cual será true or false dependiendo de si antes del bootcamp 
// habíais picado código o no. Después creamos otra variable reactiva booleánica 
// que podéis llamar show, por ejemplo. Según si show está en true or false, en 
// vuestro template deberíais enseñar o no una pequeña biografía. Esta biografía, 
// a su vez, constará primero de vuestro nombre como título. Después tendrá un <p> 
// que se renderizará de manera condicional. En caso de que vuestra edad sea superior 
// a 18 enseñaremos la frase "I am an adult! :)"; en caso contrario, enseñaremos 
// "I'm still a minor :(". Finalmente, según si hasCodedBefore es true or false también 
// renderizaréis "I am still a newbie to code but I'm learning fast" o "This is not my 
// first time at the javascript and vue rodeo".

// EJERCICIO 1
const booleanHeader = reactive(true)

// EJERCICIO 2
const language = ref("CSS")

// EJERCICIO 3
const personalData = reactive({
  name: "Andoni Goicoechea Pederzini",
  age: 33,
  hasCodedBefore: true
})

const show = reactive(true)

</script>

<template>
  <h1>Ejercicio de condicionales - VUE
  </h1>
  <!-- EJERCICIO 1 -->
  <div>
    <h2 v-if="booleanHeader === true">I'm showing up beacuse our reactive data is true!</h2>
    <h2 v-else>I'm the option anytime our reactive data cannot be read as true</h2>
  </div>
  <!-- EJERCICIO 2 -->
  <div>
    <p v-if="language === 'HTML'">Today we are learing {{ language }}.</p>
    <p v-else-if="language === 'CSS'">Today we are learing {{ language }}.</p>
    <p v-else-if="language === 'JS'">Today we are learing {{ language }}.</p>
    <p v-else>Today there's no class!</p>
  </div>
  <!-- EJERCICIO 3 -->
  <div v-show="show">
    <h2>{{personalData.name}}</h2>
    <p v-if="personalData.age > 18">I am an adult! :)</p>
    <p v-else>I'm still a minor :(</p>
    <p v-if="personalData.hasCodedBefore === true">This is not my first time at the javascript and vue rodeo</p>
    <p v-else>I am still a newbie to code but I'm learning fast</p>
  </div>
</template>

<style scoped>
h1 {
  text-decoration: underline;
}
</style>

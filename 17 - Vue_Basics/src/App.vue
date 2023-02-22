<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { reactive } from '@vue/reactivity';

// const clientList = reactive ([
//   {
//     clientId: 84197,
//     clientName: "Google",
//     clientLocation: "California"
//   },
//   {
//     clientId: 54996,
//     clientName: "Airbus",
//     clientLocation: "Toulouse"
//   }
// ])

// function clients (array, number) {
//   let client = number,
//   clientId = array[client].clientId
//   clientName = array[client].clientName
//   clientLocation = array[client].clientLocation
//   return(`Our client number ${clientId} is ${clientName} and its located in ${clientLocation}.`)
// }

// console.log(clients(clientList, 0))

</script>

<template>
  <HeaderComponent/>
  <div>
    <h2>Exercise 2</h2>
    <p>This is a mathematical operation inside HTML: {{ 365/12 }} </p>
    <!-- <p>{{ clients(clientList, 0) }}</p> -->
  </div>
  <FooterComponent/>
</template>

<style scoped></style>

<script setup>
import { ref, reactive } from "@vue/reactivity";
// Ej.1: Creamos un <h1> que tendrá un id bindeado. 
// Dicho id tiene que tomar como referencia una variable 
// que habréis creado en vuestro <script setup>. 
// Apuntando al id en cuestión desde el <style> tag le daréis un 
// poco de estilo (color, underline... lo que queráis).

// Ej.2: Creamos un <h2> con un binding de clase. Este binding debe 
// asignar una clase u otra según una variable booleánica. Si la variable es 
// verdadera el h2 debería verse de color verde. En caso contrario, NO 
// deberíamos ver el h2 en el render.

// Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un 
// array de variables que tendréis en vuestro <script setup>. Cada variable 
// debería ser una variable reactiva con un valor de objeto que contenga diferentes 
// estilos de CSS (los que queráis).

// Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. 
// El primer elemento del array leerá una variable booleánica y solo si esta 
// es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento 
// del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará 
// un border al h4 o no.





// EJERCICIO 1
const heading1Id = ref("dynamicID")

// EJERCICIO 2
const variableBoolean = ref(false)

// EJERCICIO 3
const objectFormat = reactive({
  color: "blue",
  fontSize: "30px",
  fontStyle: "italic"
})

// EJERCICIO 4
//Use el booleano declarado en el ejercicio 2.

</script>

<template>
  <h1>VUE Binding Exercises</h1>
  <!-- EJERCICIO 1 -->
  <h1 :id="heading1Id">Este es el ejercicio 1.</h1>

  <!-- EJERCICIO 2 -->
  <h2 :class="variableBoolean ? 'booleanTrue' : 'booleanFalse'" >
  Este es el ejercicio 2.</h2>

  <!-- EJERCICIO 3 -->
  <h3 :style="objectFormat">
  Este es el ejercicio 3.</h3>

  <!-- EJERCICIO 4 -->
  <h4 :class="[variableBoolean && 'booleanTrue',
!variableBoolean && 'booleanFalse']">Este es el ejercicio 4.</h4>


</template>

<style scoped>
#dynamicID {
  color: brown;
  font-size: 5rem;
  font-weight: 400;
}

.booleanTrue {
  color: green;
  text-decoration: underline;
  font-size: 20px;
}

.booleanFalse {
  color: red;
  text-decoration: line-through;
  font-size: 20px;
}

</style>

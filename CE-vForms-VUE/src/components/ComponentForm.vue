<script setup>
import { reactive } from "@vue/reactivity";

// Creamos la estructura básica de un componente de vue en la que vamos a 
// mostrar el resultado de los ejercicios. Recordad importar el componente donde 
// sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un formulario en vuestro template. El formulario debe tener un 
// evento de submit que bloquee el default behavior del evento y llame a la función 
// handleSubmit. Dentro del formulario debemos tener diversos inputs que nos permitan 
// entrar la siguiente info: name, age, date of birth. Cada uno de los inputs debe estar 
// vinculado a su propia variable reactiva.

// Una vez le demos a submit deberíamos encargarnos de imprimir en una alerta un texto 
// con el nombre que le hayáis inputado, un texto con la edad y un texto con vuestra date 
// de birth.

// approach 1 - guardan cada dato en su variable propia name, age y dob
// approach 2 - guardan los 3 datos dentro de 1 variable que sea un objeto :)

const userData = reactive({
    userName: "",
    userAge: "",
    userDOB: "",
});

const handleSubmit = () => {
    alert(
        `name: ${userData.userName},
        age: ${userData.userAge},
        dob: ${userData.userDOB}`
    )
}
</script>

<template>
    <div>
        <pre>{{ JSON.stringify(userData, null, 1) }}</pre>
    </div>
    <hr>
    <div id="myForm">
        <form @submit.prevent="handleSubmit">
            <div id="userName">
                <label for="userName">Enter your name:</label>
                <input 
                type="text"
                id="userName"
                autocomplete="off"
                v-model="userData.userName"
                >
            </div>
            <div id="userAge">
                <label for="userName">Enter your age:</label>
                <input 
                type="number"
                id="userAge"
                autocomplete="off"
                v-model="userData.userAge"
                >
            </div>
            <div id="userDOB">
                <label for="userName">Enter your birthdate:</label>
                <input 
                type="date"
                id="userDOB"
                autocomplete="off"
                v-model="userData.userDOB"
                >
            </div>
            <div id="submit-form-button">
                <input type="submit" value="Submit Form Data" />
            </div>
        </form>
    </div>
</template>

<style scoped>
input[type="text"],
input[type="number"],
input[type="date"]
{
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

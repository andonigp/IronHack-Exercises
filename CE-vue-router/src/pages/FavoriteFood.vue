<template>
    <section>
        <div>
            <h1>Taco Gobernador</h1>
            <p>Los ingredientes principales de los tacos gobernador son: camarón, cebolla, chile poblano, tomate y queso. Además, se suele utilizar mantequilla para cocinarlos y para dorar las tortillas de maíz. El resultado es un taco tierno que se asemeja a las quesadillas.
                <br><br> La creciente popularidad de este platillo hizo que existan versiones diferentes. Los tacos gobernador pueden encontrarse en multitud de establecimientos a lo largo y ancho de México, especialmente marisquerías o aquellas dedicadas a la venta de tacos de pescado.</p>
            <div v-if="imageOn === true">
                <img src="https://mostwanted.mx/wp-content/uploads/2020/06/2025917.jpg" alt="">
            </div>
            <button @mouseleave="appearImage">Image of Glory</button>
        </div>
    </section>
</template>

<!-- JS Element Tag -->

<script setup>
import { reactive, ref } from "@vue/reactivity"


let imageOn = ref(false)
const appearImage = () => {
    // console.log("Conected")
    imageOn.value = !imageOn.value
    console.log(imageOn)
    return imageOn
}

</script>

<!-- CSS Element Tag -->

<style scoped>
h1 {
    margin: 20px;
}

img {
    max-width: 500px;
}

button {
    background: white;
    color: #3da563;
    font-weight: 800;
    margin: 15px 30px;
    padding: 15px 30px;
    max-width: 250px;
    max-height: 80px;
}
</style>
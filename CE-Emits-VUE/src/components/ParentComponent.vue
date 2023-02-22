<script setup>
import ChildComponent from './ChildComponent.vue';

const alertFunction = () => {
    alert("Emit realizado con éxito! :)")
}
</script>

<template>
    <h1>This is a parent</h1>

    <!-- AQUI ESTAMOS INDICANDO A DONDE ESTAMOS ENVIANDO EL EMIT -->
    <ChildComponent 
    @emit-alert="alertFunction"/>
</template>

<style scoped>

</style>

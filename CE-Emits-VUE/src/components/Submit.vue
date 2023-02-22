<script setup>
defineEmits(["nameChanger"])
</script>

<template>
    <button @click="$emit('nameChanger')" >Submit</button>
</template>

<style scoped>

</style>
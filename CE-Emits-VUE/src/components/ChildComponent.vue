<script setup>
defineEmits(['emitAlert'])
</script>

<template>
    <button @click="$emit('emitAlert')">Emit</button>
</template>

<style scoped>

</style>

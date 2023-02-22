
<!-- ------------------------ HTML ---------------------- -->
<template>
    <span className="user">
        <span className="name">{{ userData.name }}</span>
        <span className="handle">{{ userData.handle }}</span>
    </span>
</template>

<!-- ------------------------ CSS ------------------------ -->
<style scooped>

</style>


<!-- ------------------------ JS ------------------------- -->
<script setup>
defineProps ({
    userData: {
        type: Object
    }
})
</script>
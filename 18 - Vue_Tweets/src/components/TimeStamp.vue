
<!-- ------------------------ HTML ---------------------- -->
<template>
     <span className="timestamp">{{time}}</span>
</template>

<!-- ------------------------ CSS ------------------------ -->
<style scooped>

</style>


<!-- ------------------------ JS ------------------------- -->
<script setup>
defineProps ({
    time: {
        type: String
    }
})

</script>
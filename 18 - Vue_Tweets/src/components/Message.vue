
<!-- ------------------------ HTML ---------------------- -->
<template>
    <p className="message">
        {{ tweetMessage }}
      </p> 
</template>

<!-- ------------------------ CSS ------------------------ -->
<style scooped>

</style>


<!-- ------------------------ JS ------------------------- -->
<script setup>

defineProps({
    tweetMessage: {
        type: String
    },
})

</script>
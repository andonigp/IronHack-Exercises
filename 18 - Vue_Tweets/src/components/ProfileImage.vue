
<!-- ------------------------ HTML ---------------------- -->
<template>
    <img
      :src="image"
      className="profile"
      alt="profile"
    />
</template>

<!-- ------------------------ CSS ------------------------ -->
<style scooped>

</style>


<!-- ------------------------ JS ------------------------- -->
<script setup>
defineProps({
  image: {
    type: String
  }
})
</script>
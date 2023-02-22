<template>
    <h1>My favorite songs</h1>
    <p v-if="useCounterStore().mySongs.length === 0">The list is empty.</p>
    <ul v-else>
        <li v-for="song in useCounterStore().mySongs">{{ song }}</li>
    </ul>
    <!-- <p v-else>{{ useCounterStore().mySongs }}</p> -->
    <input v-model="songInput" type="text" placeholder="Enter a song">
    <button @click="addSongLocal">Add Song</button>
    <button @click="useCounterStore().clearSongs(useCounterStore().mySongs)">Clear List</button>    
</template>

<script setup>
import { ref } from "@vue/reactivity"
import {useCounterStore} from "../stores/songs"
// console.log(useCounterStore().mySongs.length)
const songInput = ref("")

const addSongLocal = () => {
    useCounterStore().addSong(useCounterStore().mySongs, songInput.value)
    songInput.value = ""
}

</script>

<style scoped>

</style>
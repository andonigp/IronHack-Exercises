<!-- HTML Element Tag -->

<template>
    <section>
        <div>
            <h1>Fat Freddy's Drop</h1>
            <p>Fat Freddy's Drop is a New Zealand seven-piece band from Wellington, whose musical style has been characterised as any combination of dub, reggae, soul, jazz, rhythm and blues, and techno. Originally a jam band formed in the late 1990s by musicians from other bands in Wellington, Fat Freddy's Drop gradually became its members' sole focus. Band members continued playing with their other respective groups—The Black Seeds, TrinityRoots, Bongmaster, and others—for much of their 20-year career. Fat Freddy's Drop are known for their improvised live performances. Songs on their studio albums are versions refined over years of playing them live in New Zealand and on tour abroad.
            <br/> <br/>The group gained international recognition in 2003 after their single "Midnight Marauders" was re-distributed by record labels and DJs in Germany. The group has toured Europe nearly every year since then. The first studio album by Fat Freddy's Drop, Based on a True Story, was the first independently distributed album to reach first place in New Zealand record sales directly after release in 2005, and is the third highest-selling album by a national artist in the country's history. Based on a True Story won Best Album at the New Zealand Music Awards the same year, and remained on the top 40 New Zealand sales chart for over two years, establishing them as one of the most successful contemporary bands in the island nation.</p>
            <div v-if="imageOn === true">
                <img src="../assets/images/maxresdefault.jpg" alt="">
            </div>
            <slot />
            <button @click="appearImage">Image of the band</button>
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
    margin: 15px 0px;
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
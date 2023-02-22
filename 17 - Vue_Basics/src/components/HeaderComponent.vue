<script setup>
import {ref, reactive} from "vue";
const navigation = reactive([
    {
        navRoute: "/",
        navText: "Home"
    },
    {
        navRoute: "www.google.com",
        navText: "Contact us",
        navLinkOpenNewTab: "_blank",
    }
        
])

</script>

<template>
  <header>
    <nav>
        <!-- logo -->
        <img src="../assets/images/MClogo.png" alt="Logo">
        <!-- navigation -->
        <ul>
            <li><a :href="navigation[0].navRoute">{{ navigation[0].navText }}</a></li>
            <li><a :href="navigation[1].navRoute" :target="navigation[1].navLinkOpenNewTab">{{ navigation[1].navText }}</a></li>
        </ul>
        <!-- login buton -->
        <button>Contact Us</button>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');

header {
    background-color: #51597263;
    padding: 15px 30px 15px 30px;
}

header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

header nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 15px;
    list-style: none!important;
}

header nav ul li a{
    text-decoration: none!important;
    color: #203268;
    font-weight: 600;
    font-family: Inter;
}

header nav ul li a:hover{
    color: white;
}

header nav button {
    padding: 8px 30px 8px 30px;
    background-color: #203268;
    color: white;
    font-family: inter;
}

header nav button:hover {
    background-color: #f68520;
}

header nav img {
    width: 25%;
}
</style>

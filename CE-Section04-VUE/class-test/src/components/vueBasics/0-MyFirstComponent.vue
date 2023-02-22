<!-- ---- -->
<!-- HTML -->
<!-- ---- -->
<template>
    <div>
        <section>
            <!-- HTML - puesto a pelo -->
            <p>Mi nombre es Andoni, nací en México y tengo 33 años.</p>

            <!-- HTML - puesto con interpolación de texto (Paso 1 - Datos primitivos)- aka claudator de bigote -->
            <p>Mi nombre es {{myName}}, nací en {{myCountry}} y tengo {{myAge}} años.</p>

            <!-- HTML - puesto con interpolación de texto (Paso 2 - Datos no primitivos)- aka claudator de bigote -->
            <p>Mi nombre es {{myInfo.myName}}, nací en {{myInfo.myCountry}} y tengo {{myInfo.myAge}} años.</p>
        </section>
        <section>
            <br><br><br>
            <p>Mi nombre es {{ andoniData.myName }}, tengo {{ andoniData.myAge }} y me encanta el {{ andoniData.myhobbies[0] }}.</p>
        </section>
    </div>
</template>

<!-- -- -->
<!-- JS -->
<!-- -- -->
<script setup>
 //PASOS - REFERENCIAS
 //Reactive "ref"
 //1er paso - Datos primitivos
 import{ ref, reactive } from "vue";
 const myName = ref("Andoni")
 const myCountry = ref("México")
 const myAge = ref(33)

 //2ndo paso - Datos no primitivos Reactive
 const myInfo = {
    myName: "Andoni",
    myCountry: "México",
    myAge: 33
 }

//  Class eexercise
// Van a crear 4 variables
// 3 de ellas seran ref()
// 1 de ellas sera reactive()
// reactive === quiero que se creen un objeto con las siguientes keys/claves, ["name", ageNUMERO, "dob", hobbies[ARRAY], educacion{objeto, 3 claves[primaria, secundaria, unviserdiad]}, "Su grupo favorito de musica"]
// ref ==== pelicula preferida
// ref === # cantidad de veces que se han visto esta pelicula

const myFavoriteMovie = ref("Into the Wild")
const seenMyFavoriteMovie = ref(25)
const myFavoriteFood = ref("Asados")
const andoniData = reactive({
    myName: "Andoni Goicoechea",
    myAge: 33,
    myDOB: "02/10/1989",
    myhobbies: ["tennis", "golf", "padel", "coding", "travel"],
    myEducation: {
        middleSchool: "John F. Kennedy",
        highSchool: "Thomas Jefferson High School",
        university: "UNAQ"
    },
    myFavBand: "Pink Floyd"
})
</script>

<!--- --- --->
<!--- CSS --->
<!--- --- --->
<style scoped>

/* div section .counter {
    display: flex;
    margin: 2rem 0;
} */

/* div section .counter button {
    background-color: white;
    padding: 2rem;
} */



</style>
/*
Ejercicio 1:
Muestra por consola toda la información de tu pokemon favorito usando la API https://pokeapi.co*/
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((data) => console.table(data));

fetch("https://pokeapi.co/api/v2/pokemon-species/pikachu")
  .then((response) => response.json())
  .then((data) => console.log(data));

/*
Ejercicio 2:
Permite al usuario introducir un número entre el 0 y el 151, que son los únicos pokemon que merecen la pena. Devuélvele la info del pokemon con la id correspondiente.
*/

function getPokemon () {
    let pokemonInput = document.getElementById('pokemonId').value
    if (pokemonInput > 151) {
        alert("Este Pokemon no vale la pena. Elige uno con id inferior a 152.")
    } else {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
}

let btn = document.querySelector('button')
btn.addEventListener('click', getPokemon)
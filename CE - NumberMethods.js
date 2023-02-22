// Number methods 1
// En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día un usuario. 
// Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. ¿Cómo mostrarías esa cifra correctamente para el usuario?

let dailyEarnings = (3100/30)
console.log(dailyEarnings.toFixed(2));

// Number methods 2
// En una página de diseño quieren crear una paleta de colores, para ello quieren coger un elemento representado de forma hexadecimal y sumarle 336655.
//Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00.
// Haz un ejemplo con el color #0000FF sabiendo que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. R = 00, G=00, B=ff.
let colorR = 0;
let colorG = 0;
let colorB = 255;

colorR = colorR + 33;
colorG += 66;
colorB += 55;

console.log(colorB);

colorB -= 255;

console.log(colorB);

colorB = colorB.toString(16);

console.log( "hexadecimal: " + colorB, typeof(colorB));

let newColor = "#" + colorR.toString(16) + colorG.toString(16) + colorB.toString(16);

console.log(typeof(newColor) + " " +newColor)

let hexR = 0x0;
let hexG = 0x0;
let hexB = 0xff;

console.log(255 === 0xff);





// String methods 1
// Dada la string que tenéis a continuación, haced los console.log() correspondientes para conseguir los siguientes outputs:
// let stringToLog = '    JavaScript is fun! ';
// // 23
// // 'JavaScript is fun!'
// // ['java', 'cript i', ' fun!']
// // 'JAVASCRIPT IS FUN!'
// // 'f'
// // 5
// // 15
// // 'CSS is fun!'

const stringToLog = '    JavaScript is fun! ';
console.log(stringToLog.length);
console.log(stringToLog.trim())
console.log(stringToLog.trim().toLowerCase().split("s"))
console.log(stringToLog.trim().toUpperCase())
console.log(stringToLog.substring(stringToLog.lastIndexOf("f"),stringToLog.lastIndexOf("f")+1))
console.log(stringToLog.indexOf('av'));
console.log(stringToLog.indexOf('is'));
console.log(stringToLog.trim().replace('JavaScript','CSS'));

// String Methods 2
// Dada la string stringToChange, modificadla de tal manera que los console.log() devuelvan los outputs comentados.
// const original = 'Hello world!';
// let stringToChange = 'Hello world!';
// console.log(stringToChange.endsWith('o')); // true
// console.log(stringToChange.charAt(3)); // 'r'
// console.log(stringToChange.includes('hello')); // true
// console.log(stringToChange.lastIndexOf('o')); // 4
// console.log(stringToChange.indexOf('w')); // -1

let stringToChange = '!xorld hello';
console.log(stringToChange.endsWith('o')); // true
console.log(stringToChange.charAt(3)); // 'r'
console.log(stringToChange.includes('hello')); // true
console.log(stringToChange.lastIndexOf('o')); // 4
console.log(stringToChange.indexOf('w')); // -1
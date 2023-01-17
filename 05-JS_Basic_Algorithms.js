//ANDONI GOICOECHEA PEDERZINI

// Variables setting
console.log("I'm Ready!")
let hacker1 = "Driver Name"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Navigator Name"
console.log(`The navigator's name is ${hacker2}`)
console.log("---------------------------")

//Creating conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems the navigator has de longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
console.log("---------------------------")

//Creating Loops
let text1 = ""
for (let i = 0; i < hacker1.length; i++) {
  text1 = text1.concat(hacker1[i].toUpperCase(), " ")
}
console.log(text1)

let text2 = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  text2 = text2.concat(hacker2[i])
}
console.log(text2)

text_array = [hacker1, hacker2].sort()
if (hacker1 == hacker2) {
  console.log("What?! You both have the same name?") 
} else if (text_array[0] == hacker1) {
  console.log("The driver's name goes first.")
} else if (text_array[0] == hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
console.log("---------------------------")

//BONUS 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum dolor lacus, tincidunt blandit purus placerat quis. Nulla fringilla auctor quam, sed sollicitudin tellus ultrices non. In vitae nunc erat. Aliquam eu nisl fermentum magna accumsan semper. Proin diam diam, accumsan ac risus et, iaculis consectetur odio. Donec convallis ex ligula, vitae mollis diam rutrum eu. Etiam vulputate magna mollis orci rhoncus sollicitudin. Nam facilisis finibus sapien, ornare ornare augue aliquam non. Aliquam metus arcu, porttitor id commodo id, dictum nec ante. Curabitur aliquam quam nibh, et semper nibh vulputate in. Aenean ornare et odio a faucibus. Quisque id rhoncus tortor, sit amet mollis nunc. Quisque semper iaculis tortor ut pretium. Pellentesque vel efficitur tellus, sit amet vehicula nisl. Pellentesque sollicitudin, felis eu bibendum aliquam, velit nibh varius odio, a pharetra massa orci non lorem. Aenean consectetur diam sed congue ultricies.\n\nVivamus placerat mollis est eget ultricies. Nulla semper dolor sem, non tempus sem dictum vitae. Donec ullamcorper dolor sed nisl consectetur, vel tempus lacus bibendum. Phasellus ornare dolor urna, non varius neque laoreet non. Mauris ante turpis, porttitor quis elementum at, maximus ac orci. Nullam lacus enim, iaculis sed erat sit amet, laoreet laoreet est. Aliquam feugiat lacinia vehicula. Quisque ac vestibulum enim. Aenean tincidunt enim vel viverra lobortis. Maecenas finibus, enim a ultrices suscipit, risus eros maximus magna, vitae bibendum arcu ligula at magna. Sed libero libero, vulputate vel neque a, tincidunt facilisis sem.\n\nPellentesque sem felis, laoreet quis arcu ut, ultrices pulvinar dolor. Cras quis dolor ut augue congue lobortis ut sit amet nibh. Sed pellentesque orci ut dapibus venenatis. Curabitur euismod, purus venenatis gravida efficitur, augue ante maximus lacus, a cursus orci massa ac augue. Nulla nec porta mauris, sed pharetra mi. Etiam convallis lobortis tellus eu pulvinar. Vestibulum vitae nulla at ligula lacinia commodo eu quis turpis. Aliquam elementum eu lacus vel dapibus. Nullam et metus odio. Nam auctor interdum purus vitae fermentum. Vestibulum ultrices arcu leo, vestibulum tempor erat condimentum ac. Suspendisse commodo luctus tellus, non ultrices ante dictum non. Sed sollicitudin eros nisl, sed blandit purus interdum id."

console.log(longText)

function wordCount(str) {
  return str.split(" ").length
}
console.log(wordCount(longText))

let longText_Array = []
function wordEt(str, word) {
  longText_Array = str.split(" ");
  return longText_Array.filter((v) => (v === word)).length;
}
console.log(wordEt(longText, "et"))
console.log("---------------------------")

//BONUS 2
let phraseToCheck = "Was it a car or a cat I saw?"
let text3 = ""
for (let i = 0; i < phraseToCheck.length; i++) {
  text3 = text3.concat(phraseToCheck[i].toUpperCase())
  text3 = text3.replace(" ", "")
  text3 = text3.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'?]/g, "")
}
let text3_reverse = ""
for (let i = text3.length - 1; i >= 0; i--) {
  text3_reverse = text3_reverse.concat(text3[i])
  text3_reverse = text3_reverse.replace(" ", "")
}
console.log(text3)
console.log(text3_reverse)
if (text3 === text3_reverse) {
  console.log("It's a Palindrome.")
} else {
  console.log("It's NOT a Palindrome.")
}


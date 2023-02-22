<<<<<<< HEAD
//ANDONI GOICOECHEA PEDERZINI


//EJERCICIO DE CLASE 
let generalInformation = (name, age, whereLives) => {
    if (whereLives.livesInCity) {
        return(`${name} tiene ${age} años y vive en la ciudad.`)
    } else if (whereLives.livesInTown) {
        return(`${name} tiene ${age} años y vive en un pueblo.`)
    }
}

console.log(generalInformation("Jarko", 25, {livesInCity: true, livesInTown: false}));
console.log(generalInformation("Martina", 42, {livesInCity: false, livesInTown: true}));
console.log(generalInformation("Laia", 78, { livesInCity: false, livesInTown: true }));

// Iteration #1: Find the maximum
// Implement the function maxOfTwoNumbers 
//that takes two numbers as arguments and returns the bigger number.

function maxValue (num1, num2) {
    if (num1 > num2) {
        return console.log(num1)
    } else if (num2 > num1) {
        return console.log(num2)
    } else {
        return console.log("It's the same number.")
    }
}

maxValue(9, 9)

//Iteration #2: Find the longest word
//Implement the function findLongestWord that takes as an argument 
//an array of words and returns the longest one. 
//If there are 2 with the same length, it should return the first 
//occurrence.

//You can use the following array to test your solution:
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
//const words = [];

function findLongestWord (array) {
    let longestWord = ""
    for (let i = 0; i <= array.length - 1; i++) {
         if(longestWord.length < array[i].length) {
             longestWord = array[i]
         } else {
             continue
         }
    }
    return console.log(longestWord)
}

findLongestWord(words)

//Iteration #3: Calculate the sum
//Iteration #3.1: Sum numbers
//Calculating a sum can be as simple as iterating over an array and 
//adding each of the elements together.

//Implement the function named sumNumbers that takes an array of numbers 
//as an argument, and returns the sum of all of the numbers in the array. 
//Later in the course, we will learn how to do this by using the reduce 
//array method, which will make your work significantly easier. 
//For now, let's practice the "declarative" way of adding values, using loops.

//You can use the following array to test your solution:
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (array) {
    arraySum = 0
    for (let i = 0; i <= array.length - 1; i++) {
        arraySum += array[i]
    }
    return console.log(arraySum)
}

sumNumbers(numbers)

//Bonus - Iteration #3.2: A generic sum() function
//The goal: Learn how to refactor your code. 💪

//In iteration 3, you created a function that returns the sum of an array of 
//numbers. But what if we wanted to know what was the sum of the length of all
//of the words in an array? What if we wanted to add boolean values to the mix?
//We wouldn't be able to use the same function as above, or better saying, we 
//would have to tweak it a little bit so that it can be reused no matter what 
//is in the array that is passed as an argument when function sumNumbers() is called.

//Here we are applying a concept we call polymorphism, that is, dealing with a function's
//input independently of the types they are passed as.

//Let's implement the function sum() that calculates the sum for an array filled with 
//(almost) any type of data. Note that strings should have their length added to the 
//total, and boolean values should be coerced into their corresponding numeric values. 
//Check the tests for more details.

//You can use the following array to test your solution:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

let sum = (array) => {
    acumulateSum = 0
    for (let i = 0; i <= array.length - 1; i++) {

        if (typeof array[i] === "string") {
            acumulateSum += array[i].length
        } else if (typeof array[i] === "boolean") {
            if (array[i] === true) {
                acumulateSum += 1
            } else {
                continue
            }
        } else if (typeof array[i] === "number") {
            acumulateSum += array[i]
        }
    }
    return console.log(acumulateSum)   
}

sum(mixedArr)

//Iteration #4: Calculate the average
//Calculating an average is a very common task. Let's practice it a bit.

//The logic behind this:

//Find the sum as we did in the first exercise (or how about reusing the 
//function sumNumbers()?)
//Take that sum and divide it by the number of elements in the array.

//Iteration #4.1: Array of numbers
//Implement the function averageNumbers that expects an array of 
//numbers and returns the average of the numbers.

//You can use the following array to test your solution:
const numbers4 = [2, 6, 9, 10, 7, 4, 1, 9];

let averageNumbers = (array) => {
    console.log(array.reduce((a, b) => a+ b)/array.length)
}

averageNumbers(numbers4)

//Iteration #4.2: Array of strings
//Implement the function named averageWordLength that receives as a 
//single argument an array of words and returns the average length of 
//the words:

//You can use the following array to test your solution:
const words4 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

let averageWordLength = (array) => {
    acumulateSum = 0
    array.forEach(element => (acumulateSum += element.length))
    return console.log(acumulateSum/array.length)   
}

averageWordLength(words4)

//Bonus - Iteration #4.3: A generic avg() function
//Create function avg(arr) that receives any mixed array and 
//calculates the average. Consider as a mixed array an array filled 
//with numbers and/or strings and/or booleans.

//The non-numerical values should be counted as follows:

//Booleans: true counts as 1 and false counts as 0.
//Strings: use the string length as the numeric value.

const mixedArr4 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7

let avg_arr = (array) => {
    acumulateSum = 0
    for (let i = 0; i <= array.length - 1; i++) {
        if (typeof array[i] === "string") {
            acumulateSum += array[i].length
        } else if (typeof array[i] === "boolean") {
            if (array[i] === true) {
                acumulateSum += 1
            } else {
                continue
            }
        } else if (typeof array[i] === "number") {
            acumulateSum += array[i]
        }
    }
    return console.log(acumulateSum/array.length)   
}

avg_arr(mixedArr4)

//Iteration #5: Unique arrays
//Take the following array, remove the duplicates, and return a new array.
//You are more than likely going to want to check out the Array methods
//indexOf and includes.

//Do this in the form of a function uniquifyArray that receives an array of 
//words as an argument.

//You can use the following array to test your solution:
const words5 = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];

  let uniqueWords5 = [];

  words5.forEach((element) => {
    if(!uniqueWords5.includes(element)) {
        uniqueWords5.push(element)
    }
  });

  console.log(uniqueWords5)

//Iteration #6: Find elements
//Let's create a simple array search.

//Declare a function named doesWordExist that will take in an array of words
//as one argument, and a word to search for as the other. Return true if the 
//word exists in the array, otherwise, return false.

//You can use the following array to test your solution:
const words6 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

let doesWordExist = (array, searchedWord) => {
    console.log(array.includes(searchedWord))
}

doesWordExist(words6,'starting')

//Iteration #7: Count repetition
//Declare a function named howManyTimes that will take in an array of 
//words as the first argument, and a word to search for as the second 
//argument. The function will return the number of times that word appears 
//in the array.

//You can use the following array to test your solution:

const words7 = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

const countWords7 = {}
words7.forEach(element => {
    countWords7[element] = (countWords7[element] || 0) + 1
})

=======
//ANDONI GOICOECHEA PEDERZINI


//EJERCICIO DE CLASE 
let generalInformation = (name, age, whereLives) => {
    if (whereLives.livesInCity) {
        return(`${name} tiene ${age} años y vive en la ciudad.`)
    } else if (whereLives.livesInTown) {
        return(`${name} tiene ${age} años y vive en un pueblo.`)
    }
}

console.log(generalInformation("Jarko", 25, {livesInCity: true, livesInTown: false}));
console.log(generalInformation("Martina", 42, {livesInCity: false, livesInTown: true}));
console.log(generalInformation("Laia", 78, { livesInCity: false, livesInTown: true }));

// Iteration #1: Find the maximum
// Implement the function maxOfTwoNumbers 
//that takes two numbers as arguments and returns the bigger number.

function maxValue (num1, num2) {
    if (num1 > num2) {
        return console.log(num1)
    } else if (num2 > num1) {
        return console.log(num2)
    } else {
        return console.log("It's the same number.")
    }
}

maxValue(9, 9)

//Iteration #2: Find the longest word
//Implement the function findLongestWord that takes as an argument 
//an array of words and returns the longest one. 
//If there are 2 with the same length, it should return the first 
//occurrence.

//You can use the following array to test your solution:
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord (array) {
    let longestWord = ""
    for (let i = 0; i <= array.length - 1; i++) {
         if(longestWord.length < array[i].length) {
             longestWord = array[i]
         } else {
             continue
         }
    }
    return console.log(longestWord)
}

findLongestWord(words)

//Iteration #3: Calculate the sum
//Iteration #3.1: Sum numbers
//Calculating a sum can be as simple as iterating over an array and 
//adding each of the elements together.

//Implement the function named sumNumbers that takes an array of numbers 
//as an argument, and returns the sum of all of the numbers in the array. 
//Later in the course, we will learn how to do this by using the reduce 
//array method, which will make your work significantly easier. 
//For now, let's practice the "declarative" way of adding values, using loops.

//You can use the following array to test your solution:
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (array) {
    arraySum = 0
    for (let i = 0; i <= array.length - 1; i++) {
        arraySum += array[i]
    }
    return console.log(arraySum)
}

sumNumbers(numbers)

//Bonus - Iteration #3.2: A generic sum() function
//The goal: Learn how to refactor your code. 💪

//In iteration 3, you created a function that returns the sum of an array of 
//numbers. But what if we wanted to know what was the sum of the length of all
//of the words in an array? What if we wanted to add boolean values to the mix?
//We wouldn't be able to use the same function as above, or better saying, we 
//would have to tweak it a little bit so that it can be reused no matter what 
//is in the array that is passed as an argument when function sumNumbers() is called.

//Here we are applying a concept we call polymorphism, that is, dealing with a function's
//input independently of the types they are passed as.

//Let's implement the function sum() that calculates the sum for an array filled with 
//(almost) any type of data. Note that strings should have their length added to the 
//total, and boolean values should be coerced into their corresponding numeric values. 
//Check the tests for more details.

//You can use the following array to test your solution:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

let sum = (array) => {
    acumulateSum = 0
    for (let i = 0; i <= array.length - 1; i++) {

        if (typeof array[i] === "string") {
            acumulateSum += array[i].length
        } else if (typeof array[i] === "boolean") {
            if (array[i] === true) {
                acumulateSum += 1
            } else {
                continue
            }
        } else if (typeof array[i] === "number") {
            acumulateSum += array[i]
        }
    }
    return console.log(acumulateSum)   
}

sum(mixedArr)

//Iteration #4: Calculate the average
//Calculating an average is a very common task. Let's practice it a bit.

//The logic behind this:

//Find the sum as we did in the first exercise (or how about reusing the 
//function sumNumbers()?)
//Take that sum and divide it by the number of elements in the array.

//Iteration #4.1: Array of numbers
//Implement the function averageNumbers that expects an array of 
//numbers and returns the average of the numbers.

//You can use the following array to test your solution:
const numbers4 = [2, 6, 9, 10, 7, 4, 1, 9];

let averageNumbers = (array) => {
    console.log(array.reduce((a, b) => a+ b)/array.length)
}

averageNumbers(numbers4)

//Iteration #4.2: Array of strings
//Implement the function named averageWordLength that receives as a 
//single argument an array of words and returns the average length of 
//the words:

//You can use the following array to test your solution:
const words4 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

let averageWordLength = (array) => {
    acumulateSum = 0
    array.forEach(element => (acumulateSum += element.length))
    return console.log(acumulateSum/array.length)   
}

averageWordLength(words4)

//Bonus - Iteration #4.3: A generic avg() function
//Create function avg(arr) that receives any mixed array and 
//calculates the average. Consider as a mixed array an array filled 
//with numbers and/or strings and/or booleans.

//The non-numerical values should be counted as follows:

//Booleans: true counts as 1 and false counts as 0.
//Strings: use the string length as the numeric value.

const mixedArr4 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7

let avg_arr = (array) => {
    acumulateSum = 0
    for (let i = 0; i <= array.length - 1; i++) {
        if (typeof array[i] === "string") {
            acumulateSum += array[i].length
        } else if (typeof array[i] === "boolean") {
            if (array[i] === true) {
                acumulateSum += 1
            } else {
                continue
            }
        } else if (typeof array[i] === "number") {
            acumulateSum += array[i]
        }
    }
    return console.log(acumulateSum/array.length)   
}

avg_arr(mixedArr4)

//Iteration #5: Unique arrays
//Take the following array, remove the duplicates, and return a new array.
//You are more than likely going to want to check out the Array methods
//indexOf and includes.

//Do this in the form of a function uniquifyArray that receives an array of 
//words as an argument.

//You can use the following array to test your solution:
const words5 = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];

  let uniqueWords5 = [];

  words5.forEach((element) => {
    if(!uniqueWords5.includes(element)) {
        uniqueWords5.push(element)
    }
  });

  console.log(uniqueWords5)

//Iteration #6: Find elements
//Let's create a simple array search.

//Declare a function named doesWordExist that will take in an array of words
//as one argument, and a word to search for as the other. Return true if the 
//word exists in the array, otherwise, return false.

//You can use the following array to test your solution:
const words6 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

let doesWordExist = (array, searchedWord) => {
    console.log(array.includes(searchedWord))
}

doesWordExist(words6,'starting')

//Iteration #7: Count repetition
//Declare a function named howManyTimes that will take in an array of 
//words as the first argument, and a word to search for as the second 
//argument. The function will return the number of times that word appears 
//in the array.

//You can use the following array to test your solution:

const words7 = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

const countWords7 = {}

words7.forEach(element => {
    countWords7[element] = (countWords7[element] || 0) + 1
})

>>>>>>> 2e7e4c1b8cc1b34ace8b5e99f579f3fd278538cd
console.log(countWords7)
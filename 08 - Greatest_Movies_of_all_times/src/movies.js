// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = []
    moviesArray.forEach(element => {
        directors.push(element.director)
    });
    return directors
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesArrayFiltered = moviesArray.filter(element => {
        return element.director === 'Steven Spielberg' && element.genre.includes("Drama")
      });
    return moviesArrayFiltered.length
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0
  }
  const acumulateSum = moviesArray.reduce((accumulator, currentvalue) => {
    if (currentvalue.score) {
      return accumulator + currentvalue.score
    } else {
      return accumulator
    }
  }, 0)
  return Number((acumulateSum/moviesArray.length).toFixed(2)) 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter(element => {
    return element.genre.includes("Drama")
  })
  if (!dramaMovies.length){
    return 0
  }
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesArraySorted = moviesArray.map(movie => movie)
  moviesArraySorted.sort((numOne, numTwo) =>{
    return numOne.year > numTwo.year ? 1: -1;
  })
  return moviesArraySorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesArraySortedAlpha = moviesArray.map(movie => movie)
  if (moviesArraySortedAlpha.length < 20) {
    moviesArraySortedAlpha.sort((nameOne, nameTwo) => {
      return nameOne.title > nameTwo.title ? 1 : -1;
    })
    return moviesArraySortedAlpha 
  }else if (moviesArraySortedAlpha.length >= 20) {
    moviesArraySortedAlpha = moviesArray.map(movie => movie.title)
    moviesArraySortedAlpha.sort((nameOne, nameTwo) => {
      return nameOne > nameTwo ? 1 : -1;
    })
    moviesArraySortedAlpha = moviesArraySortedAlpha.slice(0,20)
  }
  return moviesArraySortedAlpha
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let movieArrayFormat = moviesArray.map(movie => movie)
  movieArrayFormat.forEach(element => {
    hours = Number(element.duration.substring(0,element.duration.indexOf("h")))*60;
    if (element.duration.length > 2) {
      minutes = Number(element.duration.substring(element.duration.indexOf("h ")+2,element.duration.indexOf("min")));
      total = hours + minutes
    } else {
      total = hours
    }
    element.duration = Number(total)
  })
  return movieArrayFormat
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length){
    return null
  }
  
  let movies = {}
  let counter = {}
  moviesArray.forEach(element => {
    if(movies[element.year]){
      movies[element.year] += element.score
      counter[element.year]++ 
      } else {
        movies[element.year] = element.score
        counter[element.year] = 1
      }
    })

    let yearHighScore
    let highScore = 0
    for (let year in movies){
      movies[year] = movies[year]/counter[year]
      if (highScore < movies[year]) {
        yearHighScore = year
        highScore = movies[year]
      }
    }
  return (`The best year was ${yearHighScore} with an average score of ${highScore}`)
}

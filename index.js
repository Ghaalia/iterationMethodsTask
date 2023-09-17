//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];


/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

console.log("Part 1")
console.log("Question 1")
let GreaterThan25 = []

GreaterThan25 = numbers.filter(x => { 
    if ( x >= 25 )
     return true;
}) 

console.log(GreaterThan25)


console.log("\n")


console.log("Question 2")
let DividedBy5 = []

DividedBy5 = numbers.filter(x => {return x%5 == 0})  

console.log(DividedBy5)

console.log("\n")

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:
Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

console.log("Part 2")
console.log("Question 3")

let squared = []

squared = numbers.map(squareIt)

function squareIt(x)
{
    return x**2;
}

console.log(squared)

console.log("\n")

console.log("Question 4")
let multiplyBy2 = []

multiplyBy2 = numbers.map( x => {return x*2})


console.log(multiplyBy2)

console.log("\n")

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

console.log("Part 3")
console.log("Question 5")

let GreaterThan20AndSquared = []
GreaterThan20AndSquared = numbers.filter(x => {return x >= 20}).map(squareIt)


console.log(GreaterThan20AndSquared)

console.log("\n")

console.log("Question 6")
let divisibleBy5 = []

divisibleBy5 = numbers.filter( x => {return x%5 == 0})

console.log(divisibleBy5)

console.log("\n")

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
console.log("Part 4")
console.log("Question 7")

const logger = function (array) {
    array.forEach(x => console.log(x) )
};

logger(numbers)

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
console.log("Question 8")

let Temp = [ 125, 89, 50, 300, 230]
let newTemp = []

const toCelsius = function (temperatures) 
{
     temperatures.forEach( x => { newTemp.push((x-32)*(5/9)) } )
    return newTemp;

};

console.log(toCelsius(Temp))
console.log("\n")

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
console.log("Question 9")
let ExceedThreshold = []

const hottestDays = function (temperatures, threshhold) {
    temperatures.forEach( x => {
        if ( x > threshhold)
        ExceedThreshold.push(x);
    })

    return ExceedThreshold

};

console.log(hottestDays(Temp, 100))
console.log("\n")

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
console.log("Question 10")

const logHottestDays = function (temperatures, threshhold) {
    temperatures.forEach( x => {
        if ( x > threshhold)
        console.log((x-32)*(5/9));
    })   

};

logHottestDays(Temp, 100)

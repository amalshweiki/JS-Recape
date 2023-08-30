//Exercise: Functional Programming in JavaScript
//Objective:
//The goal of this exercise is to deepen your understanding of functional programming concepts
//like higher-order functions (map, filter, reduce), immutability, and pure functions.
//Part 1: Higher-Order Functions
//Map Function: Create a function named doubleElements that takes an array of numbers as argument and returns a new array with each element doubled.
// Input: [1, 2, 3]
// Output: [2, 4, 6]
const doubled = (a) => a * 2;
const doubleElements = (array) => {
  return array.map((element) => doubled(element));
};
console.log("Map Function");
console.log(doubleElements([1, 2, 3]));
//Filter Function: Create a function named filterEven that takes an array of numbers and
//returns a new array containing only even numbers.
// Input: [1, 2, 3, 4]
// Output: [2, 4]
const filterEven = (array) => {
  return array.filter((element) => element % 2 === 0);
};
console.log("Filter Function");
console.log(filterEven([1, 2, 3, 4]));
//Reduce Function: Create a function named sumArray that takes an array of numbers and
//returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10

const sumArray = (array) => {
  return array.reduce((acc, currentValue) => acc + currentValue);
};
console.log("Reduce Function");
console.log(sumArray([1, 2, 3, 4]));
//Part 2: Immutability
//Absolutely! Below is an exercise that focuses exclusively on immutability, steering clear of using
//objects.
//Insert Value: Write a function called insertValueAtIndex that takes an array, an index, and a
//value as parameters. This function should return a new array with the value inserted at the given
//index.
// Input: [1, 2, 3], 1, 4
// Output: [1, 4, 2, 3]

function insertValueAtIndex(arr, index, value) {
  if (index < 0 || index > arr.length) {
    throw new Error("Index out of bounds");
  }

  const newArray = [...arr];
  newArray.splice(index, 0, value);
  return newArray;
}

/*const insertValueAtIndex = (array, index, value) => {
  const newArray = [...array];
  newArray = array.splice(index, 0, value);
  return newArray;
};*/

console.log(insertValueAtIndex([1, 2, 3], 1, 4));
//Part 3: Pure Functions
//Pure Function: Create a function named calculateArea that takes the radius of a circle as an
//argument and returns its area. Make sure the function has no side-effects.
// Input: 5
// Output: 78.54
const calculateArea = (radius) => radius * radius * 3.14;
console.log(calculateArea(10));

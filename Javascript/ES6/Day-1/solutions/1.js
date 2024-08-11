// 1. Function to return only positive numbers from an array
const getPositiveNumbers = (arr) => arr.filter(num => num > 0);

// 2. Function to sum all numbers in an array using reduce
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

// 3. Function to capitalize each name in an array
const capitalizeNames = (arr) => arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());

// 4. Function to check if a string is lowercase
const isLowerCase = (str) => str === str.toLowerCase();

// 5. Arrow function to filter strings by length
const filterByLength = (arr, length) => arr.filter(str => str.length > length);


console.log(getPositiveNumbers([10, 20, -11, -5, 12, -6]));
console.log(filterByLength(['ali', 'ahmed', 'hoda', "Mohamed", "fathy", "husseien"], 3));
console.log(capitalizeNames(['ali', 'ahmed', 'hoda']));
console.log(isLowerCase("Hello"));
console.log(isLowerCase("welcome"));
console.log(isLowerCase("lowercase"));
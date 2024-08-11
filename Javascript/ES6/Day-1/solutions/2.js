Copy// 1. Swap values of two variables using destructuring
let a = 5, b = 10;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`);

// 2. Function to return min and max values from an array using rest parameter and spread operator
const getMinMax = (...numbers) => {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
};

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const { min, max } = getMinMax(...numbers);
console.log(`Min: ${min}, Max: ${max}`);

// 3. Array methods on fruits array
const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a. Test that every element is a string
const allStrings = fruits.every(fruit => typeof fruit === 'string');
console.log("All elements are strings:", allStrings);

// b. Test that some elements start with "a"
const someStartWithA = fruits.some(fruit => fruit.startsWith('a'));
console.log("Some fruits start with 'a':", someStartWithA);

// c. Filter elements that start with "b" or "s"
const filteredFruits = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
console.log("Fruits starting with 'b' or 's':", filteredFruits);

// d. Generate new array with "I like [fruit]" strings
const likedFruits = fruits.map(fruit => `I like ${fruit}`);
console.log("Liked fruits array:", likedFruits);

// e. Use forEach to display all elements of the new array
likedFruits.forEach(item => console.log(item));
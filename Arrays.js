//An array is a variable with multiple values

const numbers = new Array(1,2,3,4,5)

console.log(numbers);

const fruits = ['Banana', 'oranges', 'pears', true, 10, null];

fruits[3] ='grapes';
fruits[4] = 'mangoes';

//To add to the end, use push:

fruits.push('pepper');

//To add to the beginning of the Array use unshift:

fruits.unshift('strawberry');

// To remove the last items from the array, use pop;

fruits.pop();  /*pepper is gone*/



//To check if an item is an array:

console.log(Array.isArray(fruits));

//To check for the index of an item in an array, use:

console.log(fruits.indexOf('oranges'));

console.log(fruits);
console.log(fruits[2]);













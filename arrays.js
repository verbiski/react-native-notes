// Apr 30, 2021
// Arrays in JS

// const hobbies = ['Sports', 'Cooking', 1, true, {}]; // can store strings, numbers, boolean, and other arrays.

const hobbies = ['Sports', 'Cooking'];

// This code will iterate through each item of the array and log in console

// for (let hobby of hobbies) {
//      console.log(hobby);
// }

// There are lots of methods for arrays
// hobbies.concat
// hobbies.copyWithin
// hobbies.entries
// hobbies.every
// etc.

// .map() method
// hobbies.map();
// which allows you to transform the values, and give you a new array.
// map always takes in a function (), which defines how you will edit the items in the array.
// the function will be executed on each element of the array, and you return the updated version.
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies); 
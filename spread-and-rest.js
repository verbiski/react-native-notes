// May 4 - Spread and rest operators

//immutability object: in object oriented and functional programming, an immutable object (unchangeable object)
// is an object whose state cannot be modified after it has been created. This is in a contrast to a mutable object
// (changeable object), which can be modified after it is created.

const person = {
    name: 'Max',
    age: 29
    greet() {
        console.log('Hi, I am '+ this.name);
    }
    }
}
const hobbies = ['Sleeping', 'Cooking'];

//this will return a copy of a section of an array.
//const copiedArray = hobbies.slice()

/// Spread operator (...)
//this will nest the array
//const copiedArray = [...hobbies];

//this is how we copy arrays
//... operator pulls out the elements of array (hobbies) or the properties on an object
const copiedArray = [...hobbies];
console.log(copiedArray);

// or it can look like this for objects
const copiedPerson = {...person};

//Rest operator ...
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3, 4));
// if we go to call this func., we will get [ 1, 2, 3 ].
// if we go to pass 1, 2, 3, 4 in then we will still only get [1, 2, 3] because the function only has 3 arguments

// to solve this issue, use the rest operator
const toArray = (...args) => {
    return args;
}

// Now when you pass in more than 3 parameters, the size of the array will change to accomodate.
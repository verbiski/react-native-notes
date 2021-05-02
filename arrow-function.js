const name = 'Jesse'; 
let age = 26;
const hasHobbies = true;

// the part on the right side of the '=' is an 'anonymous function' as it has no name after function
// however, we give it a name implicitly by storing anonymous function in named constant.
// can always call the constant 'summarizeUser', which holds a function as a value to act as a named function

//const summarizeUser = function (userName, userAge, userHasHobby){ // can name arugments however you want, they are local variables, only available inside of function
//    return ('Name is ' + 
//    userName + 
//    ', age is ' + 
//    userAge + 
//    ' and the user has hobbies: ' + 
//    userHasHobby
//    );
//}

// now lets make it an 'arrow function':
const summarizeUser = (userName, userAge, userHasHobby) =>{ // can name arugments however you want, they are local variables, only available inside of function
    return ('Name is ' + 
    userName + 
    ', age is ' + 
    userAge + 
    ' and the user has hobbies: ' + 
    userHasHobby
    );
};

//can also use it this way
//const add = (a, b) => {
//    return a + b;
//};

//this is the shortest way to write it
const add = (a, b) => a + b;

//or you can do this
const addOne = a => a + 1; //if you only have 1 argument (a) then remove parenthesis

const addRandom = () => 1 + 2; //if you have no arguments, you must include empty parenthesis.
console.log(summarizeUser(name, age, hasHobbies)); 
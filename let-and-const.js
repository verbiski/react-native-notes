// var is slightly outdated. use let and const instead.
// TO BE CLEAR WITH CODE...
// let is a variable that can change
// const is a variable that never changes

const name = 'Jesse'; // never changes
let age = 26; // can change
const hasHobbies = true

function summarizeUser(userName, userAge, userHasHobby){ // can name arugments however you want, they are local variables, only available inside of function
    return ('Name is ' + 
    userName + 
    ', age is ' + 
    userAge + 
    ' and the user has hobbies: ' + 
    userHasHobby
    );
}
console.log(summarizeUser(name, age, hasHobbies)); 
var name = 'Jesse';
var age = 26;
var hasHobbies = true;

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
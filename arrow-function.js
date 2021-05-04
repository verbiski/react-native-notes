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

//arrow function works good here:
document.addEventListener('click', function(){
    console.log('Click')
})

//instead, write like this, using arrow func.:
document.addEventListener('click', () => console.log('Click'))

//the REAL advantage of arrow functions is that they use the .this keyword differently.

class Person {
    constructor(name){
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow() // called in global scope
person.printNameFunction() // called in global scope

//you'll notice that when you call the fucntion, the printNameFunction will not return a name
//this is because in a regular function, JS defines .this based on where the function is called
//therefore, .this would have the same scope as person.printNameFunction()... name not defined in global scope
//regular functions redefine the scope of the .this keyword to whatever scope they are called in
//arrow functions do not, giving them a huge advantage -- .this is not redefined
//this agrees with most other programming languages.

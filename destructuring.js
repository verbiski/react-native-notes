// May 4, 2021

// Object destructuring
const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

//assume we only need the name from 'person'
//add in {} to the arguments of printName and type the property you're interested in
const printName = ({name}) => {
    console.log(name);
}
//this will be stored in a variable also called name
printName(person);

//you can also use this syntax
const { name, age } = person;
console.log(name, age);

//or with arrays
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

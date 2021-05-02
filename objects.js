// Apr 30, 2021
// Creating an object

const person = {
    name: 'Jesse',                          // this is a key value pair
    age: 26,                                // this is also a key value pair

    //greet: function(){
    //    console.log('Hi, I am, ' + this.name)
    //}

    greet() {                               // this is a function inside 
        console.log('Hi, I am '+this.name)
    }
};

person.greet(); // calls the fucntion 'greet' on object 'person'
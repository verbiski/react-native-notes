// May 4, 2021 - Constructor Functions

//Camel notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

//Factory Function
function createCircle(radius) { 
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

//Constructor Function
//Use Pascal Notation
function Circle(radius) {
    this.radius = radius; //this is a reference to the object that is executing this piece of code
                          //dot notation allows us to add a property (radius) and then we set it to the argument, radius.
    this.draw = function() {
        console.log('draw');
    }
}       

const circle = new Circle(1); 
//'new' operator does 3 things:
//1. creates an empty object
//2. sets 'this' to point to the new object
//3. will return the object from Circle(radius) function

//


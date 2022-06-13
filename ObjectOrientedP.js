/* With ES5, We can create objects with constructor functions in two ways:
1. Constructor function with property
2. ES6 Classes

if we want a person object, we create a constructor function with a capital letter P */

//Constructor function
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    //this.dob = dob; // date as string
    this.dob = new Date(dob) // date as object

    //we can also add function to this.Person Object

    /*this.getBirthYear = function() {
        return this.dob.getFullYear()
    }*/
}

//Prototypes is the better way to add property to object constructor, not inside the constructor but just after the braces of the constructor 

Person.prototype.getBirthYear= function(){
    return this.dob.getFullYear();
}



//Instantiate Objects 

const person1 = new Person('Cletus', 'Ogah', '10-24-1976')
const person2 = new Person('Johnpope','Ogah', '02-20-1982')

console.log(person1);
console.log(person2);

//Advantage of dates in an object format can enable us go alot of things such as 

console.log(person1.dob.getFullYear())

//objected dates are formatted as months-day-year(mm-dd-yyyy)

//Prototypes is the better way to add property to object constructor
console.log(person2.dob.getFullYear())

/* class is another way in ES6/E2015 also add in a much prettier way called syntatic sugar by adding the method or function inside a class called the constructor*/

class Person {

    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;    
}
// then add the property additional method here
getBirthYear(){
    return this.dob.getFullYear();
}

}


//then add the instantiation as same as before, we will get the same results


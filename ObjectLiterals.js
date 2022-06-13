// Object Literals are basically just key values pairs e.g

const person = {
    firstName: 'Cletus',
    lastName: 'Ogah',
    age: 30,
    hobbies: ['music', 'sports', 'movies'],
    address:{
       street: 'off 111 Rd, 3rd Avenue' ,
       City: 'Gwarimpa',
       state: 'Abuja'
    }
}

//the address is an embedded object

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.address);

console.log(person.hobbies);

console.log(person.hobbies[1]);
console.log(person.hobbies.indexOf('sports'));


/*Destructuring
Pulling of variables instead of reassigning them from the person object* part of ES6 feature*/


const {firstName, lastName, address:{City}} = person

// We can also add properties  to the object person

person.email = 'ogahcletus@gmail.com'


console.log(firstName);
console.log(City);
console.log(person);










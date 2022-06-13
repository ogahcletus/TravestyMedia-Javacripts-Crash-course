const todos = [
{
    id: 1,
    task: 'Take out trash',
    isCompleted:'true'
},

{
    id: 2,
    task: 'Meeting with the boss',
    isCompleted:'true'


},
{
    id: 3,
    task: 'Dentist appointment',
    isCompleted:'false'

}

];

console.log(todos);

//To find the lists of todos:
console.log(todos[1].task);
console.log(todos[2].task);

/*https://jsonformatter.curiousconcept.com/# for converting to json data formats

However, if we want to convert to JSON in the script to get it ready to send to server:*/


const todoJSON = JSON.stringify(todos);

console.log(todoJSON);



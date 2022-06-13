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
    
    // for Loop

    for(let i = 0; i<5 ; i++) {

        console.log(i)
    }

    // while loop

    let i=0;
    while (i<8) {

        console.log(i)

        i++
    }

 //Looping through an Array using for loop and length property

 for(i=0; i<todos.length; i++) {

    console.log(todos[i])
 }

// for of Loop:

for (let todo of todos){

    //console.log(todo);

    console.log(todo.task);
}
 

 /*There are other methods called the high ordered array methods which are better for looping or do iterations through arrays:
 - forEach, map and filter

 ForEach only allows us to loop through an array

 Map - allows us to create a new array from an array

 Filter - allows us to create a new array based on a condition*/


 //ForEach:

 todos.forEach(function(todo){

    console.log(todo.id)
 });


 //map , although formatted the same way as forEach , note that with method, an array is returned

 
 const todoTask = todos.map(function(todo){

    return todo.task;
    
 });

 //console.log(todoTask);



//filter used to list tasks that are completed;

const todoCompleted = todos.filter(function(todo){

    return todo.isCompleted === true;
    
 }).map(function(todo){
    return todo.task;
 });

 console.log(todoCompleted);




 
 
 
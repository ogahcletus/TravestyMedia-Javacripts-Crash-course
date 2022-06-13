// Addition Function

function addNums(num1, num2){
    console.log(num1 + num2)

    // note that nothing happens because the function has not been called
}

addNums(10, 5);

// You can also use default values in gthe function eg

function addNums1(num1 = 5, num2 = 7){
    console.log(num1 + num2)
    return (num1 + num2)
}

addNums1();
// note that when you call back the sum of the default values were displayed

addNums1(10, 50)

//You can also use the arrow => function

const addNums2 = (num1 = 5, num2 = 7) => {
    
    return (num1 + num2)
}

addNums2();

console.log(addNums2(100, 200))

// if its just a single line of expresssion , we may not even need the curly brases

const addNums3 = (num1 = 5, num2 = 7) => (num1 + num2)

addNums3();

console.log(addNums3(70, 30))

// arrow function with forEach as below

const todos = [ 'first', 'second', 'third']
todos.forEach((todo) => console.log(todo))
let x = 15;

let y= 1

// if else and else if 
if(x === 10){

    console.log('x is 10')
} else if(x > 10) {

    console.log('x is greater than 10')

}

else{
    console.log('x is NOT 10')
}


//multiple conditions using || which either of the conditions should be true

if(x > 5 || y > 10) {
    console.log('true')
}
else{
    console.log('false')
}

// multiple conditions using && which requires both conditions to be true

if( x >5 && y > 10){
    console.log('true')
}
else{
    console.log('false')
}

//Instead of using multiple conditions of || and &&, you could use nested if statements; However, the multiple conditions are preferred


if(x > 5){
    if(y > 10) {
        console.log('true')
    }
    console.log('false')
}

//tenary ? operator conditionalwith the else represented by a colon:

const x1 = 11;

const color = x1 > 10? 'red':'blue'

console.log(color)

//switch conditionals, which is another way to evaluate conditionals

switch(color){
    case 'red':
        console.log('color is red')
    break;
    
    case 'blue':
        console.log('color is blue')
    break;

    default:
        console.log('color is not red or blue')
}

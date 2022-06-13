/*To create basic form validation script, we can grab some bunch of stuffs from the DOM and put them into variables:

The goal of this little form validation application is to :
1. Add users
2. Grab their values
3. Output their users down in the unordered lists of items below the submit button.
*/


let myForm = document.getElementById('my-form')

const nameInput = document.getElementById('name');


const emailInput = document.getElementById('email');

const msg = document.querySelector('.msg')

const userList = document.querySelector('#users');


//Now to listen for a submit event on the form:




myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();

    console.log(nameInput)

    console.log(nameInput.value)

    console.log(emailInput)

    console.log(emailInput.value)

    console.log(msg)

    console.log(msg.value)

    console.log(userList)

    console.log(userList.value)


}
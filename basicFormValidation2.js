//The goal of the following codes for form validation is to prevent inputs into fields submitting until all the fields are filled out

let myForm = document.getElementById('my-form')

const nameInput = document.getElementById('name');


const emailInput = document.getElementById('email');

const msg = document.querySelector('.msg')

const userList = document.querySelector('#users');


//Now to listen for a submit event on the form:

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();

if(nameInput.value === '' || emailInput.value === '') {

    /* give users a message to comple the fields in using alert or on the form as shown below. 
    However, using alert is not so encourage as it stops the code so the other method is preferrable

    1. alert('Please enter all the fields')
    
    2.*/

    msg.innerHTML = 'Please enter all the fields'

    //You can also add the style of error in your style-css sheet

    msg.classList.add('error')

    //if you want the error message to disappear after 3sec, then use the setTimeout function:

    setTimeout(() => msg.remove(), 3000);

} else{
    //console.log('success')

    //To create the input of users as a list items using the method create document:

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(nameInput.value + ':' + emailInput.value));

    userList.appendChild(li)

//Next, clear the fields after each user

nameInput.value = '';
emailInput.value = '';


}
    

}
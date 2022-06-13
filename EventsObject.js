const btn = document.querySelector('.btn')

btn.addEventListener('click', (eventResponse) => {
    eventResponse.preventDefault();

    console.log(eventResponse)

    console.log(eventResponse.target)

    console.log(eventResponse.target.className)

    console.log(eventResponse.target.id)

// To make changes:

   document.querySelector('#my-form').style.background = 'yellow';

//we can also add or remove a class from our style.css file

document.querySelector('body').classList.add('bg-dark')

//we can also change text if we want

document.querySelector('.items').lastElementChild.innerHTML = '<h1>HELLO</h1>'


//There are other events apart from click like mouseover, mouseout etc

}
)

//target is the object in the event objects that actually shows the element which the click event is on which is the button: you can get different attributes like classname, id etc of the event collected or selected.

// if we want to make changes after we click


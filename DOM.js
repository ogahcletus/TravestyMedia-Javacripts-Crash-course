/* The DOM is Document Object Model which is like a tree structure of the whole html document.*/

/* Selection/Selectors
Refers to the method of selecting html items/elements from the document in order to variables to work with them.
There are two types of selectors
1. Single element selectors
2. Multiple element selectors

/*Window Objects
The window objects refers to the parent objects of the browser*/

console.log(window)

//window.document is what we want we want to use to select items from the document.


/*Single Selectors
1. document.getElementById()*/

const form =document.getElementById('my-form');

console.log(form);

/*2.JQuery Single Selector document.querySelector*/

console.log(document.querySelector('.container'))

/* Multiple Selector 
This is used if you want to select more than one thing*/

console.log(document.querySelectorAll('.item'))


//other methods is

console.log(document.getElementsByClassName('item'))

/*pls note there is not '.item' but just 'item' and unlike the querySelector, its not a nodelist  but a HTML collection.
Pls note that it advisable to stick with the query selector*/

//Looping through item

const items = document.querySelectorAll('.item');

items.forEach((item) => 
    console.log(item)
)

/* DOM Manipulation 
That is manipulation or changing things in the user interface */

const ul = document.querySelector('.items');

/*ul.remove();

Noticethe whole ul items 1-3 removed 

To remove the last item3

ul.lastElementChild.remove()

To edit content: 

ul.firstElementChild.textContent ='Cletus'

To change item 2, is done by index of children */

ul.children[1].innerText = 'Osiroko'

//to add html if you need to change text dynamicly

ul.children[2].innerHTML = '<h1>osiroko</h1>'

//Manipulation of styles in DOM

const btn = document.querySelector('.btn');

btn.style.background = 'blue';


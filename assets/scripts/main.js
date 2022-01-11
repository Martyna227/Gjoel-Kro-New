// This is NOT something we are familiar with by now, but needed to make it a bit more functional



// setup variables for things that are used more than once

let headerElem = document.querySelector('header');
let menuElem = document.querySelector('#mobile');
const strActive = 'opened';

// Add class "opened" to <header> when #menu is clicked
menuElem.addEventListener('click', function (event) {
    event.preventDefault(); // stops the element from doing its usual stuff
    const icon = menuElem.getElementsByTagName('i')[0];
    if (headerElem.className.indexOf('opened') === -1) {

        // if the header element HAS the class 'opened' this code will be read

        headerElem.classList.add(strActive); // add the content of strActive to the class attribute on <header>

        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');

    } else {

        // if the header element DOESN'T have the class 'opened' this code will be read
        headerElem.classList.remove(strActive); // add the content of strActive to the class attribute on <header>

        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');

    }

});
// Define variables

const theTogglebutton = document.getElementsByClassName('toggle-button')[0];
const navigationLinks = document.getElementsByClassName('navbar-links')[0];

// Adding an event listener, when the user clicks on the button, the navbar links will show up.

theTogglebutton.addEventListener('click', () => {
   navigationLinks.classList.toggle('active')
});
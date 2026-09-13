const calculatorForm = document.querySelector('#calculator-form');
const quantity = document.querySelectorAll('.quantity'); // EXPORTE para discount.js | resume.js | details.js
const calcButton = document.querySelector('#calc-button');

calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();
});
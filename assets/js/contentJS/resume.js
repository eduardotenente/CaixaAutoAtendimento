const productTotal = document.querySelector('#product-total');
const subTotal = document.querySelector('#subtotal'); // EXPORTE para details
const total = document.querySelector('#total'); // EXPORTE para details
const discount = document.querySelectorAll('.discount'); // EXPORTE para details
// IMPORTAR productName
// IMPORTAR unitValue

discount.forEach((element) => {
    element.style.color = 'green';
});
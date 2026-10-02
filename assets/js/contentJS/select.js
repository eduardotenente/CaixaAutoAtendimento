// PRODUTO SELECIONADO (mostrar elementos e exportar a quantidade)

import { formatBrl, unitValue, productName, productImage } from "./../utilities/productsValue.js";

const calcForm = document.querySelector('#calculator-form');
const quantityInput = document.querySelector('#product-quantity');

const defaultSelect = document.querySelector('#default-select');
const containerForm = document.querySelector('#product-select'); 

let selectedImage = document.querySelector('#selected-image');
let pName = document.querySelector('.product-name');
let pPrice = document.querySelector('.product-price');
let quantity = 0;

function showCalculator() {
    defaultSelect.classList.add('hidden');
    containerForm.classList.remove('hidden');
    selectedImage.src = productImage;
    selectedImage.alt = productName;
    pName.innerHTML = `${productName}`;
    pPrice.innerHTML = `${formatBrl}`;
    console.log(`${productName}, ${unitValue}, ${productImage}`);
}

calcForm.addEventListener('submit', (event) => {
    event.preventDefault();
    quantity = unitValue * quantityInput.value;
    console.log(quantity);
});

export { quantity, showCalculator };
// PRODUTO SELECIONADO (mostrar elementos e exportar a quantidade)

import {
    formatBrl,
    unitValue, 
    productName, 
    productImage 
} from "./../utilities/productsValue.js";
    
import {
     calculateDiscount, 
     discountContainer, 
     defaultDiscount, 
     showMessage 
} from "./discount.js";

import {
    defaultResume,
    resumeContainer,
    showResume
} from "./resume.js";

const calcForm = document.querySelector('#calculator-form');
const quantityInput = document.querySelector('#product-quantity');

const defaultSelect = document.querySelector('#default-select');
const containerForm = document.querySelector('#product-select'); 

let selectedImage = document.querySelector('#selected-image');
let pName = document.querySelector('.product-name');
let pPrice = document.querySelector('.product-price');
let quantity = 0;
let Value = unitValue;

function showCalculator() {
    defaultSelect.classList.add('hidden');
    containerForm.classList.remove('hidden');
    selectedImage.src = productImage;
    selectedImage.alt = productName;
    pName.innerHTML = `${productName}`;
    pPrice.innerHTML = `${formatBrl}`;
}

calcForm.addEventListener('submit', (event) => {
    event.preventDefault();
    quantity = parseInt(quantityInput.value);
    Value = unitValue * quantity;
    console.log(Value);
    console.log(quantity);
    calculateDiscount();
    
    defaultDiscount.classList.add('hidden');
    discountContainer.classList.remove('hidden');
    showMessage();

    defaultResume.classList.add('hidden');
    resumeContainer.classList.remove('hidden');
    showResume();
});

export { 
    defaultSelect,
    containerForm,
    quantityInput,
    quantity, 
    Value, 
    showCalculator
};
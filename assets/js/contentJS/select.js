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
     discountValue, 
     showMessage 
} from "./discount.js";

import {
    defaultResume,
    resumeContainer,
    totalValue,
    subTotalValue,
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
let Value = 0;

function showCalculator() {
    defaultSelect.classList.add('hidden');
    containerForm.classList.remove('hidden');
    selectedImage.src = productImage;
    selectedImage.alt = productName;
    pName.innerHTML = `${productName}`;
    pPrice.innerHTML = `${formatBrl}`;
};

if (calcForm) {
    calcForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const rawQuantity = parseInt(quantityInput.value, 10);
        quantity = isNaN(rawQuantity) || rawQuantity <= 0 ? 1 : rawQuantity;
        
        const numericUnitValue = typeof unitValue === "string" 
            ? parseFloat(unitValue.replace("R$", "").replace(",", ".").trim()) 
            : Number(unitValue) || 0;

        Value = numericUnitValue * quantity;
    
        calculateDiscount();
        
        defaultDiscount.classList.add('hidden');
        discountContainer.classList.remove('hidden');
        showMessage();
    
        defaultResume.classList.add('hidden');
        resumeContainer.classList.remove('hidden');
        showResume();

        localStorage.setItem('purchaseData', JSON.stringify({
            quantity,
            subtotal: Value || subTotalValue,
            discount: discountValue || 0,
            total: totalValue || Value,
            name: productName,
            image: productImage
        }));
    });
};

export { 
    defaultSelect,
    containerForm,
    quantityInput,
    quantity, 
    Value, 
    showCalculator
};
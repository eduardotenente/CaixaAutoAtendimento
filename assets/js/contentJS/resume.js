// RESUMO DA COMPRA e exibindo detalhes após compra

import { 
    productName, 
    unitValue
} from "./../utilities/productsValue.js";

import { 
    quantity, 
    Value 
} from "./select.js";

import { 
    discountValue, 
    newValue, 
    porcentMessage 
} from "./discount.js";

import {
    defaultDetails,
    detailsContainer,
    showDetails
} from "./details.js";

import {
    flowContainer
} from "./flow.js";

const defaultResume = document.querySelector('#default-resume');
const resumeContainer = document.querySelector('#resume-container');

const resumePName = document.querySelector('.productResume_name');
const resumePPrice = document.querySelector('.productResume_price');
const resumeQuantity = document.querySelector('.resume_quantity');
const productTotal = document.querySelector('#product-total');
const subTotalMessage = document.querySelector('#subtotal'); 
const totalMessage = document.querySelector('#total');
const discountMessage = document.querySelectorAll('.discount'); 
const discountValueMessage = document.querySelector('.discount_text');
const payButton = document.querySelector('#pay-button');

let totalValue = 0;
let subTotalValue = 0

function showResume() {
    totalValue = newValue;
    resumePName.textContent = productName;
    resumePPrice.textContent = `R$ ${unitValue}`;
    resumeQuantity.textContent = quantity; 
    productTotal.textContent = `R$ ${Value}`;
    subTotalValue = Value
    subTotalMessage.textContent = `R$ ${Value}`;
    discountMessage.textContent = `Desconto (${porcentMessage})`;
    discountValueMessage.textContent = `- R$ ${discountValue}`;
    totalMessage.textContent = totalValue;
};

payButton.addEventListener('click', (event) => {
    event.preventDefault();

    defaultDetails.classList.add('hidden');
    detailsContainer.classList.remove('hidden');
    showDetails();

    flowContainer.classList.remove('hidden');
});

export { 
    defaultResume,
    resumeContainer,
    showResume,
    subTotalValue,
    totalValue
 };
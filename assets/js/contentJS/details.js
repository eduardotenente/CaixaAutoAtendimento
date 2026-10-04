// DETALHES DA COMPRA 

import {
    quantity
} from "./select.js";

import {
    discountValue
} from "./discount.js";

import {
    totalValue,
    subTotalValue
} from "./resume.js";

const defaultDetails = document.querySelector('#default-details');
const detailsContainer = document.querySelector('#details-content');
const itemsElement = document.querySelector('#items-element');
const discountElement = document.querySelector('#discount-value');
const subElement = document.querySelector('#sub-element');
const totalElement = document.querySelector('#total-element');

function showDetails() {
    itemsElement.textContent = quantity;
    discountElement.textContent = `R$ ${discountValue}`;
    subElement.textContent = `R$ ${subTotalValue}`;
    totalElement.textContent = `R$ ${totalValue}`;
};

export { 
    defaultDetails,
    detailsContainer,
    showDetails
 };
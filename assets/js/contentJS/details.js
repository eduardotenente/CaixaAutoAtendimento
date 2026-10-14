// DETALHES DA COMPRA 

import { covertForReal } from "./resume.js";

const defaultDetails = document.querySelector('#default-details');
const detailsContainer = document.querySelector('#details-content');
const itemsElement = document.querySelector('#items-element');
const discountElement = document.querySelector('#discount-value');
const subElement = document.querySelector('#sub-element');
const totalElement = document.querySelector('#total-element');

function showDetails() {
    // Recupera e converte os dados salvos
    const savedData = JSON.parse(localStorage.getItem('purchaseData'));

    if (!savedData) {
        console.warn('Nenhum dado de compra encontrado.');
        return;
    }

    if (itemsElement) itemsElement.textContent = savedData.quantity || 0;
    if (discountElement) discountElement.textContent = covertForReal(savedData.discount) ?? 0;
    if (subElement) subElement.textContent = covertForReal(savedData.subtotal) ?? 0;
    if (totalElement) totalElement.textContent = covertForReal(savedData.total) ?? 0;

    defaultDetails.classList.add('hidden');
    detailsContainer.classList.remove('hidden');
};


window.addEventListener('DOMContentLoaded', () => {
  showDetails();
});
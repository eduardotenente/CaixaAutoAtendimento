// DETALHES DA COMPRA 

import { covertForReal } from "./resume.js";

const defaultDetails = document.querySelector('#default-details');
const detailsContainer = document.querySelector('#details-article');
const payButton = document.querySelector('#pay-button');
const closeDetails = document.querySelector('#close-details');

const itemName = document.querySelector('#item-name');
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

    if (itemName) itemName.textContent = savedData.name ?? "informação não carregada";
    if (itemsElement) itemsElement.textContent = savedData.quantity || 0;
    if (discountElement) discountElement.textContent = covertForReal(savedData.discount) ?? 0;
    if (subElement) subElement.textContent = covertForReal(savedData.subtotal) ?? 0;
    if (totalElement) totalElement.textContent = covertForReal(savedData.total) ?? 0;
};

if (payButton) {
    payButton.addEventListener('click', (event) => {
        event.preventDefault();
        defaultDetails.classList.add('hiddenDetails');
        detailsContainer.classList.remove('hiddenDetails');
        showDetails();
    });
};

function isHidden() {
    detailsContainer.classList.add('hiddenDetails')
};

if(closeDetails) {
    closeDetails.addEventListener('click', isHidden)
};
// SEÇÃO DE FLUXO (nova compra)

import {
  defaultSelect,
  containerForm,
  quantityInput
} from "./select.js";

import {
  defaultDiscount,
  discountContainer,
  alertIcon
} from "./discount.js";

import {
  defaultResume,
  resumeContainer,
} from "./resume.js";

import {
  defaultDetails,
  detailsContainer
} from "./details.js";

const flowContainer = document.querySelector('#flow-section')
const newPurchase = document.querySelector('#new-purchase');

newPurchase.addEventListener('click', (page) => {
    page.preventDefault();

    defaultSelect.classList.remove('hidden');
    containerForm.classList.add('hidden');
    quantityInput.value = 1;

    defaultDiscount.classList.remove('hidden');
    discountContainer.classList.add('hidden');
    alertIcon.src = "";
    alertIcon.alt = "";

    defaultResume.classList.remove('hidden');
    resumeContainer.classList.add('hidden');

    defaultDetails.classList.remove('hidden');
    detailsContainer.classList.add('hidden');

    flowContainer.classList.add('hidden');

    console.log("TODAS AS SEÇÕES FORAM LIMPAS!")
});

export {
  flowContainer
};
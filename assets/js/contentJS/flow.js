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

const flowContainer = document.querySelector('#flow-section');
const newPurchase = document.querySelector('#new-purchase');
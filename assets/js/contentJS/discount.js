/*        PRODUTOS IGUAIS */
// -> Desconto aplicado com base na quantidade de produtos iguais
// 2 produtos iguais = 10% de desconto
// 3 produtos iguais = 15% de desconto
// 4 até 6 produtos iguais = 25% de desconto
// 7 ou mais produtos iguais = 35% de desconto

/*      PRODUTOS DIFERENTES */
// -> Desconto aplicado com base na combinação de produtos diferentes
// 2 produtos diferentes = 5% de desconto
// 3 produtos diferentes = 10% de desconto
// 4 produtos diferentes = 25% de desconto
// 5 produtos diferentes = 35% de desconto
// 6 produtos diferentes = 40% de desconto
// 7 ou mais produtos diferentes = 45% de desconto

import { quantity, Value } from "./select.js";
import { Discount, noDiscount, errorDiscount } from "./../utilities/base64.js";
 
const defaultDiscount = document.querySelector('#discount-default');
const discountContainer = document.querySelector('#discount-content');
const discountSection = document.querySelector('#discount-section');
const situationTitle = document.querySelector('#situation-title');
const situationInfo = document.querySelector('#situation-info');
const closeBoxTypeBack = document.querySelector('.read');
const closeBoxTypeContinue = document.querySelector('.mark-as-read');
const closeDiscountMessage = document.querySelector('#close-discount-message');
let alertIcon = document.querySelector('#alertIcon');
let porcentMessage = "";

const porcent10 = 0.10;
const porcent15 = 0.15;
const porcent25 = 0.25;
const porcent35 = 0.35;
let discountValue = 0;
let newValue = 0; 

function calculateDiscount() {
    discountValue = 0;
    if(quantity == 2) {
        discountValue = Value * porcent10;
        porcentMessage = "10%";
    } else if (quantity == 3) {
        discountValue = Value * porcent15;
        porcentMessage = "15%";
    } else if (quantity >= 4 && quantity <= 6) {
        discountValue = Value * porcent25;
        porcentMessage = "25%";
    } else if (quantity >= 7) {
        discountValue = Value * porcent35;
        porcentMessage = "35%";
    } else if(quantity < 2) { 
        discountValue = 0;
    }
    newValue = Value - discountValue;
    console.log(`Desconto aplicado: ${discountValue}`);
    console.log(`Novo valor: ${newValue}`);
};

function showMessage() {

    if(discountValue == 0) {
        discountSection.classList.remove('hidden');
        discountContainer.classList.remove('atDiscount');
        discountContainer.classList.add('noDiscount');

        alertIcon.src = noDiscount;
        alertIcon.alt = "Sem desconto";

        situationTitle.textContent = "Compra sem desconto!";
        situationInfo.textContent = "A quantidade de produtos selecionados não é suficiente para aplicar um desconto. Adicione mais produtos para obter descontos.";
        closeDiscountMessage.textContent = "Continuar sem desconto";

    } else if(quantity >= 2) {
        discountSection.classList.remove('hidden');
        discountContainer.classList.remove('noDiscount');
        discountContainer.classList.add('atDiscount');

        alertIcon.src = Discount;
        alertIcon.alt = "Desconto aplicado";

        situationTitle.textContent = "Desconto aplicado!";
        situationInfo.textContent = `Sua compra se enquadra nas condições de desconto e ganhará um desconto!`;
        closeDiscountMessage.textContent = "Continuar";

    } else if (discountValue < 0) {
        discountSection.classList.remove('hidden');
        discountContainer.classList.remove('noDiscount', 'atDiscount');
        discountContainer.classList.add('error');

        alertIcon.src = errorDiscount;
        alertIcon.alt = "Erro no cálculo do desconto";

        situationTitle.textContent = "Erro no cálculo do desconto";
        situationInfo.textContent = "Ocorreu um erro no cálculo do desconto. Por favor, verifique os valores e tente novamente.";
        closeDiscountMessage.style.display = 'none';
    }
};

function closeDiscount() {
    discountSection.classList.add('hidden');
};

closeBoxTypeContinue.addEventListener('click', closeDiscount);
closeBoxTypeBack.addEventListener('click', closeDiscount);

export { 
    discountContainer,
    defaultDiscount,
    discountValue,
    porcentMessage,
    newValue,
    alertIcon,
    calculateDiscount,
    showMessage 
};
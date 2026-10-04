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
const situationTitle = document.querySelector('#situation-title');
const situationInfo = document.querySelector('#situation-info');
let alertIcon = document.querySelector('#alertIcon');
let porcentMessage = "";

const porcent10 = 0.10 * 10;
const porcent15 = 0.15 * 10;
const porcent25 = 0.25 * 10;
const porcent35 = 0.35 * 10;
let discountValue = 0;
let newValue = 0; 

function calculateDiscount() {
    if(quantity == 2) {
        discountValue = quantity * porcent10;
        porcentMessage = "10%";
    } else if (quantity == 3) {
        discountValue = quantity * porcent15;
        porcentMessage = "15%";
    } else if (quantity >= 4 && quantity <= 6) {
        discountValue = quantity * porcent25;
        porcentMessage = "25%";
    } else if (quantity >= 7) {
        discountValue = quantity * porcent35;
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
        alertIcon.src = noDiscount;
        alertIcon.alt = "Sem desconto";
        situationTitle.textContent = "Compra sem desconto";
        situationInfo.textContent = "A quantidade de produtos selecionados não é suficiente para aplicar um desconto. Adicione mais produtos iguais ou diferentes para obter descontos.";
    } else if(discountValue >= 2) {
        alertIcon.src = Discount;
        alertIcon.alt = "Desconto aplicado";
        situationTitle.textContent = "Desconto aplicado!";
        situationInfo.textContent = `Sua compra se enquadra nas condições de desconto e ganhará um desconto de ${discountValue.toFixed(2)} reais. O novo valor da compra é: ${newValue.toFixed(2)} reais.`;
    } else if (discountValue < 0) {
        alertIcon.src = errorDiscount;
        alertIcon.alt = "Erro no cálculo do desconto";
        situationTitle.textContent = "Erro no cálculo do desconto";
        situationInfo.textContent = "Ocorreu um erro no cálculo do desconto. Por favor, verifique os valores e tente novamente.";
    }
};

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
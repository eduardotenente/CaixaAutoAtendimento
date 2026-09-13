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


const discountContent = document.querySelector('#discount-content');
const situation = document.querySelector('#situation');
const situationInfo = document.querySelector('#situation-info');
const discountValue = ''; // EXPORTE para resume.js
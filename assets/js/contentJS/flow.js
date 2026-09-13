/* Mostre a seção flow quando uma compra for realizada
    - Se o usuário quiser fazer REALIZAR UMA NOVA COMPRA, limpe todas as
      informações nas demais seções.
    - Caso o usuário quiser SAIR, volte a página inicial utilizando link
      interno no proprio html.
*/

const newPurchase = document.querySelector('#new-purchase');

newPurchase.addEventListener('click', (page) => {
    page.preventDefault();
});
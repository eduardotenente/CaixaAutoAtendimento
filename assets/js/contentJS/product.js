// Product Section
export let selected = null;
export const historicProduct = [];
const productList = document.querySelector("#form-list");
const modalOverlay = document.getElementById('modalOverlay');
const dimissX = document.getElementById('dimissX');
const animationBox = document.querySelector('#animationBox');

productList.addEventListener("submit", (event) => {
  event.preventDefault();
  const productSelected = document.querySelector('input[name="product"]:checked');
  if (productSelected) {
    const product = productSelected.value;
    selected = product;
    modalOverlay.classList.remove('modal-hidden');
    historicProduct.push(product);
  } else {
    alert("Por favor, selecione um produto antes de enviar.");
  }
});

function closeDialog() {
  modalOverlay.classList.add('modal-hidden');
};

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' || event.keyCode === 27) {
    closeDialog(); 
  };
});

dimissX.addEventListener('click', closeDialog);

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeDialog();
  };
});

// EXPORTE o produto selecionado para o arquivo select.js | productsValue.js
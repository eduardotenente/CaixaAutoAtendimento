// Product Section
export let selected = null;
export const historicProduct = [];
const modalSucess = document.getElementById('modalSucess');
const modalError = document.getElementById('modalError');
const dimissX = document.getElementById('dimissX');
const dimissXerror = document.getElementById('dimissXerror');
const productList = document.querySelector("#form-list");
const productInfo = document.querySelector('.product_info');

productList.addEventListener("submit", (event) => {
  event.preventDefault();
  const productSelected = document.querySelector('input[name="product"]:checked');

  if (productSelected) {
    const product = productSelected.value;
    selected = product;

    historicProduct.push(product);
    modalSucess.classList.remove('modal-hidden');
    modalError.classList.add('modal-hidden');
    productInfo.classList.add('modal-hidden');

    setTimeout(() => {
      closeDialog();
    }, 5000);

  } else {
    modalError.classList.remove('modal-hidden');
    modalSucess.classList.add('modal-hidden');
  };
});

function closeDialog() {
  modalSucess.classList.add('modal-hidden');
  modalError.classList.add('modal-hidden');
};

dimissX.addEventListener('click', closeDialog);
dimissXerror.addEventListener('click', closeDialog);

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' || event.keyCode === 27) {
    closeDialog(); 
  };
});

modalSucess.addEventListener('click', (event) => {
  if (event.target === modalSucess) {
    closeDialog();
  };
});

// EXPORTE o produto selecionado para o arquivo select.js | productsValue.js
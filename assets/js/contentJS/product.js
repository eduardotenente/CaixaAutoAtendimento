// Product Section
export let selected = null;
export const historicProduct = [];
const productList = document.querySelector("#form-list");
const choice = document.querySelector("#submit-product");

productList.addEventListener("submit", (event) => {
  event.preventDefault();
  const productSelected = document.querySelector('input[name="product"]:checked');   

  if (productSelected) {
    const product = productSelected.value;
    selected = product;
    alert(`Você selecionou o produto: ${product}`);

    historicProduct.push(product);
    console.log("Produtos salvos no vetor:", historicProduct);
  } else {
    alert("Por favor, selecione um produto antes de enviar.");
  }
});

// EXPORTE o produto selecionado para o arquivo select.js | productsValue.js
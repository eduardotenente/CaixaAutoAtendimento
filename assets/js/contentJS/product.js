// Product Section
const historicProduct = [];
const productList = document.querySelector("#form-list");
const productItems = document.querySelectorAll(".product-item");
const choice = document.querySelector("#submit-product");

productList.addEventListener("submit", (event) => {
  event.preventDefault();
  const productSelected = document.querySelector('input[name="product"]:checked');   

  if (productSelected) {
    const product = productSelected.value;
    exports = productSelected;
    alert(`Você selecionou o produto: ${product}`);

    historicProduct.push(productName);
    console.log("Produtos salvos no vetor:", historicProduct);
  } else {
    alert("Por favor, selecione um produto antes de enviar.");
  }
});

// EXPORTE o produto selecionado para o arquivo select.js | productsValue.js
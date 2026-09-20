// IMPORTAR FOTO DE CADA PRODUTO
const products = [ 
    { name: "refrigerante", price: 4.00, fotage: "" }, 
    { name: "água", price: 3.50, fotage: "" },
    { name: "biscoito", price: 5.00, fotage: "" }, 
    { name: "chocolate", price: 10.00, fotage: "" },
    { name: "sorvete", price: 3.00, fotage: "" },
];

;(function(){
    /*
     De acordo com o produto selecionado, guarde a descrição e valor do produto
     separadamente em uma variável para exportar para o arquivo details.
    */
   for(let pos in products) { 
       if(productSelected.value == products[pos].name && productSelected.value == products[pos].price) {
         const unitValue = products[pos].price; // EXPORTE para select.js | resume.js
         const productName = products[pos].name; // EXPORTE para select.js | resume.js
       }; 
   }
})()
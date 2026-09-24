const select = require('./../contentJS/product');
const products = [ 
    { name: "refrigerante", price: 4.00, image: "././media/images/icons/refrigerante.png" }, 
    { name: "água", price: 3.50, image: "././media/images/icons/agua.png" },
    { name: "biscoito", price: 5.00, image: "././media/images/icons/biscoitos.png" }, 
    { name: "chocolate", price: 10.00, image: "././media/images/icons/chocolate.png" },
    { name: "sorvete", price: 3.00, image: "././media/images/icons/casquinha.png" },
];

;(function(){
    /*
     De acordo com o produto selecionado, guarde a descrição e valor do produto
     separadamente em uma variável para exportar para o arquivo details.
    */
   for(let pos in products) { 
       if(select.productSelected.value == products[pos].name && select.productSelected.value == products[pos].price) {
         const unitValue = products[pos].price; // EXPORTE para select.js | resume.js
         const productName = products[pos].name; // EXPORTE para select.js | resume.js
       };
   }
})()

module.exports = {
    unitValue,
    productName,
    products
}
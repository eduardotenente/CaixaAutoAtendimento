import { selected } from "./../contentJS/product.js";

const products = [ 
    { name: "refrigerante", price: 4.00, image: "././media/images/icons/refrigerante.png" }, 
    { name: "água", price: 3.50, image: "././media/images/icons/agua.png" },
    { name: "biscoito", price: 5.00, image: "././media/images/icons/biscoitos.png" }, 
    { name: "chocolate", price: 10.00, image: "././media/images/icons/chocolate.png" },
    { name: "sorvete", price: 3.00, image: "././media/images/icons/casquinha.png" }
];

let unitValue = 0;
let productName = "";
let productImage = "";

export function checkSelectedProduct() {
    products.forEach((product) => {
        if (selected && selected.toLowerCase() === product.name.toLowerCase()) {
            unitValue = product.price; 
            productName = product.name; 
            productImage = product.image;

            console.log(`Sucesso! Você escolheu ${productName} por R$ ${unitValue}`);
        }
    });
};

export { unitValue, productName, productImage };

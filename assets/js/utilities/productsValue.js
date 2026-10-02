import { selected } from "./../contentJS/product.js";
import { soda, water, cookie, chocolate, iceCream } from "./base64.js";

const products = [ 
    { name: "Refrigerante", price: 4.00, image: soda }, 
    { name: "Água", price: 3.50, image: water },
    { name: "Biscoito", price: 5.00, image: cookie }, 
    { name: "Chocolate", price: 10.00, image: chocolate },
    { name: "Sorvete", price: 3.00, image: iceCream }
];

export let formatBrl = '';
export let unitValue = 0;
export let productName = "";
export let productImage = "";

export function checkSelectedProduct() {
    products.forEach((product) => {
        if (selected && selected === product.name) {
            formatBrl = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(product.price); 
            unitValue = product.price;
            productName = product.name; 
            productImage = product.image;
        };
    });
};
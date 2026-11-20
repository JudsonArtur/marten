interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    active: boolean;
}


const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 250000,
    stock: 5,
    active: true
  },
  {
    id: 2,
    name: "Mouse",
    price: 10000,
    stock: 20,
    active: true
  },
  {
    id: 3,
    name: "Keyboard",
    price: 15000,
    stock: 0,
    active: false
  }
];


// Listar productos

const productNames= products.map(product => product.name);

// Produtos Disponiveis
const availableProducts = products.filter(
    product => product.stock > 0 && product.active 
)

// Inventario dos produtos
const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.stock,0
);

console.log("Produtos:", productNames);
console.log("Disponíveis:", availableProducts);
console.log("Valor do inventário:", inventoryValue);



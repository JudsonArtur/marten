
interface User {
    id: number;
    name: string;
    email: string;
    active: boolean;
}

interface Costumer{
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface Products{
    id: number;
    name : string;
    price : number;
    stock: number;
}


const user : User = {
    id :1,
    name:"Judson Artur",
    email: "judsoncapepa22@gmail.com",
    active: true
}

const product : Products []=[
{ id:1, name: "Feijao Manteiga",price: 1000, stock: 10},
{ id:1, name: "Arroz",price: 500, stock: 15},
{ id:1, name: "Bulacha Integral",price: 8, stock: 0},
{ id:1, name: "Margarina",price: 102.4, stock: 16}
];



function welcomeUser(user : User): string {
   return `Seja Bem vindo ao Saas ${user.email}`;
}

function calculateTotal (price:number, quantity: number): number{
    return price*quantity;
}


console.log(welcomeUser(user));
console.log("Utilizador ativo:", user.active);


interface User {
    id: number;
    name: string;
    email: string;
    active: boolean;
}

const user : User = {
    id :1,
    name:"Judson Artur",
    email: "judsoncapepa22@gmail.com",
    active: true
}


function welcomeUser(user : User): string {
   return `Seja Bem vindo ao Saas ${user.email}`;
}
console.log(welcomeUser(user));
console.log("Utilizador ativo:", user.active);

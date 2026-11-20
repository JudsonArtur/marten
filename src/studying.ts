let age  = 33;
const name ="Judson Artur";
var country = "Angola";
let address;

age = 32;

//name = "Judson";  name é uma constante não pode ser reatribuido;

  console.log(age, name, country, address);

  const product = "Laptop";
const price = 1232;


console.log(`\n O produto  ${product} custa ${price} kzs`);


function productAdd(a:number,b:number){
     return a+b;
}
const multiply = (a:number,b:number)=> a*b;


  console.log(productAdd(12,3));
    console.log(multiply(12,3));

    const team = {
        id: 1,
        teamName: "Mary Artur",
        teamAge : 23
    }

    const {id, teamName, teamAge} =  team;

    console.log(teamName, teamAge);

    const colors = ["Red","Green", "Blue"];

    const [first, second] = colors;

    console.log(first, second);

    const updateTeam ={
        ...team,
        wins: 4,
        losts: 2,
        draw : 23,
        active: true
    }

    console.log(updateTeam);

      /** In this section we talked about array function called mad */
    const numbers = [1,3,5,7,9,11];

    const doubles = numbers.map(namber => namber * 2 );
    console.log (doubles)
 
      /**
       * In this section we talked  array funtion Filter
       */
    const ages = [23,22,16,34,18,20];
    const adults = ages.filter(age => age >= 18);

    console.log(adults);

      /**
       * In this section we talked  array funtion Reduce
       */
    const prices = [200,300,400,500];

     const totalPrice = prices.reduce((sum , prece)=> sum + prece,0);
     console.log(`O preço total dos produtos é ${totalPrice}kzs`);


     /** Async programming */

     const getData = new Promise((resolve, reject) => {
        const success = true;
        if(success){
            resolve("Dados recebidos");
        }else{
            reject("Erro ao Carregar");
        }
     });

     getData
     .then(result => console.log(result))
     .catch(error => console.log(error));


    async function getPosts(){
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            if(!response.ok){
                throw new Error("Erro ao carregar utilizadores");
            }

            const posts = await response.json();
            console.log(posts);
        }catch(error){
            console.error(error);
        }
        
    }

  //  getPosts();



    /** Typescript learning  */

    let username :string = "Judson";
    let userAge : number = 12;
    let userStage : boolean = true;

    let userSkills: string[] = [
             "Reactjs", "Linux", "NextJs", "NestJs"
    ];

    interface Fingers{
        id: number,
        name: string,
        size: string,
        active: boolean
    }

    const finger: Fingers = {
           id: 1,
           name: "Mendinho",
           size: "1.5cm",
           active: true,
    };


    type Status = "active"|"inactive"|"pending";

    type Product =
    {
         id: number,
         name: string,
         price: number,
         status: Status,
    }


    const products : Product ={
        id: 1,
        name: "Manga",
        price: 23.4,
        status: "active",
    };


    /** Generics  */

    function identify<T> ( value:T) : T {
        return value;
    }

    console.log(identify<string>("Judson Maria Caprp"));
     console.log(identify<number>(2));

     const maxNumber =(a:number, b: number ) => (a > b)? a: b ;

console.log(`O maior numero eh : ${maxNumber(10,45)}`);

   const numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,14,13];

   const getParNumber = numbers2.filter(number => number % 2 === 0);
    console.log(`Os numeros pares ${getParNumber}`);

    const items = [
            { price: 1000, quantity: 2 },
            { price: 500, quantity: 3 }
    ];

    const total = items.reduce(
        (sum, items) => sum + items.price * items.quantity, 0
    );

    console.log(`O valor Total eh: ${total}`);


    function firstElement<T>(items: T[]): T|undefined{
           return items[0];
    } 
    console.log(firstElement<number>([10, 20, 30]));
    console.log(firstElement<string>(["React", "Next.js"]));

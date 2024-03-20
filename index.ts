/*const nome:string = 'juan';
const numero:number = 10;
console.log(numero);
console.log(nome);
console.log("olá");
*/


//Dados primitivos

// const texto: string = "olá mundo";
// const nome: string = "Bem vindo";
// var saudação = texto + nome;
// console.log(saudação);
// const booleano:boolean = true;
// console.log(booleano);

//array ou turplas

// const pares: number[] = [2, 4, 6, 8, 10]
// const linguagens: string[] = ["html", "css"];
// linguagens.push("typescript");
// console.log(linguagens);

// //Não consigo dar push, pois é apenas readonly
// const linguagens2: readonly string[] = ["html", "css"];
// console.log(linguagens2);

// var tupla:[string, number, boolean, boolean] = ["Aqui vai um texto", 10, true, false];
// tupla.push("nova variavel");
// console.log(tupla);
// console.log(typeof(tupla))



//Objetos
// const user: {nome: string, email: string, senha: number} = {
//     nome: 'juan',
//     email: 'juan@gmail.com',
//     senha: 1234
// }
// console.log(user.nome);

//type alias
// type usuario = {
//     name: string,
//     email: string, 
//     password?: number
// }
// const user1: usuario = {
//     name: 'juan',
//     email: 'juan@gmail.com',
//     password: 1234
// }
//  const user2: usuario = {
//     name: 'Marcos',
//     email: 'marcos@gmail.com',
// }

//interface
// interface Usuario {
//     name: string,
//     email: string, 
//     password?: number
// }
// const user3: Usuario = {
//     name: 'juan',
//     email: 'juan@gmail.com',
//     password: 1234
// }
//  const user4: Usuario = {
//     name: 'Marcos',
//     email: 'marcos@gmail.com',
// }


//Any
var x: any
x =7;
console.log(x);
console.log(typeof(x));
x= '7'
console.log(x);
console.log(typeof(x));


//union type
var y: string | number
y =7;
console.log(y);
console.log(typeof(y));
y= '7'
console.log(y);
console.log(typeof(y));

//Usando union type com type alias
type typeid = string | number;
var z: typeid
z =7;
console.log(z);
console.log(typeof(z));
z= '7'
console.log(z);
console.log(typeof(z));

//unknown
var u: unknown
u =7;
console.log(u);
console.log(typeof(u));
u= '7'
console.log(u);
console.log(typeof(u));


//Enum
enum Tamanho {
    P = 'pequena',
    M= 'média',
    G = 'grande'
}

const camiseta = {
    Nome: 'camisa branca',
    tamanho: Tamanho.M
}

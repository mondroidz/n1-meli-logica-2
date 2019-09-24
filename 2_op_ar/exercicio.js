//resposta aqui

 var r = require("readline-sync");

// var a = parseInt(r.question("Digite 1 ou 2"));

// console.log(a);

const listProd = [
    {
        nome: "chocolate",
        valor: 12.00
    },
    {
        nome : "jujuba",
        valor : 3.00
    },
    {
        nome : 'chiclete',
        valor : 2.80
    }
] 
const idPosicao = parseInt(r.question("Digite um número de 0 a 2"));

const idPorc = parseInt(r.question("qual o desconto em %?"));

console.log(listProd[2])






//resposta aqui

 var r = require("readline-sync");

// var a = parseInt(r.question("Digite 1 ou 2"));

// console.log(a);

var listProd = [
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
var idPosicao = parseInt(r.question("Digite um número de 0 a 2"));

var idPorc = parseInt(r.question("digite uma porcentagem: "));

var idProdSelecionado = listProd[idPosicao];

var descTotal = idProdSelecionado.valor * (idPorc / 100);

console.log("O produto " + idProdSelecionado.nome + " com desconto é R$" + descTotal.toFixed(2));




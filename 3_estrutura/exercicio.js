//resposta aqui

var r = require("readline-sync");
 
var listProdutos = [
    {
        nome : "Neston",
        tempoDeValidade : 150,
        congelado : false
    },
    {
        nome : "Molico",
        tempoDeValidade : 80,
        congelado : true
    },
    {
        nome : "Nescau",
        tempoDeValidade : 200,
        congelado : false
    },
    {
        nome : "Manteiga Qualy",
        tempoDeValidade: 80,
        congelado : true
    },
    {
        nome : "Farinha de Trigo Dona Benta",
        tempoDeValidade : 170,
        congelado : false
    }
]

var escolherProd = parseInt(r.question("Escolha um produto entre 0 e 4: "));

var diasParaOVencimentoDoProduto = parseInt(r.question("Digite quantos dias faltam para o vencimento."));

var produtoEscolhido = listProdutos[escolherProd];

var porcentagem = (diasParaOVencimentoDoProduto * 100) / produtoEscolhido.tempoDeValidade;

// var porcentagemFinal = porcentagem [0];

console.log()

if (porcentagem <= 2) {
    console.log("Descartar produto, muito proximo de vencer.");
} else if (porcentagem <= 10 && !produtoEscolhido.congelado) {
    console.log("Desconto! Produto não congelado e próximo da validade.");
} if (porcentagem >= 5 && produtoEscolhido.congelado) {
    console.log("Desconto! Produto congelado e na validade.");
} else (porcentagem > 10); {
    console.log("Produto longe do vencimento");
}



console.log(produtoEscolhido, porcentagem, produtoEscolhido.tempoDeValidade)
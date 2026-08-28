/**
 * Peça ao usuário:

preço do produto;
percentual de desconto.

Calcule:

quanto será o desconto;
preço final.
 */

const prompt = require('prompt-sync')()

let precoDoProduto = Number(prompt(' Informe o valor do produto: '))
let  porcentagemDeDesconto = Number(prompt('Informe a porcentagem de desconto: '))

let valordoDesconto = (precoDoProduto * porcentagemDeDesconto) / 100
let precoFinal = precoDoProduto - valordoDesconto

console.log(`Valor do desconto: R$ ${valordoDesconto.toFixed(2)}`)
console.log(`Preço final a pagar: ${precoFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
/**
 * Receba o preço original de um produto e uma porcentagem de desconto (ex: 15%); 
 * calcule o valor do desconto e o preço final a pagar.
 */

const precoDoProduto = 120.90
const porcentagemDeDesconto = 15

const valordoDesconto = (precoDoProduto * porcentagemDeDesconto) / 100
const precoFinal = precoDoProduto - valordoDesconto

console.log(`Valor do desconto: R$ ${valordoDesconto.toFixed(2)}`)
console.log(`Preço final a pagar: R$ ${precoFinal.toFixed(2)}`)
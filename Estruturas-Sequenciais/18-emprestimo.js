/**
 * faça um programa que simula ajude a 
 * solicitar um valor de emprestimo e saber o valor que ira pagar 
 * por mes.
 */

const prompt = require('prompt-sync')()
let juros = 20

let valorDoEmprestimo = Number(prompt('Qual valor do emprestimo? '))
let numeroDeVezes = Number(prompt('Em quantas vezes gostaria de fazer ? '))

let taxaDeJuros = (valorDoEmprestimo * juros) /100
let valorTotalEmprestimo = valorDoEmprestimo + taxaDeJuros

let qtdVezes = valorTotalEmprestimo / numeroDeVezes

console.log(` O cliente irá pagar o valor total de ${valorTotalEmprestimo.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)
console.log(`Em ${numeroDeVezes} vezes de R$ ${qtdVezes.toFixed(2)}`)
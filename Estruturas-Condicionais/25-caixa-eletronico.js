/**
 * Exercício 2 — Caixa eletrônico

Crie um programa que peça:

Saldo disponível:
Valor do saque:

O saque poderá ser realizado somente se:

o valor do saque for maior que 0
E o valor do saque for menor ou igual ao saldo disponível

Se puder sacar:

Saque realizado com sucesso!

Depois mostre o novo saldo.

Caso contrário:

Saque não autorizado.

💡 Aqui temos duas condições que precisam ser verdadeiras.
 */


const prompt = require('prompt-sync')()

let saldo = Number(prompt('Informe o saldo disponível: '))
let saque = Number(prompt('Informe o valor que deseja sacar: '))
let novoSaldo = saldo - saque

if ((saque > 0) && (saque <= saldo)) {
    console.log('Saque realizado com sucesso! ')
    console.log(`Novo saldo = ${novoSaldo.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}`)

}else{
    console.log('Saque não autorizado. ')

}


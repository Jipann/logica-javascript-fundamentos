/**
 * Exercício 8 — Desafio final: aprovação de crédito

Agora o último. Esse é o mais difícil da lista, mas ainda está dentro do que você estudou.

Um banco quer decidir se pode aprovar um empréstimo.

Peça:

Salário:
Valor da parcela:
Possui nome negativado? (sim/não)

O empréstimo poderá ser aprovado se:

Regra 1

A pessoa não possui nome negativado

E

a parcela representa no máximo 30% do salário.

OU

Regra 2

A pessoa não possui nome negativado

E

o salário é maior ou igual a R$ 5.000

E

a parcela representa no máximo 40% do salário.

Exemplos:
Salário: 3000
Parcela: 800
Negativado: não

Parcela = 26,6% do salário

Empréstimo aprovado.
 */

const prompt = require('prompt-sync')()


let salario = Number(prompt('Informe o salário: '))
let valorParcela = Number(prompt('Informe o valor da parcela: '))
let negativado = String(prompt('Possui nome negativado? (sim/ nao): '))

let percentualParcela = (valorParcela / salario) * 100

if (negativado  === 'nao' && percentualParcela <= 30) { 
    console.log(`Salário: ${salario}`) 
    console.log(`Parcela: ${valorParcela}`)
    console.log(`Negativado: ${negativado}`)
    console.log(`Parcela = ${percentualParcela.toFixed(2)} % do salário`)
    console.log('Empréstimo aprovado.')

}else if (( salario >= 5000 && negativado === 'nao') && (percentualParcela <=40)) {
    console.log(`Salário: ${salario}`) 
    console.log(`Parcela: ${valorParcela}`)
    console.log(`Negativado: ${negativado}`)
    console.log(`Parcela = ${percentualParcela.toFixed(2)} % do salário`)
    console.log('Empréstimo aprovado.')

}else{
    console.log(`Salário: ${salario}`) 
    console.log(`Parcela: ${valorParcela}`)
    console.log(`Negativado: ${negativado}`)
    console.log('Empréstimo não aprovado.')
}
  
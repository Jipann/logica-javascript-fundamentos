/**
 * Exercício 3 — Analisador de número

Peça um número inteiro.

Seu programa deve informar:

se é positivo, negativo ou zero;
depois, se for diferente de zero, dizer se é par ou ímpar.
Exemplo
Número: 8

Positivo
Par

Outro:

Número: -7

Negativo
Ímpar

Outro:

Número: 0

Zero
 */

const prompt =require('prompt-sync')()

let numero = Number(prompt('Informe um numero inteiro: '))

    if (numero > 0) {

    console.log('Positivo')

    } else if (numero < 0) {

    console.log('Negativo')

    } else {

    console.log('Zero')
    }

// Depois descobrimos se é par ou ímpar
if (numero % 2 === 0) {

    console.log('Par')

} else {

    console.log('Ímpar')
}



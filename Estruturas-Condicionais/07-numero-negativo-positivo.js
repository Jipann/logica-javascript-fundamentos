/**
 * Número positivo, negativo ou zero

Crie um programa que peça um número ao usuário.

O programa deve informar:

se o número é positivo;
se é negativo;
se é zero.
Exemplos:
Digite um número: 15
Número positivo.
Digite um número: -8
Número negativo.
Digite um número: 0
O número é zero.
 */

const prompt = require('prompt-sync')()


let numero = Number(prompt('Informe um número: '))

if (numero < 0) {
    console.log(' Número negativo!')

}else if (numero === 0) {
    console.log('Número é zero')
}else{
    console.log('Número positivo.')
}
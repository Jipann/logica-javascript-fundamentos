/**
 * Crie um programa que peça ao usuário um número e mostre:

o dobro;
o triplo;
a metade.

Digite um número: 10

Dobro: 20
Triplo: 30
Metade: 5
 */
const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número: '))


let dobro = numero + numero
let triplo = numero * 3
let metade = numero / 2

console.log(dobro)
console.log(triplo)
console.log(metade)

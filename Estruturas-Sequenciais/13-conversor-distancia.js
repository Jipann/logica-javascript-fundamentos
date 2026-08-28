/**
 * Conversão de distância

Quilômetros → metros.
Metros → centímetros.
 */

const prompt = require('prompt-sync')()

let quilometros = Number(prompt('Informe uma distância em quilômetros: '))

let metros = quilometros * 1000

let centimetros = metros * 100

console.log(`${quilometros} km = ${metros} metros`)
console.log(`${quilometros} km = ${centimetros} centímetros`)
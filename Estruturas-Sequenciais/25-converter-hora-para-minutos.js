/**
 * Enunciado:
Peça ao usuário uma quantidade de horas e mostre quantos minutos existem.
Digite as horas: 3

3 horas = 180 minutos
 */

const prompt = require('prompt-sync')()

let horas = Number(prompt('Informe o valor em horas: '))

let converteHorasEmMinutos = horas * 60

console.log(`${horas} horas = ${converteHorasEmMinutos} minutos `)
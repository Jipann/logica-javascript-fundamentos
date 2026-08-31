/**
 * exercicio 1 horas para minutos:
 * const prompt = require('prompt-sync')()

let horas = Number(prompt('Informe o valor em horas: '))

let converteHorasEmMinutos = horas * 60

console.log(`${horas} horas = ${converteHorasEmMinutos} minutos `)
 */

// exercicio 2 minutos para hora:
// minutos para horas:
/*const prompt = require('prompt-sync')()

let minutos = Number(prompt('Informe os minutos: '))

let converterMinutosParaHora = minutos / 60

console.log(`${minutos} minutos = ${converterMinutosParaHora} horas`)*/


// exercicio 3 minutos para segundos:
/*const prompt = require('prompt-sync')()
let minutos = Number(prompt('Informe os minutos: '))

let converteMinutosParaSegundos = minutos * 60

console.log(`${minutos} minutos = ${converteMinutosParaSegundos} segundos`)*/

// exercicio 4 : segundos para minutos:
/*const prompt = require('prompt-sync')()

let segundos = Number(prompt('Informe os segundos: '))

let converteSegundosEmMinutos = segundos / 60

console.log(`${segundos} segundos = ${converteSegundosEmMinutos} minutos`)*/

/**exercicio 5 :Minutos → horas + minutos restantes
Enunciado:
Peça ao usuário uma quantidade de minutos e mostre:

quantas horas completas existem;
quantos minutos sobraram
Exemplo:

Digite os minutos: 150

150 minutos = 2 horas e 30 minutos*/
/*const prompt = require('prompt-sync')()
let minutos = Number(prompt('Informe os minutos: '))

let horaInteira = Math.floor(minutos / 60)
let sobraMinutos = minutos % 60

console.log(`${minutos} minutos = ${horaInteira} e ${sobraMinutos} minutos`)*/

/**
 * Exercício 6 — Segundos → minutos + segundos restantes

Enunciado:
Peça ao usuário uma quantidade de segundos e mostre:

quantos minutos completos existem;
quantos segundos sobraram.

Exemplo:

Digite os segundos: 367

367 segundos = 6 minutos e 7 segundos
 
const prompt = require('prompt-sync')()

let segundos = Number(prompt('Informe os segundos: '))

let minutosCompletos = Math.floor(segundos / 60)
let sobraSegundos = segundos % 60

console.log(`${segundos} segundos = ${minutosCompletos} minutos e ${sobraSegundos} segundos `)*/

/**
 * Exercício 7 — Horas + minutos → minutos

Enunciado:
Peça ao usuário:

quantidade de horas;
quantidade de minutos.

Transforme tudo em minutos.

Exemplo:

Horas: 2
Minutos: 30

2 horas e 30 minutos = 150 minutos
 

const prompt = require('prompt-sync')()

let horas = Number(prompt('Informe as horas: '))
let minutos = Number(prompt('Informe os minutos: '))

let horaMinuto = (horas * 60) + minutos
console.log(`${horas} horas e ${minutos} minutos = ${horaMinuto} minutos`)*/

/**
 * Exercício 8 — Minutos → horas + minutos

Enunciado:
Peça ao usuário uma quantidade de minutos e mostre o resultado separado em horas e minutos.

Exemplo:

Digite os minutos: 185

185 minutos = 3 horas e 5 minutos
 
const prompt = require('prompt-sync')()
let minutos = Number(prompt('Informe a quantidade de minutos: '))

let minutoInteiro = Math.floor(minutos / 60)
let sobraMinutos = minutos % 60

console.log(`${minutos} minutos = ${minutoInteiro} horas e ${sobraMinutos} minutos`)*/

/**
 * Exercício 9 — Repetição de segundos → minutos

Enunciado:
Uma atividade durou 425 segundos.

Crie um programa que mostre quantos minutos completos existem e quantos segundos sobraram.

Resultado esperado:

425 segundos = 7 minutos e 5 segundos
 
const prompt = require('prompt-sync')()
let segundos = Number(prompt('Informe a quantidade de segundos: '))

let segundosParaMinutos = Math.floor(segundos / 60)
let sobrasegundos = segundos % 60

console.log(`${segundos} segundos = ${segundosParaMinutos} minutos e ${sobrasegundos} segundos`)*/


/**
 * Exercício 10 — Ida e volta

Enunciado:
Peça ao usuário uma quantidade de horas e minutos.

Primeiro transforme tudo em minutos.

Depois pegue o resultado e transforme novamente em horas e minutos.

Exemplo:

Horas: 2
Minutos: 20

2 horas e 20 minutos = 140 minutos

140 minutos = 2 horas e 20 minutos
 */

const prompt = require('prompt-sync')()

let horas = Number(prompt('Informe a quantidade de horas: '))
let minutos = Number(prompt('Informe a quantidade de minutos: '))

// converte hora para minutos:
let horaParaMinutos = (horas * 60) + minutos

// minutos para horas:
let minutosParaHora = Math.floor(horaParaMinutos / 60)
// sobraminutos:
let restoMinutos = horaParaMinutos % 60

console.log(`${horas} horas e ${minutos} minutos = ${horaParaMinutos} minutos`)
console.log(`${horaParaMinutos} minutos = ${minutosParaHora} e ${restoMinutos} minutos`)
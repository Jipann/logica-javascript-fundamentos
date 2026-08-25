/**
 * Desafio 3 — Viagem de carro

Você fez uma viagem de:

2 horas e 15 minutos.

Queremos descobrir:

Quantos minutos durou a viagem inteira?
 */

const horas = 2
const minutos = 15

const horasParaMinutos = horas * 60
const totalMinutos = horasParaMinutos + minutos

// 2 horas e 15 minutos = 135 minutos
console.log(`${horas} horas e ${minutos} minutos = ${totalMinutos} minutos`)


/**
 * Enunciado

Você fez uma viagem que durou:

1 hora e 45 minutos.

Crie um programa que mostre:
 */

const totalHora = 1
const minutosTotal = 45

const conversor = (totalHora * 60) + minutosTotal

//SAIDA 1 hora e 45 minutos = 105 minutos
console.log(`{${totalHora} horas e ${minutosTotal} minutos = ${conversor} minutos`)
/**
 * Exercício 1 — Abastecimento do carro

Você precisa criar um programa para verificar se o motorista consegue chegar ao destino.

O programa deve pedir:

Quantos litros há no tanque?
Quantos km o carro faz por litro?
Quantos km até o destino?

Considere que:

autonomia = litros no tanque × km por litro

O motorista poderá viajar se a autonomia for maior ou igual à distância até o destino.

Exemplo:
Litros: 30
Km por litro: 10
Distância: 250

Autonomia: 300 km
Você consegue chegar ao destino.

Caso contrário:

Você não consegue chegar ao destino.
 */

const prompt = require('prompt-sync')()

let tanque = Number(prompt('Quantos litros há no tanque? '))
let kmLitro = Number(prompt('Quantos km o carro faz por litro? '))
let distancia = Number(prompt('Quantos Km até o destino? '))

let autonomia = tanque * kmLitro

if (autonomia >= distancia) {
   console.log(`Autonomia: ${autonomia} KM` ) 
   console.log('Você consegue chegar ao destino.')

}else{
    console.log('Você não conseguer chegar ao destino! ')
}
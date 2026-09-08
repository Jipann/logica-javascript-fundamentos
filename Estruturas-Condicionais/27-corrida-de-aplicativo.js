/**
 * xercício 4 — Corrida de aplicativo

Um aplicativo possui uma regra para aceitar uma corrida.

A corrida será aceita se:

Regra A:

distância menor ou igual a 20 km
E motorista está disponível

OU

Regra B:

distância maior que 20 km
E motorista possui categoria especial

Pergunte:

Distância da corrida:
Motorista está disponível? (sim/não)
Motorista possui categoria especial? (sim/não)
 */

const prompt = require('prompt-sync')()

let distancia = Number(prompt('Distância da corrida: '))
let disponivel = String(prompt('Motorista está disponível? (sim/não): '))
let categoria = String(prompt('Motorista possui categoria especial? (sim/não): '))

if (distancia <= 20  && disponivel === 'sim') {
    console.log(`Distância: ${distancia} km `) 
    console.log(`Disponível: ${disponivel} `)
    console.log(`Especial: ${categoria}`)
    console.log('Corrida aceita.')

}else if (distancia >= 30 && categoria === 'nao') {
    console.log(`Distância: ${distancia} km `) 
    console.log(`Disponível: ${disponivel} `)
    console.log(`Especial: ${categoria}`)
    console.log('Corrida não aceita.')

}else{
    console.log(`Distância: ${distancia} km `) 
    console.log(`Disponível: ${disponivel} `)
    console.log(`Especial: ${categoria}`)
    console.log('Corrida aceita.')
}
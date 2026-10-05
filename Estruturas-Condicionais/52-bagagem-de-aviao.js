/**
 * Exercício 1 — Bagagem de avião

Uma companhia aérea cobra uma taxa de acordo com o peso da bagagem:

até 5 kg → sem taxa
acima de 5 até 10 kg → R$30
acima de 10 até 20 kg → R$60
acima de 20 kg → "Bagagem excedente"

Peça:

Peso da bagagem:
Exemplos
Peso: 4

Sem taxa.
Peso: 5

Sem taxa.
Peso: 7

Taxa: R$30
Peso: 10

Taxa: R$30
Peso: 15

Taxa: R$60
Peso: 20

Taxa: R$60
Peso: 21

Bagagem excedente.
🎯 Treino

Aqui quero que você olhe principalmente para:

5
10
20

e descubra onde cada limite pertence.
 */

const prompt = require('prompt-sync')()

let bagagem = Number(prompt('Peso da bagagem: '))


if (bagagem <= 5) {
    console.log(`Peso: ${bagagem} KG`)
    console.log(`Sem taxa.`)
    
}else if (bagagem <= 10) {
    console.log(`Peso: ${bagagem} KG`)
    console.log('Taxa: R$ 30')
    
}else if (bagagem <= 20) {
    console.log(`Peso: ${bagagem} KG`)
    console.log('Taxa: R$ 60')

}else{
    console.log(`Peso: ${bagagem} KG`)
    console.log('Bagagem excedente')

}
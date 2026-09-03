/**
 * Velocidade

Peça a velocidade de um veículo.

Classifique:

Até 40 km/h → Velocidade baixa

41 até 80 km/h → Velocidade moderada

81 até 120 km/h → Velocidade alta

Acima de 120 km/h → Velocidade muito alta
Exemplos:
30 → Velocidade baixa
60 → Velocidade moderada
100 → Velocidade alta
150 → Velocidade muito alta
 */

const prompt = require('prompt-sync')()


let velocidade = Number(prompt('Informe a velocidade: '))

if (velocidade <= 40) {
    console.log('Velocidade Baixa ')

}else if (velocidade <= 80) {
    console.log('Velocidade Moderada ')

}else if (velocidade <= 120) {
    console.log('Velocidade Alta ')

}else{
    console.log('Velocidade muito alta ')
}
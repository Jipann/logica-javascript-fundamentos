/**
 * Exercício 1 — Classificação de velocidade
Faixas e limites


Enunciado

Um sistema deve classificar a velocidade de um veículo:
- Menos de 30 km/h: velocidade muito baixa.
- De 30 até menos de 60 km/h: velocidade baixa.
- De 60 até menos de 90 km/h: velocidade moderada.
- De 90 até 120 km/h, incluindo 120: velocidade alta.
- Acima de 120 km/h: velocidade excessiva.
Peça a velocidade e exiba a classificação.

Saídas esperadas
Velocidade	Resultado
20	Velocidade muito baixa
30	Velocidade baixa
59	Velocidade baixa
60	Velocidade moderada
90	Velocidade alta
120	Velocidade alta
121	Velocidade excessiva
O que treinar: perceber que o else if só é testado quando a condição anterior é falsa. Será que você precisa escrever o limite inferior de cada faixa?
 */

const prompt = require('prompt-sync')()

let velocidade = Number(prompt('Informe a velocidade do veículo: '))

if (velocidade < 30) {
    console.log('Velocidade muito baixa! ')

}else if (velocidade < 60) {
    console.log('Velocidade baixa! ')

}else if(velocidade < 90){
    console.log('Velocidade moderada!')

}else if (velocidade <= 120) {
    console.log('Velocidade Alta!')

}else{
    console.log('Velocidade excessiva! ')
}
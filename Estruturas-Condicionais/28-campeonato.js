/**
 * Exercício 5 — Campeonato

Um time terminou o campeonato com determinada quantidade de pontos.

Peça:

Vitórias:
Empates:
Derrotas:

Cada:

Vitória = 3 pontos
Empate = 1 ponto
Derrota = 0 pontos

Calcule a pontuação.

Depois classifique:

30 pontos ou mais → "Excelente campanha"
20 até 29 → "Boa campanha"
10 até 19 → "Campanha regular"
abaixo de 10 → "Campanha ruim"
⚠️ Mas existe uma regra adicional:

Se o time tiver 10 ou mais vitórias E nenhuma derrota, mostre:

CAMPEÃO INVICTO!

Essa mensagem deve ter prioridade sobre as outras classificações.

🧠 Aqui você vai precisar pensar:

Qual if precisa vir primeiro?

Esse é o tipo de raciocínio que quero que você pratique.
 */

const prompt = require('prompt-sync')()

let vitorias = Number(prompt('Informe o número de vitórias: '))
let empates = Number(prompt('Informe o número de empates: '))
let derrotas = Number(prompt('Informe o número de derrotas: '))

let pontos = (empates * 1) + (vitorias * 3) + (derrotas * 0)

if ( vitorias >= 10 && derrotas === 0) {
    console.log('CAMPEÃO INVICTO! ')

}else if (pontos >=  30) {

    console.log('EXCELENTE CAMPANHA! ')

}else if (pontos >= 20 && pontos  <= 29) {
    console.log('BOA CAMPANHA! ')

}else if (pontos >= 10 && pontos <= 19) {
    console.log('CAMPANHA REGULAR')

}else{
    console.log('CAMPANHA RUIM! ')
}

console.log('Total de pontos: ', pontos)
/**
 * Exercício 5 — Classificação de partida

Uma empresa organiza partidas de futebol e quer classificar o resultado.

Peça:

Gols do time:
Gols do adversário:

Calcule a diferença usando:

Math.abs()

Regras:

diferença 0 → "Empate"
diferença de 1 até 2 → "Vitória apertada" ou "Derrota apertada"
diferença de 3 até 4 → "Vitória tranquila" ou "Derrota tranquila"
diferença 5 ou mais → "Goleada" ou "Derrota por goleada"
Atenção

Não basta saber a diferença.

Você também precisa descobrir:

O meu time ganhou ou perdeu?

Exemplos
Meu time: 2
Adversário: 2

Empate.
Meu time: 3
Adversário: 2

Vitória apertada.
Meu time: 1
Adversário: 3

Derrota apertada.
Meu time: 5
Adversário: 1

Vitória tranquila.
Meu time: 1
Adversário: 5

Derrota tranquila.
Meu time: 7
Adversário: 1

Goleada.
Meu time: 0
Adversário: 6

Derrota por goleada.
😈 Esse é bom para você

Porque você terá que separar:

1. empate?
2. ganhou ou perdeu?
3. qual é a faixa da diferença?

Aqui pode surgir if aninhado ou outra organização que você considerar melhor.
 */

const prompt = require('prompt-sync')()

let meuTime = Number(prompt('Gols do time: '))
let adversario = Number(prompt('Gols do adversário: '))


let diferenca = Math.abs(meuTime - adversario)


if (meuTime === adversario) {
    console.log('Empate.')
} else if (meuTime > adversario) {
    // Cenário onde o seu time venceu:
    if (diferenca <= 2) {
        console.log('Vitória apertada.')
    } else if (diferenca <= 4) {
        console.log('Vitória tranquila.')
    } else {
        console.log('Goleada.')
    }
} else {
    // Cenário onde o adversário venceu (derrota do seu time):
    if (diferenca <= 2) {
        console.log('Derrota apertada.')
    } else if (diferenca <= 4) {
        console.log('Derrota tranquila.')
    } else {
        console.log('Derrota por goleada.')
    }
}
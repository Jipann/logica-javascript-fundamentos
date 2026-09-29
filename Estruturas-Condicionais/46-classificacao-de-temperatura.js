/**
 * Exercício 1 — Classificação de temperatura

Uma estação meteorológica precisa classificar a temperatura.

Peça:

Temperatura atual:

Regras:

abaixo de 10°C → "Muito frio"
de 10°C até 19°C → "Frio"
de 20°C até 29°C → "Agradável"
de 30°C até 39°C → "Quente"
40°C ou mais → "Muito quente"
Exemplos esperados
Temperatura: 8

Muito frio
Temperatura: 15

Frio
Temperatura: 25

Agradável
Temperatura: 35

Quente
Temperatura: 42

Muito quente
🎯 O objetivo

Aqui quero que você treine somente faixas.

Preste atenção principalmente nos limites:

9
10
19
20
29
30
39
40
 */

// 1 quais sao os dados?
// temperatura
//2 quais sao as regras?
// temperaturas
// 3 onde existe E ? -> acho que tem uns 3 &&
// 4 onde exites ou ? 0
// 5 existe faixas ? -> sim, 
// 6 existe alguma regra especial que precisa ser analisada primeiro ? -> acho que não

const prompt = require('prompt-sync')()

let temperatura = Number(prompt('Informe a temperatura em ºC: '))

if (temperatura < 10) {
    console.log('Muito frio!')

}else if (temperatura < 20) {

    console.log('Frio!')

}else if (temperatura < 30) {
    console.log('Agradável')

}else if ( temperatura < 40) {
    console.log('Quente')

}else{
    console.log('Muito quente')
}


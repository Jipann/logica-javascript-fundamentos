/**
 * Exercício 4 — Classificação de corrida

Um atleta participou de uma corrida.

Peça:

Tempo em minutos
Idade

Classifique:

Adultos
até 30 minutos → Excelente
31 até 45 → Bom
acima de 45 → Precisa melhorar
Pessoas com menos de 18 anos

Se concluírem em até 40 minutos:

Excelente desempenho

Caso contrário:

Bom esforço

Exemplo
Idade: 25
Tempo: 28

Excelente

E:

Idade: 16
Tempo: 35

Excelente desempenho

Aqui quero que você pense bastante na ordem das regras.
 */


const prompt = require('prompt-sync')()


let tempo = Number(prompt('Tempo em minutos: '))
let idade = Number(prompt('Idade: '))


if (idade > 18) {
    if (tempo <= 30) {
        console.log('Excelente')

    }else if (tempo <= 31 || tempo <= 45) {
        console.log('Bom')

    }else{
        console.log('Precisa melhorar')
    }
}else if (idade < 18 && tempo <= 40) {
    console.log('Excelente desempenho')

}else{
    console.log('Bom esforço')
}

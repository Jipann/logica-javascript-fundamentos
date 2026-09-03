/**
 * Faixa etária

Peça a idade de uma pessoa e classifique:

0 até 12 → Criança

13 até 17 → Adolescente

18 até 59 → Adulto

60 ou mais → Idoso
Exemplos:
10 → Criança
15 → Adolescente
35 → Adulto
65 → Idoso
 */

const prompt = require('prompt-sync')()


let idade = Number(prompt('Informe a idade: '))

if (idade < 12) {
    console.log('Criança ')

}else if (idade < 18) {
    console.log('Adolescente')

}else if (idade <= 59) {
    console.log('Adulto')

}else{
    console.log('Idoso')
}
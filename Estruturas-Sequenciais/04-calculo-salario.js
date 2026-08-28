/**
salário mensal de um funcionário com base no total de 
horas trabalhadas e no valor recebido por hora.

Objetivo: saber o salário mensal do funcionario
 * 
 */

const prompt = require('prompt-sync')()

let  horasTrabalhadas = Number(prompt('Informe a quantidade de horas trabalhadas no mês:'))
let valorHoraTrabalhada = Number(prompt('Informe o valor da hora: '))

let salarioMensal = horasTrabalhadas * valorHoraTrabalhada

//// Dica de formatação monetária nativa:
// 'pt-BR' = idioma/país | style: 'currency' = formato moeda | currency: 'BRL' = Real (R$)
console.log(`O funcionário irá receber o valor de ${salarioMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
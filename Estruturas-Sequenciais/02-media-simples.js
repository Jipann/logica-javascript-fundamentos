/*Receba três notas de um aluno, 
Objetivo: calcular a média aritmética e exibir o valor formatado. */

const nota1 = 8.5
const nota2 = 7.0
const nota3 = 9.0

const CalculaMedia = (nota1 + nota2 + nota3) / 3

console.log(`A media final do aluno é = ${CalculaMedia.toFixed(2)}`)
/**
 * Peça três notas ao usuário.

    Calcule a média.
 */

const prompt = require('prompt-sync')()

let nota1 = Number(prompt('Informe a primeira nota: '))
let nota2 = Number(prompt('Informe a primeira nota 3 : '))
let nota3 = Number(prompt('Informe a primeira nota 3 : '))


let CalculaMedia = (nota1 + nota2 + nota3) / 3

console.log(`A media final do aluno é = ${CalculaMedia.toFixed(2)}`)
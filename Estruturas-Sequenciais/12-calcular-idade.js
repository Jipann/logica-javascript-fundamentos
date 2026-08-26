/**
 * receba um ano de nascimento e informe a idade 
 */
const prompt = require('prompt-sync')()

let anoAtual = Number(prompt('Digite ano atual: '))
let anoNacimento = Number(prompt('Digite ano do seu nascimento: '))

let idade = anoAtual - anoNacimento

console.log(`sua idade é = ${idade} anos`)



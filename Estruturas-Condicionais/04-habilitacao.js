const prompt = require('prompt-sync')()

console.log('------------------------------')
console.log('DEPARTAMENTO DE TRANSITO')
console.log('------------------------------')

let anoAtual = Number(prompt('Informe o ano atual:'))
let anoNascimento = Number(prompt('Informe o ano do seu nascimento:'))

let idade = anoAtual - anoNascimento

if (idade >= 18) {

    console.log('------ STATUS ------')
    console.log(`${idade} Anos`)
    console.log(' Apto para tirar a habilitação! ')
    console.log('------------------------------')
}else{
    console.log('------ STATUS ------')
    console.log(`${idade} Anos`)
    console.log('não está apto para fazer habilitação! ')
    console.log('------------------------------')
    
}
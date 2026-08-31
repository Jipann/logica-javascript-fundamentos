const prompt = require('prompt-sync')()

let anoNascimento = Number(prompt('Informe o ano do seu nascimento:'))
let anoAtual = Number(prompt('Informe o ano atual:'))

let idade = anoAtual - anoNascimento

if (idade >= 18) {
    console.log(' Apto para tirar a habilitação! ')

}else{
    console.log('não está apto para fazer habilitação! ')
}
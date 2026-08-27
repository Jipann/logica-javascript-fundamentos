const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número qualquer:'))

if (numero % 2 == 0) {
    console.log('O numero é par.')
}else{
    console.log(' O número é ímpar.')
}
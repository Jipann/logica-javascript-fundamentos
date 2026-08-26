/**
 * Declare um valor em Reais (BRL) e a cotação atual do Dólar (USD); 
 * calcule e exiba o valor convertido em Dólares.
 */
const prompt = require('prompt-sync')()

let valorEmReais = Number(prompt('Informe o valor em reais:'))
let valorEmDolares = Number(prompt('Informe a cotação do dolar:'))

let cambio = valorEmReais / valorEmDolares

console.log(`o montante de R$ ${valorEmReais} convertido para Dolar é ${cambio.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`)
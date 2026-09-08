/**
 * Exercício 6 — Compra parcelada

Uma loja possui estas regras:

Compra até R$ 500

Pode parcelar em até 3 vezes.

Compra acima de R$ 500

Pode parcelar em até 6 vezes.

O programa deve pedir:

Valor da compra:
Quantidade de parcelas:

E verificar se o parcelamento é permitido.
 */

const prompt = require('prompt-sync')()

let valorCompra = Number(prompt('Valor da compra: '))
let parcelas = Number(prompt('Quantidade de parcelas: '))

if (valorCompra <= 500 && parcelas <= 3) {  
console.log(`Compra: R$ ${valorCompra} `) 
console.log(`Número de parcelas: ${parcelas} `)
console.log('Parcelamento aprovado.')

}else if (valorCompra > 500 && parcelas <= 6) {
    console.log(`Compra: R$ ${valorCompra} `) 
    console.log(`Número de parcelas: ${parcelas} `)
    console.log('Parcelamento aprovado.')

}else{
    console.log(`Compra: R$ ${valorCompra} `) 
    console.log(`Número de parcelas: ${parcelas} `)
    console.log('Parcelamento não aprovado.')
}
/**
 * Exercício 4 — Desconto na loja

Uma loja dará desconto para o cliente se:

a compra for maior ou igual a R$ 200
E o cliente possuir cadastro na loja.

Peça:

Valor da compra:
Possui cadastro? (sim/não):

Se as duas condições forem verdadeiras:

Cliente ganhou desconto!

Caso contrário:

Cliente não ganhou desconto.
 */

const prompt = require('prompt-sync')()

let valorCompra = Number(prompt('Informe o valor da compra: '))
let possuiCadastro = String(prompt('Possui cadastro?(sim/nao): '))

if (valorCompra >= 200 && possuiCadastro === 'sim') {
    console.log('Cliente ganhou desconto! ')
    
}else{
    console.log('Cliente não ganhou desconto! ')
}
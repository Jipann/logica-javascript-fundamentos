/**
 * Exercício 7 — Frete grátis

Uma loja oferece frete grátis quando o cliente atende uma das condições:

compra de R$ 150 ou mais
OU
cliente é assinante.

Peça:

Valor da compra:
É assinante? (sim/não):

Exemplo:

Valor: 80
Assinante: sim

Frete grátis!

Outro:

Valor: 200
Assinante: não

Frete grátis!

E:

Valor: 80
Assinante: não

Frete pago.
 */

const prompt = require('prompt-sync')()

let valorcompra = Number(prompt('Informe o valor da compra: '))
let vip = String(prompt('É assinante? (sim/nao): '))

if (valorcompra >= 150 || vip === 'sim') {
    console.log('Valor:',valorcompra)
    console.log('Assinante:',vip)
    console.log('Frete grátis! ')
    
}else{
    console.log('Valor:',valorcompra)
    console.log('Assinante:',vip)
    console.log('Frete pago! ')
}
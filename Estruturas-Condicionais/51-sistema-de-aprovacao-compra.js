/**
 * Exercício 6 — Desafio: sistema de aprovação de compra

Agora vamos fazer um exercício mais próximo dos que te deixaram perdido.

Uma empresa quer aprovar compras de seus clientes.

Peça:

Valor da compra:
Forma de pagamento:
Cliente VIP? (sim/não):
Possui cadastro ativo? (sim/não):

Formas de pagamento:

1 → Pix
2 → Cartão
3 → Boleto

Use switch.

Regras
Pix

A compra será aprovada quando:

cadastro ativo
E valor ≥ R$100
Cartão

A compra será aprovada quando:

cadastro ativo
E valor ≥ R$200

OU

cliente VIP
E valor ≥ R$100
Boleto

A compra será aprovada quando:

cadastro ativo
E valor ≥ R$300
E não é VIP
Regra geral

Se o valor for menor que R$50, a compra deve ser recusada independentemente da forma de pagamento.
 */

const prompt = require('prompt-sync')()

const valorCompra = Number(prompt('Valor da compra: '))

console.log('[1] PIX')
console.log('[2] CARTÃO')
console.log('[3] BOLETO')

const opPagamento = Number(prompt('Escolha a forma de pagamento: '))
const clienteVip = prompt('Cliente VIP? (sim/nao): ')
const cadastro = prompt('Possui cadastro ativo? (sim/nao): ')

if (valorCompra < 50) {

    console.log('Compra recusada!')

} else {

    switch (opPagamento) {

        case 1:

            if (cadastro === 'sim' && valorCompra >= 100) {
                console.log('Compra aprovada.')
            } else {
                console.log('Compra não aprovada.')
            }

            break

        case 2:

            if (
                (cadastro === 'sim' && valorCompra >= 200) ||
                (clienteVip === 'sim' && valorCompra >= 100)
            ) {
                console.log('Compra aprovada.')
            } else {
                console.log('Compra não aprovada.')
            }

            break

        case 3:

            if (cadastro === 'sim' && valorCompra >= 300 && clienteVip === 'nao') {
                console.log('Compra aprovada.')
            } else {
                console.log('Compra não aprovada.')
            }

            break

        default:

            console.log('Opção inválida!')
    }
}

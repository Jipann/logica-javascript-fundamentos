/**
 * Exercício 2 — Forma de pagamento

Uma loja aceita pagamento à vista somente através de:

Pix
Dinheiro

Peça ao usuário a forma de pagamento.

Se for Pix OU dinheiro, mostre:

Pagamento à vista aceito.

Caso contrário:

Forma de pagamento não aceita.
 */

const prompt = require('prompt-sync')()

let pagamento = String(prompt('Qual a forma de pagamento? [PIX] OU [DINHEIRO]:'))

if (pagamento === 'pix' || pagamento === 'dinheiro') {
    console.log('Pagamento à vista aceito.')

}else{
    console.log('Forma de pagamento não aceito.')
}

// PODERIA SER DESTA FORMA TAMBEM:
console.log('pagamento por pix digite[1] pagamento em dinheiro digite[2]:')
let opcaopg = Number(prompt('Por favor, escolha uma opção:'))

switch (opcaopg) {
    case 1:
        console.log('Pagamento à vista aceito.')
        break

    case 2:
        console.log('Pagamento à vista aceito.')
        break

    default:
        console.log('Opção inválida! Digite apenas 1, 2')
        break
}

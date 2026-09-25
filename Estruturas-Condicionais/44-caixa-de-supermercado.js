/**
 * Exercício 7 — Caixa de supermercado

Agora quero um exercício mais "cara de sistema real".

O cliente informa:

Valor da compra
Forma de pagamento

Opções:

[1] Pix
[2] Dinheiro
[3] Cartão
Regras
Pix

Tem 10% de desconto.

Dinheiro

Tem 5% de desconto, mas somente para compras de R$ 200 ou mais.

Cartão
compras de até R$ 300 → preço normal
acima de R$ 300 → 5% de desconto

Use switch para a forma de pagamento.

Dentro de cada case, você pode usar if.

Mostre:
Valor original:
Forma de pagamento:
Desconto:
Valor final:
😈 Aqui quero que você pense

Você terá algo como:

switch
   ↓
qual pagamento?

case 1
   ↓
regra do Pix

case 2
   ↓
regra do dinheiro

case 3
   ↓
regra do cartão

Esse é um exercício muito bom para praticar switch + if.
 */


const prompt = require('prompt-sync')()


let compra = Number(prompt('Informe o valor da compra: '))
console.log('[1] Pix\n[2] Dinheiro\n[3] Cartão')
let pagamento = Number(prompt('Informe a forma de pagamento: '))
let desconto = 0
let novoValor = 0
let percentual = 0

switch (pagamento) {
    case 1:
        desconto = 10/100
        percentual = desconto * 100
        desconto = compra * (desconto)
        novoValor = compra - desconto
       
        console.log(`Valor original ${compra}:`)
        console.log('Forma de pagamento: Pix')
        console.log(`Desconto: ${percentual}% `)
        console.log('R$', novoValor)
        break;

    case 2:
        if (compra >= 200) {
            desconto = 5/100
            desconto = 5/100
            percentual = desconto * 100
            desconto = compra * (desconto)
            novoValor = compra - desconto
            console.log(`Valor original ${compra}:`)
            console.log('Forma de pagamento: Dinheiro')
            console.log(`Desconto: ${percentual}% `)
            console.log('R$', novoValor)

        }else{
            console.log(`Valor original ${compra}:`)
            console.log('Forma de pagamento: Dinheiro')
            console.log(`Desconto: ${percentual}% `)
            console.log('R$', compra)
        }
        
    
        break;
    case 3:
        if (compra > 300) {
            desconto = 5/100
            desconto = 5/100
            percentual = desconto * 100
            desconto = compra * (desconto)
            novoValor = compra - desconto
            console.log(`Valor original ${compra}:`)
            console.log('Forma de pagamento: Cartão')
            console.log(`Desconto: ${percentual}% `)
            console.log('R$', novoValor)

        }else{
            console.log(`Valor original ${compra}:`)
            console.log('Forma de pagamento: Cartão')
            console.log(`Desconto: ${percentual}% `)
            console.log('R$',compra)
        }
        
        break;

    default:
        console.log('Opção inválida! ')

        break;
}

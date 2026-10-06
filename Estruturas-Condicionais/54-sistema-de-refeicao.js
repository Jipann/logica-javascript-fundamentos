/**
 * Exercício 3 — Sistema de refeições

Um restaurante possui:

[1] Café da manhã
[2] Almoço
[3] Jantar

Use switch.

Regras

Café da manhã

pedido até R$50 → "Pedido normal"
acima de R$50 → "Pedido especial"

Almoço

valor mínimo de R$30
E cliente precisa ser VIP

Jantar

valor mínimo de R$50
OU cliente VIP

Peça:

Tipo de refeição:
Valor do pedido:
Cliente VIP? (sim/não):
Exemplos
Opção: 1
Valor: 40
VIP: não

Pedido normal.
Opção: 1
Valor: 70
VIP: não

Pedido especial.
Opção: 2
Valor: 40
VIP: sim

Pedido aprovado.
Opção: 2
Valor: 40
VIP: não

Pedido não aprovado.
Opção: 3
Valor: 30
VIP: sim

Pedido aprovado.
Opção: 3
Valor: 30
VIP: não

Pedido não aprovado.
🎯 Treino

Aqui temos:

switch
+
if
+
&&
+
||
 */

const prompt = require('prompt-sync')()

console.log('[1]Café da manhã\n[2]Almoço\n[3]Jantar')
let tipoRefeicao = Number(prompt('Tipo de refeição: '))
let valorPedido = Number(prompt('Valor do pedido: '))
let clienteVip = (prompt('Cliente VIP(sim/nao)? '))

switch (tipoRefeicao) {
    case 1:
        if (valorPedido <= 50) {
            console.log('Pedido normal! ')

        }else{
            console.log('Pedido especial! ')
        }

        break;

    case 2:
        if (valorPedido >= 30 && clienteVip === 'sim') {
           console.log(`Opção: ${tipoRefeicao}`)
           console.log(`Valor: ${valorPedido}`)
           console.log(`VIP: ${clienteVip}`)
           console.log('Pedido aprovado! ')

        }else{
            console.log(`Opção: ${tipoRefeicao}`)
            console.log(`Valor: ${valorPedido}`)
            console.log(`VIP: ${clienteVip}`)
            console.log('Pedido não aprovado! ')
        }
        
        break;

    case 3:
        if (valorPedido >= 50 || clienteVip === 'sim') {
           console.log(`Opção: ${tipoRefeicao}`)
           console.log(`Valor: ${valorPedido}`)
           console.log(`VIP: ${clienteVip}`)
           console.log('Pedido aprovado! ')

        }else{
            console.log(`Opção: ${tipoRefeicao}`)
            console.log(`Valor: ${valorPedido}`)
            console.log(`VIP: ${clienteVip}`)
            console.log('Pedido não aprovado! ')
        }
        
        break;

    default:
        console.log('Opção inválida! ')
        break;
}
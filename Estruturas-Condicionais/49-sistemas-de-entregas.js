/**
 * Exercício 4 — Sistema de entrega

Uma empresa possui três tipos de entrega:

1 → Normal
2 → Expressa
3 → Agendada

Use switch.

Regras
Normal

Aceita pedidos de qualquer valor.

Expressa

Só aceita se:

valor da compra for R$100 ou mais
E a região for "centro"
Agendada

Só aceita se:

valor da compra for R$200 ou mais
E o cliente for VIP.

Peça:

Tipo de entrega:
Valor da compra:
Região (centro/bairro):
Cliente é VIP? (sim/não):
Exemplos
Tipo: 1
Compra: 50
Região: bairro
VIP: não

Entrega normal aprovada.
Tipo: 2
Compra: 150
Região: centro
VIP: não

Entrega expressa aprovada.
Tipo: 2
Compra: 150
Região: bairro
VIP: não

Entrega expressa não aprovada.
Tipo: 3
Compra: 250
Região: bairro
VIP: sim

Entrega agendada aprovada.
🎯 Aqui você vai praticar:
switch
+
if
+
&&

Sem colocar tudo em uma condição monstruosa. 😂
 */

const prompt = require('prompt-sync')()

console.log('[1]Normal \n[2]Expressa\n[3]Agendada ')
let opcao = Number(prompt('Escolha uma opção de entrega:'))
let valorCompra = Number(prompt('Valor da compra: '))
let regiao = (prompt('informe a região (centro/bairro): '))
let clienteVip =(prompt('Cliente é VIP? (sim/não): '))

switch (opcao) {
    case 1:
    console.log(`Tipo: ${opcao}`)
    console.log(` Compra: ${valorCompra}`)
    console.log(`Região:${regiao}`)
    console.log(`VIP:${clienteVip} `)
    console.log('Entrega normal aprovada.')
        
        break;

    case 2:
        if (valorCompra >= 100 && regiao === 'centro') {
            console.log(`Tipo: ${opcao}`)
            console.log(` Compra: ${valorCompra}`)
            console.log(`Região:${regiao}`)
            console.log(`VIP:${clienteVip} `)
            console.log('Entrega Expressa aprovada.')
            
        }else{

            console.log(`Tipo: ${opcao}`)
            console.log(` Compra: ${valorCompra}`)
            console.log(`Região:${regiao}`)
            console.log(`VIP:${clienteVip} `)
            console.log('Entrega Expressa não aprovada.')
        }
    
        break;

        case 3:
        if (valorCompra >= 200 && clienteVip === 'sim') {
            console.log(`Tipo: ${opcao}`)
            console.log(` Compra: ${valorCompra}`)
            console.log(`Região:${regiao}`)
            console.log(`VIP:${clienteVip} `)
            console.log('Entrega agendada aprovada.')
            
        }else{

            console.log(`Tipo: ${opcao}`)
            console.log(` Compra: ${valorCompra}`)
            console.log(`Região:${regiao}`)
            console.log(`VIP:${clienteVip} `)
            console.log('Entrega agenda não aprovada.')
        }
    
    
        break;

    default:
        console.log('Opção inválida!')

        break;
}
/**
 * Exercício 6 — Desafio: sistema de entrega

Uma empresa faz entregas seguindo estas regras.

O pedido será aceito quando:

Regra A
valor da compra ≥ R$150
E região é "centro"

OU

Regra B
valor da compra ≥ R$250
E região é "bairro"
E cliente é assinante

Além disso:

pedidos com valor menor que R$50 nunca são aceitos.

Peça:

Valor da compra
Região (centro/bairro)
Cliente é assinante? (sim/não)
Exemplos
Compra: 180
Região: centro
Assinante: não

→ Entrega aceita
Compra: 250
Região: bairro
Assinante: sim

→ Entrega aceita
Compra: 250
Região: bairro
Assinante: não

→ Entrega não aceita
Compra: 40
Região: centro
Assinante: sim

→ Entrega não aceita
 */


const prompt = require('prompt-sync')()


let valorCompra = Number(prompt('Valor da compra: '))
let regiao = prompt('Região (centro/bairro)? ')
let assinante = prompt('Cliente é assinante? (sim/não)? ')

if (valorCompra < 50) {
        console.log(`Compra: ${valorCompra}`)
        console.log(`Região: ${regiao}`)
        console.log(`Assinante: ${assinante}`)
        console.log('→ Entrega não aceita')

}else if ((valorCompra >= 150 && regiao === 'centro')|| (valorCompra >=250 && regiao === 'bairro' && assinante === 'sim')) {
        console.log(`Compra: ${valorCompra}`)
        console.log(`Região: ${regiao}`)
        console.log(`Assinante: ${assinante}`)
        console.log('→ Entrega aceita')
    }else{
        console.log(`Compra: ${valorCompra}`)
        console.log(`Região: ${regiao}`)
        console.log(`Assinante: ${assinante}`)
        console.log('→ Entrega não aceita')
    }

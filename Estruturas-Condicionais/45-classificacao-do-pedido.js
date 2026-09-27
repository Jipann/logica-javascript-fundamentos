/**
 * Exercício 8 — Desafio final: classificação de pedido

Esse é o mais difícil da lista.

Uma empresa recebe pedidos de clientes.

Peça:

Valor do pedido:
Quantidade de itens:
Cliente é VIP? (sim/não)
Região:

Regiões:

centro
bairro
interior
Regras de aprovação

O pedido pode receber frete grátis quando:

Regra A
valor >= R$ 300
E região é centro
OU
Regra B
valor >= R$ 500
E região é bairro
E cliente VIP
OU
Regra C
quantidade de itens >= 10
E cliente VIP
E região é centro ou bairro
🚨 Mas existe uma regra prioritária:

Se o valor do pedido for menor que R$ 100, nunca há frete grátis.

Exemplos
Valor: 350
Itens: 3
VIP: não
Região: centro

→ Frete grátis

Porque:

350 >= 300
E
centro
Valor: 500
Itens: 2
VIP: sim
Região: bairro

→ Frete grátis
Valor: 200
Itens: 12
VIP: sim
Região: interior

→ Não tem frete grátis

Porque a Regra C exige centro ou bairro.

Valor: 80
Itens: 20
VIP: sim
Região: centro

→ Não tem frete grátis

Porque existe a regra:

valor < 100
→ nunca
🧠 Uma coisa que quero que você faça nos exercícios 5, 7 e 8

Não vá direto para o código.

Primeiro escreva assim:

REGRA 1:
...

REGRA 2:
...

REGRA 3:
...

E, quando houver combinação:

(REGRA A) || (REGRA B)

ou:

(REGRA A && REGRA B)

No exercício 8, por exemplo, você pode pensar:

Regra A:
(valor >= 300 && região === 'centro')

Regra B:
(valor >= 500 && região === 'bairro' && vip === 'sim')

Regra C:
(quantidade >= 10 && vip === 'sim' && ...)
 */

const prompt = require('prompt-sync')()

let valorPedido = Number(prompt('Valor do pedido: '))
let itens = Number(prompt('Quantidade de itens: '))
let clube = prompt('Cliente é VIP (sim/nao) ? ')
let regiao = prompt('Região: ')

if (valorPedido < 100) {
    console.log(`Valor: ${valorPedido}`)
    console.log(`Itens: ${itens}`)
    console.log(`Vip: ${clube}`)
    console.log(`Região: ${regiao}`)
    console.log('→ Não tem frete grátis')

}else if ((valorPedido <= 300 && valorPedido >= 500 && regiao ==='centro')|| (regiao === ' bairro' && clube === 'sim')){

    console.log(`Valor: ${valorPedido}`)
    console.log(`Itens: ${itens}`)
    console.log(`Vip: ${clube}`)
    console.log(`Região: ${regiao}`)
    console.log('→ Frete grátis')

}else if((itens >= 10 && clube === 'sim' && regiao === 'centro') || regiao === 'bairro'){

    console.log(`Valor: ${valorPedido}`)
    console.log(`Itens: ${itens}`)
    console.log(`Vip: ${clube}`)
    console.log(`Região: ${regiao}`)
    console.log('→ Frete grátis')

}else{
    console.log(`Valor: ${valorPedido}`)
    console.log(`Itens: ${itens}`)
    console.log(`Vip: ${clube}`)
    console.log(`Região: ${regiao}`)
    console.log('→ Não tem frete grátis')
    
}
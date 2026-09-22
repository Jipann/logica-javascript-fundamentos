/**
 * Exercício 1 — Conta de energia

Uma companhia cobra de acordo com o consumo mensal:

Até 100 kWh → R$ 0,80 por kWh
Acima de 100 até 200 kWh → R$ 1,00 por kWh
Acima de 200 kWh → R$ 1,30 por kWh

Peça:

Consumo de energia em kWh:

Calcule o valor da conta.

Exemplos
Consumo: 80
Valor: R$ 64,00
Consumo: 150
Valor: R$ 150,00
Consumo: 250
Valor: R$ 325,00
🎯 Treino

Aqui quero que você preste atenção principalmente em:

<=
>

e na organização dos else if.
 */


const prompt = require('prompt-sync')()

let consumo = Number(prompt('Informe o consumo de energia: '))

if (consumo <= 100) {
    console.log(`Consumo: ${consumo}`)
    consumo = consumo * 0.8
    console.log(`Valor: ${consumo.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)

}else if (consumo > 100 && consumo <= 200) {
    console.log(`Consumo: ${consumo}`)
    consumo = consumo * 1
    console.log(`Valor: ${consumo.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)

}else{
    console.log(`Consumo: ${consumo}`)
    consumo = consumo * 1.3
    console.log(`Valor: ${consumo.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)
}



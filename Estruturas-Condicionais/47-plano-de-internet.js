/**
 * Exercício 2 — Plano de internet

Uma empresa possui três planos:

1 → Básico
2 → Intermediário
3 → Premium

Use switch.

Agora existem regras dentro de cada plano.

Plano Básico

Permite até 2 dispositivos.

Plano Intermediário

Permite até 5 dispositivos.

Plano Premium

Permite até 10 dispositivos.

Peça:

Escolha o plano:
Quantidade de dispositivos:

Se ultrapassar o limite, mostre:

Limite de dispositivos excedido.

Caso contrário:

Plano aprovado.
Exemplos
Plano: 1
Dispositivos: 2

Plano aprovado.
Plano: 1
Dispositivos: 4

Limite de dispositivos excedido.
Plano: 3
Dispositivos: 8

Plano aprovado.
🎯 Aqui quero praticar:

switch + if.

E quero que você perceba:

o switch decide qual plano; o if decide se aquela quantidade é permitida.
 */

// 1 quais sao os dados?
// plano e numero de dispositivo
//2 quais sao as regras?
// plano basico(2), intermediario(5) e premiu(10)
// 3 onde existe E ? -> 
// 4 onde exites ou ? 
// 5 existe faixas ? -> sim 
// 6 existe alguma regra especial que precisa ser analisada primeiro ? -> acho que não

const prompt = require('prompt-sync')()

console.log(' 1 → Básico\n 2 → Intermediário\n 3 → Premium')
let plano = Number(prompt('Escolha o plano:'))
let dispositivos = Number(prompt('Qauntidade de dispositivos: '))

switch (plano) {
    case 1:
        if (dispositivos <= 2) {// - ao 2
            console.log(`Plano:${plano}`)
            console.log(`Dispositivos:${dispositivos}\n`)
            console.log('Plano Aprovado')

        }else{
            console.log('Limite de dispositivos excedido.')
        }

        break;
    case 2:
        if (dispositivos <=5) { // aqui ele vai do 2 ate 5
            console.log(`Plano:${plano}`)
            console.log(`Dispositivos:${dispositivos}\n`)
            console.log('Plano aprovado!')

        }else{
            console.log('Limite de dispositivos excedido')
        }
        break;

    case 3:
        if (dispositivos <= 10) { // aqui do 5 ate o 10
            console.log(`Plano:${plano}`)
            console.log(`Dispositivos:${dispositivos}\n`)
            console.log('Plano aprovado!')

        }else{
            console.log('Limite de dispositivo excedido.')
        }

        break;

    default:
        console.log('Opção inválida!')
        break;
}



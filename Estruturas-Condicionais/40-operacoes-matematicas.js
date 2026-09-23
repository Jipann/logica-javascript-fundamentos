/**
 * Exercício 3 — switch de operações

Crie uma calculadora simples.

Mostre:

[1] Somar
[2] Subtrair
[3] Multiplicar
[4] Dividir

Peça dois números e a opção.

Use switch.

Regras

Se escolher 1:

número1 + número2

2:

número1 - número2

3:

número1 * número2

4:

número1 / número2
Mas tem uma regra especial:

Se o usuário tentar dividir por zero:

Não é possível dividir por zero.

Aqui eu quero que você use switch + if.
 */

const prompt = require('prompt-sync')()

let numero1 = Number(prompt("informe o primeiro número: "))
let numero2 = Number(prompt("informe o primeiro número: "))
console.log('[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir')
let opcao = Number(prompt('Escolha uma opção: '))

switch (opcao) {
    case 1:
        console.log('Soma =', numero1 + numero2)
        break;
     case 2:
        console.log('Subtração =', numero1 - numero2)
        break;
    case 3:
        console.log('Multiplicação =', numero1 * numero2)
        break;

    case 4:
        if (numero1 === 0 || numero2 === 0) {
            console.log('Não é possivel dividir por zero')
        }else{
             console.log('Divisão =', numero1 / numero2)
        }
       
        break;
    
    default:
        console.log('Operação inválida')
        break;
}
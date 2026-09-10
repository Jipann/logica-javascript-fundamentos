/**
 * Exercício 3 — Analisador de número

Peça um número inteiro.

Seu programa deve informar:

se é positivo, negativo ou zero;
depois, se for diferente de zero, dizer se é par ou ímpar.
Exemplo
Número: 8

Positivo
Par

Outro:

Número: -7

Negativo
Ímpar

Outro:

Número: 0

Zero
 */

const prompt =require('prompt-sync')()

let numero = Number(prompt('Informe um numero inteiro: '))

if (numero > 0) {
    console.log('Positivo! ')
    if (numero % 2 === 0) {
        console.log('Par')
    }else{
        console.log('Ímpar')
    }

}else if (numero < 0 && numero % 2 !== 0) {
    console.log('Negativo!')
    console.log('Ímpar')

}else{
    console.log('Zero')
}

// não consegui pensar em uma solução para mostrar o numero 
// quando ele for exemplo -7 mostrar que ele é um numero impar

/**
 * tentei divir o programa da seguinte forma primeiro eu 
 * encontrei se o numero era positivo negativo ou zero 
 * 
 * PERGUNTAR PARA CHAT COMO TRATAR O CASO EXEMPLO -8 E NEGATIVO 
 * SO QUE E UM NUMERO PAR
 */


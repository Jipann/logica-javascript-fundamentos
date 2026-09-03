/**
 * Exercício 1 — Entrada no cinema

Crie um programa que peça a idade de uma pessoa.

A pessoa poderá entrar em uma sessão especial se:

tiver 18 anos ou mais
E tiver no máximo 60 anos

Caso contrário, informe que ela não pode entrar.

Exemplos:
Digite sua idade: 25
Pode entrar na sessão.
Digite sua idade: 65
Não pode entrar na sessão.
 */

const prompt = require('prompt-sync')()

let idade = Number(prompt('Informe sua idade: '))

if (idade >= 18 && idade <= 60) {
    console.log('Pode entrar na sessão.')
    
}else{
    console.log('Não pode entrar na sessão.')
}
/**
 * Exercício 5 — Entrada no evento

Um evento possui duas formas de permitir a entrada:

Regra 1

Pessoa com 18 anos ou mais

OU

Regra 2

Pessoa com 16 ou 17 anos acompanhada de um responsável.

Peça:

Digite sua idade:
Está acompanhado? (sim/não):

Exemplos:

Idade: 20
Acompanhado: não

Pode entrar.
Idade: 17
Acompanhado: sim

Pode entrar.
Idade: 17
Acompanhado: não

Não pode entrar.
 */

const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite sua idade: '))
let acompanhado = String(prompt('Sim/não ? '))


if (idade >= 18) {
    console.log('Idade:', idade)
    console.log('Acompanhado:', acompanhado)
    console.log('Pode Entrar!')

}
else if ((idade == 16 || idade == 17) && (acompanhado === 'sim') ){
    console.log('Idade:', idade)
    console.log('Acompanhado:', acompanhado)
    console.log('Pode entrar!')

}else{
    console.log('Idade:', idade)
    console.log('Acompanhado:', acompanhado)
    console.log('Não pode entrar!')
}
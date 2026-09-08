/**
 * Exercício 8 — O desafio da semana

Agora vamos juntar && + || + if / else if.

Uma empresa está contratando pessoas para uma vaga.

A pessoa poderá ser aprovada para a entrevista se:

Situação 1

Tiver 18 anos ou mais E possuir experiência.

OU

Situação 2

Tiver menos de 18 anos, mas estiver fazendo um curso profissionalizante.

Peça:

Digite sua idade:
Possui experiência? (sim/não):
Está fazendo curso profissionalizante? (sim/não):
Exemplos
Idade: 25
Experiência: sim
Curso: não

Pode participar da entrevista.
Idade: 25
Experiência: não
Curso: não

Não pode participar.
Idade: 17
Experiência: não
Curso: sim

Pode participar da entrevista
 */

const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite sua idaade:'))
let experiencia = String(prompt('Possui experiência? (sim/não): '))
let curso = String(prompt('Está fazendo curso profissionalizante? (sim/não):'))

if (idade >= 18 && experiencia === 'sim') {
    console.log('Idade:', idade)
    console.log('Experiência:', experiencia)
    console.log('Curso:', curso)

    console.log('Pode participar da entrevista.')

}else if (idade < 18 && curso ==='sim') {
    console.log('Idade:', idade)
    console.log('Experiência:', experiencia)
    console.log('Curso:', curso)

    console.log('Pode participar da entrevista.')
}
else{
    console.log('Idade:', idade)
    console.log('Experiência:', experiencia)
    console.log('Curso:', curso)

    console.log('Não pode participar.')

}
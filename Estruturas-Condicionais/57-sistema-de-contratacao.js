/**
 *Exercício 6 — Desafio: sistema de contratação

Uma empresa está analisando candidatos.

Peça:

Idade:
Experiência em anos:
Possui curso técnico? (sim/não):
Possui indicação? (sim/não):
Regras

Um candidato pode ser aprovado por uma das duas situações.

Regra A
experiência de 3 anos ou mais
E idade de 21 anos ou mais
OU
Regra B
possui curso técnico
E possui indicação
E idade de pelo menos 18 anos
Regra especial

Candidatos com menos de 18 anos nunca podem ser aprovados.

Exemplos
Idade: 25
Experiência: 4
Curso: não
Indicação: não

Aprovado.

Porque:

idade >= 21 ✅
experiência >= 3 ✅
Idade: 20
Experiência: 1
Curso: sim
Indicação: sim

Aprovado.

Porque atende à Regra B.

Idade: 17
Experiência: 10
Curso: sim
Indicação: sim

Não aprovado.

Porque existe a regra geral:

menor de 18 → nunca
Idade: 25
Experiência: 1
Curso: sim
Indicação: não

Não aprovado.

Porque:

Regra A → ❌
Regra B → ❌
Idade: 30
Experiência: 5
Curso: sim
Indicação: sim

Aprovado.

Atende à Regra A. Não precisa da Regra B.
 */

const prompt = require('prompt-sync')()

// dados que o usuario ira informar:
let idade = Number(prompt('Idade: '))
let experiencia = Number(prompt('Experiência em anos: '))
let cursoTecnico = prompt('Possui curso técnico(sim/nao)? ')
let indicacao = prompt('Possui indicação(sim/nao)? ')


// Regra geral:
if (idade < 18) {
    console.log(`Idade:${idade}`)
    console.log(`Experiência: ${experiencia}`)
    console.log(`Curso: ${cursoTecnico}`)
    console.log(`Indicação: ${indicacao}`)
    console.log('Não aprovado')

}else if ((experiencia >= 3 && idade >= 21) || (cursoTecnico === 'sim' && indicacao === 'sim' && idade >= 18)) {
    console.log(`Idade:${idade}`)
    console.log(`Experiência: ${experiencia}`)
    console.log(`Curso: ${cursoTecnico}`)
    console.log(`Indicação: ${indicacao}`)
    console.log('Aprovado')

}else{
    console.log(`Idade:${idade}`)
    console.log(`Experiência: ${experiencia}`)
    console.log(`Curso: ${cursoTecnico}`)
    console.log(`Indicação: ${indicacao}`)
    console.log('Não Aprovado')
}
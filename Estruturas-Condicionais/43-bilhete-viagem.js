/**
 * Exercício 6 — Bilhete de viagem

Uma empresa de ônibus cobra:

criança até 11 anos → R$ 20
adolescente de 12 a 17 → R$ 30
adulto de 18 a 59 → R$ 50
idoso 60 ou mais → R$ 25

Peça:

Idade:
Possui carteirinha de estudante? (sim/não)
Regra adicional

Adolescentes de 12 a 17 anos com carteirinha pagam R$ 20.

Todos os outros usam a tarifa normal de sua faixa.

Exemplos
Idade: 10
Carteirinha: não
→ R$ 20
Idade: 15
Carteirinha: sim
→ R$ 20
Idade: 15
Carteirinha: não
→ R$ 30
Idade: 65
Carteirinha: sim
→ R$ 25

Aqui você vai precisar pensar:

qual pergunta vem primeiro?
 */

const prompt = require('prompt-sync')()

const idade = Number(prompt('Informe a idade: '))
const carteirinha = prompt('Possui carteirinha de estudante? (sim/nao): ')

if (idade <= 11) {

    console.log('Criança → paga R$ 20')

} else if (idade >= 12 && idade <= 17) {

    if (carteirinha === 'sim') {
        console.log('Adolescente com carteirinha → paga R$ 20')
    } else {
        console.log('Adolescente sem carteirinha → paga R$ 30')
    }

} else if (idade >= 18 && idade <= 59) {

    console.log('Adulto → paga R$ 50')

} else {

    console.log('Idoso → paga R$ 25')
}

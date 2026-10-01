/**
 * Exercício 5 — Classificação de veículo

Uma empresa quer classificar veículos para uma viagem.

Peça:

Quantidade de passageiros:
Quantidade de bagagens:
Possui autorização especial? (sim/não):
Regras
Veículo pequeno

Pode transportar:

até 4 passageiros
até 4 bagagens
Veículo médio

Pode transportar:

de 5 até 7 passageiros
até 7 bagagens
Veículo grande

Pode transportar:

8 ou mais passageiros

Mas existe uma regra adicional:

Se houver mais de 7 passageiros, o veículo só será considerado adequado se tiver autorização especial.

Exemplos
Passageiros: 4
Bagagens: 3
Autorização: não

Veículo pequeno.
Passageiros: 6
Bagagens: 5
Autorização: não

Veículo médio.
Passageiros: 9
Bagagens: 10
Autorização: sim

Veículo grande autorizado.
Passageiros: 9
Bagagens: 10
Autorização: não

Veículo não autorizado.
😈 Esse já exige mais atenção.

Você terá que pensar:

Onde termina uma faixa e começa a outra?

E:

Quando a autorização passa a importar?

Antes do código, escreva as faixas.
 */

const prompt = require('prompt-sync')()


let qtdPAssageiros = Number(prompt('Quantidade de passageiros: '))
let qtdBagagens = Number(prompt('Quantidade de bagagens: '))
let autorizacao = (prompt('Possui autorização especial (sim/nao)? '))

if (qtdPAssageiros > 7) {
    
    if ( autorizacao === 'sim') {
        console.log(`Passageiros: ${qtdPAssageiros}`)
        console.log(`Bagagens: ${qtdBagagens}`)
        console.log(`Autorização: ${autorizacao} `)
        console.log('Veículo grande autorizado.')
    }else{
        console.log(`Passageiros: ${qtdPAssageiros}`)
        console.log(`Bagagens: ${qtdBagagens}`)
        console.log(`Autorização: ${autorizacao} `)
        console.log('Veículo não autorizado.')
    }
    

}else if (qtdPAssageiros <= 4 && qtdBagagens <= 4) {
        console.log(`Passageiros: ${qtdPAssageiros}`)
        console.log(`Bagagens: ${qtdBagagens}`)
        console.log(`Autorização: ${autorizacao} `)
        console.log('Veículo pequeno.')

}else if (qtdPAssageiros <=7 && qtdBagagens <= 7) {
        console.log(`Passageiros: ${qtdPAssageiros}`)
        console.log(`Bagagens: ${qtdBagagens}`)
        console.log(`Autorização: ${autorizacao} `)
        console.log('Veículo médio.')

}else{
        console.log(`Passageiros: ${qtdPAssageiros}`)
        console.log(`Bagagens: ${qtdBagagens}`)
        console.log(`Autorização: ${autorizacao} `)
        console.log('Veículo Grande.')


}
/**
 * Exercício 5 — Sistema de avaliação de produto

Uma loja recebeu uma avaliação de 0 a 10.

Peça:

Nota:
Quantidade de vendas:

Classificação:

Excelente
nota >= 9
E vendas >= 100
Bom
nota >= 7
E vendas >= 50
Regular
nota >= 5
Ruim
abaixo de 5
⚠️ Regra importante

A classificação Excelente tem prioridade.

Por exemplo:

Nota: 9,5
Vendas: 30

Não é Excelente, porque não atingiu as duas condições.

Nesse caso, entra na próxima categoria possível.

🎯 Aqui você vai treinar:

&& + faixas + prioridade.
 */

const prompt = require('prompt-sync')()


let nota = Number(prompt('Informe a nota: '))
let qtdVendas = Number(prompt('Informe a quantidade de vendas: '))

if (nota >= 9 && qtdVendas >= 100) {
    
    console.log('Excelente')

}else if (nota >= 7 && qtdVendas >= 50) {
    
    console.log('Bom')

}else if (nota >= 5) {
    console.log('Regular')

}else{
    console.log('Ruim')
}
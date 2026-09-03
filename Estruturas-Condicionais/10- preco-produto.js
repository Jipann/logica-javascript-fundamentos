/**
 * Preço do produto

Peça o preço de um produto.

Classifique:

Menor que R$ 50 → Produto barato

De R$ 50 até R$ 100 → Preço moderado

Acima de R$ 100 → Produto caro
Exemplos:
35 → Produto barato
75 → Preço moderado
150 → Produto caro
 */

const prompt = require('prompt-sync')()

let preco = Number(prompt('Informe o valor do produto: '))

if (preco < 50) {
    console.log( 'Produto barato ')

}else if (preco <= 100) {
    console.log('Preço Moderado ')

}else{
    console.log('Produto caro ')
}
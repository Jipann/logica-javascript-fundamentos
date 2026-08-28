/**
 * Peça ao usuário:

largura;
altura.

Calcule a área do retângulo.

Fórmula: área = largura × altura
Exemplo:

Largura: 5
Altura: 8

Área = 40
 */

const prompt = require('prompt-sync')()

let largura = Number(prompt('Informe a largura: '))
let altura = Number(prompt('Informe a altura: '))

let area = largura * altura

console.log('Área =' , area)
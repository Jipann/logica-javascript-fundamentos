/**
 * Dois números

Peça dois números ao usuário.

O programa deve informar:

qual é o maior;
ou se eles são iguais.
 */

const prompt = require('prompt-sync')()


let numero1 = Number(prompt('Informe o primeiro número: '))
let numero2 = Number(prompt('Informe o segundo número: '))

if (numero1 > numero2) {
    console.log('O maior número é ', numero1)

}else if (numero2 > numero1) {
    console.log('O maior número é ', numero2)

}else{
    console.log('Os números são iguais. ')
}
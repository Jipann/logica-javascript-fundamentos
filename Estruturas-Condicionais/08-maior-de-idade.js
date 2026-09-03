/**
 * Maior de idade

Peça a idade do usuário.

Informe:

Menor de idade

ou:

Maior de idade

Considere que 18 anos já é maior de idade.

Exemplos:
17 → Menor de idade
18 → Maior de idade
25 → Maior de idade

Aqui quero que você pense bastante no >=.
 */

const prompt = require('prompt-sync')()

let idade = Number(prompt('Informe sua idade: '))

if (idade >= 18) {
    console.log('Maior de idade! ')

}else{
    console.log('Menor de idade! ')
}
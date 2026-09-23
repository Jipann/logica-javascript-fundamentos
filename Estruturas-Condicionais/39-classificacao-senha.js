/**
 * Exercício 2 — Classificação de senha

Crie um programa que peça uma senha.

Classifique assim:

menos de 6 caracteres → "Senha fraca"
de 6 até 9 caracteres → "Senha média"
10 ou mais → "Senha forte"

Use:

senha.length
Exemplos
abc
→ Senha fraca
abc1234
→ Senha média
abcdef1234
→ Senha forte
⚠️ Atenção

Quero que você descubra sozinho:

9 pertence à faixa média ou forte?

10 pertence à média ou forte?

É exatamente esse tipo de limite que precisamos deixar automático.
 */

const prompt = require('prompt-sync')()

let senha = prompt('Digite sua senha: ')

if (senha.length < 6) {
    console.log('Senha fraca')

}else if (senha.length >= 6 && senha.length < 10) {
    console.log('Senha média')

 }else{
    console.log('Senha forte')
 }
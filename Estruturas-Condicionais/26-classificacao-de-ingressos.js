/**
 * Exercício 3 — Classificação de ingresso

Um cinema possui três tipos de ingresso:

1 → Inteira
2 → Meia
3 → Gratuita

Crie um programa que peça a opção.

Se for:

1 → "Ingresso inteira"
2 → "Ingresso meia"
3 → "Ingresso gratuito"
qualquer outra coisa → "Opção inválida"
Mas existe uma regra:

A opção 2 (meia) só poderá ser escolhida se a pessoa tiver direito à meia-entrada.

Pergunte também:

Possui direito à meia? (sim/não)
Exemplos:
Opção: 2
Direito à meia: sim

Ingresso meia.
Opção: 2
Direito à meia: não

Não possui direito à meia-entrada.
 */


const prompt = require('prompt-sync')()


console.log('[1] INGRESSO INTEIRA: ')
console.log('[2] INGRESSO MEIA: ')
console.log('[3] INGRESSO GRATUITO: ')
let opcao = Number(prompt('INFORME A OPÇÃO DESEJADA: '))

switch (opcao) {
    case 1:
        console.log('Ingresso Inteira ')
        break;

        case 2:
        let tipoEntrada = prompt('Possui direito à meia? (sim/nao): ')
        if (tipoEntrada === 'sim') {
            console.log(`OPÇÃO: ${opcao}`)
            console.log(`DIREITO À MEIA: ${tipoEntrada}`)
            console.log('Ingresso meia')
        }else{
            console.log(`OPÇÃO: ${opcao}`)
            console.log(`DIREITO À MEIA: ${tipoEntrada}`)
            console.log('Não possui direito à meia entrada.')
        }
        
        break;

        case 3:
            console.log('Ingresso gratuito. ')
        break;

    default:
        console.log('opção inválida')
       
        break;
}
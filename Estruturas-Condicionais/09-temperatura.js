/**
 * Peça uma temperatura em graus Celsius.

Classifique:

Abaixo de 15 → Frio

15 até 25 → Agradável

Acima de 25 → Quente
Exemplos:
10 → Frio
20 → Agradável
30 → Quente

⚠️ Preste atenção no 15 e no 25
 */

const prompt = require('prompt-sync')()

let temperatura = Number(prompt('Informe a temperatura em graus Celsius: '))

if (temperatura < 15) {
    console.log('Frio')

}else if (temperatura < 25) {
    console.log('Agradável')

}else{
    console.log('Quente')
}
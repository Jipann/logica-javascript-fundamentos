/**
 * Exercício 3 — Faixa de temperatura

Peça a temperatura atual.

Informe:

abaixo de 10 → "Está muito frio"
entre 10 e 25 → "Temperatura agradável"
acima de 25 → "Está quente"

Mas tem uma regra:

Para dizer que a temperatura está agradável, ela precisa ser:

>= 10 E <= 25
 */

const prompt = require('prompt-sync')()

let temperatura = Number(prompt('Informe qual a temperatura: '))

if (temperatura < 10) {
    console.log(`Está muito frio ${temperatura} ºC`)

}else if (temperatura >= 10 && temperatura <= 25) {
    console.log(`Temperatura agradável ${temperatura} ºC`)

}else{
    console.log(`Está quente ${temperatura} ºC`)
}
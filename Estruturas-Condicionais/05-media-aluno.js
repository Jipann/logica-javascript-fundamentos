/**
 * A 1000 - 900
 * B 890 - 800
 * C 790 - 700
 * D 690 - 600
 * E 590 - 500
 * F abaixo de 500
 */
const prompt = require('prompt-sync')()

let nota1 = Number(prompt('Informe a nota 1: '))
let nota2 = Number(prompt('Informe a nota 2: '))
let nota3 = Number(prompt('Informe a nota 3: '))

let media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log('MEDIA',media.toFixed(1))
    console.log('APROVEITAMENTO F')

}else if (media <= 6) {
    console.log('MEDIA',media.toFixed(1))
    console.log('APROVEITAMENTO E')

}else if (media < 7) {
    console.log('MEDIA',media.toFixed(1))
    console.log('APROVEITAMENTO D')

}else if (media < 8) {
    console.log('MEDIA',media.toFixed(1))
    console.log('APROVEITAMENTO C')

}else if (media < 9) {
    console.log('MEDIA',media.toFixed(1))
    console.log('APROVEITAMENTO B')
    
}else{
    console.log('MEDIA',media.toFixed(1))
    console.log('APROVEITAMENTO A')
}


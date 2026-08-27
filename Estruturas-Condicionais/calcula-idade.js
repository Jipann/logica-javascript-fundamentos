const prompt = require('prompt-sync')()


let ano = Number(prompt('Em que anos estamos ?'))
let anoNasc = Number(prompt('Em que ano você nasceu ?'))

let idade = ano - anoNasc

console.log(` Em ${ano} você terá ${idade} anos`)

if (idade >= 18) {
    console.log(' Já terá atingido a maior idade.2026')
}
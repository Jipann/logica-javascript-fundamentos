const prompt = require('prompt-sync')()

let segundos = Number(prompt(' informe os segundos:'))

let converterSegundos = Math.floor(segundos / 60)
let sobraSegundos = segundos % 60

// saida: 367 segundos = 6 minutos e 7 segundos
console.log(`${segundos} segundos = ${converterSegundos} minutos e ${sobraSegundos} segundos`)
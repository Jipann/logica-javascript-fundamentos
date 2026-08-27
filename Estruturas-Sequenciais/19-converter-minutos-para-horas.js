const prompt =require('prompt-sync')()

let minutos = Number(prompt('Informe os minutos:'))

let converterMinutos = Math.floor(minutos / 60)

let sobraminutos = minutos % 60

// saida: 185 minutos = 3 horas e 5 minutos
console.log(`${minutos} minutos = ${converterMinutos} horas e ${sobraminutos} minutos`)
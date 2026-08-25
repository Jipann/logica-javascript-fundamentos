/**Exercios de fixação de conversão horas, minutos, segundos */

let vhora = 3
vhora = vhora * 60

console.log('em minutos:', vhora)

// minutos -> segundos
const min = 5

const conversor = min * 60

console.log(`a conversão de ${min} min para segundos fica : ${conversor} s`)

// hora -> minutos -> segundos
const hora = 2

//quantos minutos tem em 2 horas? 120
const horaParaMinuto = hora * 60

// quantos segundos existem em 2 horas?
const minutosParaSegundos = horaParaMinuto * 60

console.log(`${hora} horas = ${horaParaMinuto} minutos`)
console.log(`${hora} horas = ${minutosParaSegundos} segundos`)


// segundos -> minutos

const segundos = 300

const segundosParaMinutos = segundos / 60

console.log(`${segundos} segundos = ${segundosParaMinutos} min`)


// miutos -> hora

/*const minutos = 120

//Quantas horas completas existem nesses 120 minutos.
const minutosParaHoras = minutos / 60

// QUANTOS MINUTOS SOBRAM
const quantosMinutosSobram = minutos % 60
// RESULTADO ESPERADO 120 MINUTOS = 2 HORAS E 0 MINUTOS
console.log(`${minutos} minutos = ${minutosParaHoras} horas e ${quantosMinutosSobram} minutos`)*/



// usando o math.floor( )

const minutos = 132

//Quantas horas completas existem nesses 132 minutos.
const minutosParaHoras = Math.floor(minutos / 60)

// QUANTOS MINUTOS SOBRAM 
const qtdMinutosSobra = minutos % 60
// RESULTADO ESPERADO 120 MINUTOS = 2 HORAS E 0 MINUTOS
//console.log(`${mts} minutos = ${mtsParaHoras} horas e ${qtdMinutosSobra} minutos`)

console.log(`${minutos} minutos = ${minutosParaHoras} horas e ${qtdMinutosSobra} minutos `)


// outro exercicio

let minutoss = 156

// converter minutos para hora:
 let minutossParaHora = Math.floor(minutoss / 60)

 // verfica o valor que sobra 
 let minutossQueSobram = minutoss % 60

 //resultado
console.log(`${minutoss} minutos = ${minutossParaHora} horas e ${minutossQueSobram} min`)


/**
 * Enunciado

Imagine que você começou a trabalhar às:

2 horas e 30 minutos

Queremos descobrir:

Quantos minutos existem em 2 horas e 30 minutos?
 */

// 2 horas e 30 minutos = 150 minutos

const horaz = 2
const tempoMinutos = 30

const conversorHorasParaMinutos = (horaz * 60) 
const totalMinutos = conversorHorasParaMinutos + tempoMinutos

console.log(`${horaz} horas e ${tempoMinutos} minutos = ${totalMinutos} minutos`)
//console.log(`${horaz} horas e ${tempoMinutos} minutos = ${conversorHorasParaMinutos} minutos`)


/**
 * Agora vamos fazer o contrário.

Você tem:

150 minutos

Queremos descobrir:

Quantas horas completas existem e quantos minutos sobram?
 */

const meusMinutos = 150

const valorEmHoras = Math.floor(meusMinutos / 60)

const valorMinutos = meusMinutos % 60

//O resultado esperado é:
//150 minutos = 2 horas e 30 minutos
console.log(`${meusMinutos} minutos = ${valorEmHoras} horas e ${valorMinutos} minutos`)

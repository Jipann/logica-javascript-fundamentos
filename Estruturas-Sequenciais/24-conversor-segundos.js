/**
 * Peça ao usuário uma quantidade de segundos e transforme em:

horas + minutos + segundos.

Exemplo:

Digite os segundos: 3670
Peça ao usuário uma quantidade de segundos e transforme em:

horas + minutos + segundos.

Exemplo:

Digite os segundos: 3670 segundos = 1 hora, 1 minuto e 10 segundos
 */

 const prompt = require('prompt-sync')()

 let segundos = Number(prompt('Informe os segundos: '))

// Descobre quantas horas completas existem nos segundos.
// 1 hora possui 3600 segundos.
let horas = Math.floor(segundos / 3600)

// Descobre quantos segundos sobraram depois de retirar as horas.
let restoDepoisDasHoras = segundos % 3600

// Com os segundos que sobraram, descobrimos quantos minutos completos existem.
let minutos = Math.floor(restoDepoisDasHoras / 60)

// Descobre quantos segundos sobraram depois de retirar os minutos.
let segundosRestantes = restoDepoisDasHoras % 60

console.log(`${segundos} segundos = ${horas} hora, ${minutos} minutos e ${segundosRestantes} segundos`)

/*let horaInicio = Number(prompt('Hora que começa: '))
let minutoInicio = Number(prompt('Minuto que começa: '))

let horasEstudo = Number(prompt('Horas que deseja estudar ? '))
let minutosEstudo = Number(prompt('Minutos que deseja estudar ? '))

// transforma em minutos a hora inicial e minutos iniciais
let comecoEmMinuto = (horaInicio * 60) + minutoInicio

// transforma tempo de estudos em minutos:
let terminoEmMinutos = (horasEstudo * 60) + minutosEstudo

// soma o total de minutos:
let somaMinutos = comecoEmMinuto + terminoEmMinutos

// preciso converter minutos em horas.
let converterminutosParaHora = Math.floor(somaMinutos / 60)

// e agora saber a sobra:
let sobraMinutos = somaMinutos % 60

console.log(`Você irá estudar até ${converterminutosParaHora}:${sobraMinutos}`)*/



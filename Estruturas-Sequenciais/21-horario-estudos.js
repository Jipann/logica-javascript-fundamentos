const prompt = require('prompt-sync')()

/*let hora = Number(prompt('Digite a hora que começou a estudar:'))
let minutos = Number(prompt('Digite agora os minutos que começou a estudar:'))

let converterhora = (hora * 60) + minutos

// exemplo de saida: 14:35 = 875 minutos
console.log(`${hora}:${minutos} = ${converterhora} minutos`)*/


/**
 * DESAFIO: CALCULADORA DE HORÁRIO DE ESTUDO

Crie um programa que pergunte ao usuário:
- a hora em que ele começou a estudar;
- os minutos em que ele começou;
- quantas horas deseja estudar;
- quantos minutos deseja estudar.

O programa deve calcular o horário em que o estudo irá terminar.

Exemplo:
Início: 16:49
Tempo de estudo: 1 hora e 30 minutos

Resultado:
Você irá estudar até às 18:19.
 */


let horaInicio = Number(prompt('Digite a hora que começou: '))
let minutoInicio = Number(prompt('Digite os minutos que começou: '))

let horasEstudo = Number(prompt('Quantas horas deseja estudar? '))
let minutosEstudo = Number(prompt('Quantos minutos deseja estudar? '))

// CONVERSÃO DO HORÁRIO DE INÍCIO:
// Transformamos as horas em minutos e somamos os minutos.
// Exemplo: 16 horas × 60 + 49 minutos = 1009 minutos.
let inicioEmMinutos = (horaInicio * 60) + minutoInicio

// CONVERSÃO DO TEMPO DE ESTUDO:
// Transformamos as horas de estudo em minutos e somamos
// os minutos restantes.
// Exemplo: 1 hora × 60 + 30 minutos = 90 minutos.
let tempoEstudoEmMinutos = (horasEstudo * 60) + minutosEstudo

// SOMA:
// Somamos o horário de início com o tempo que deseja estudar.
// Exemplo: 1009 + 90 = 1099 minutos.
let somaMinutos = inicioEmMinutos + tempoEstudoEmMinutos

// CONVERSÃO DOS MINUTOS PARA HORAS:
// Descobrimos quantas horas completas existem dentro do resultado.
// Math.floor() elimina a parte decimal.
let pegaParteInteira = Math.floor(somaMinutos / 60)

// DESCOBRIR OS MINUTOS RESTANTES:
// O operador % retorna o resto da divisão por 60.
let PegaOResto = somaMinutos % 60

// RESULTADO:
// Mostra o horário em que o usuário irá terminar os estudos.
console.log(`Você irá estudar até às ${pegaParteInteira}:${PegaOResto} `)
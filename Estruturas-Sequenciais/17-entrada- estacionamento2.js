/**
 * Seu estacionamento real

Faça um programa que calcule quanto tempo uma pessoa ficou no estacionamento.

Entrada:16:15 
Saída: 18:27
 */

/*const horaEntrada = 16
const minutoEntrada = 15

const horaSaida = 18
const minutoSaida = 27

const entradaConvertidaParaMinutos = (horaEntrada * 60) + minutoEntrada
const saidaConvertidaParaMinutos = (horaSaida * 60) + minutoSaida
 
const comparaMinutos = saidaConvertidaParaMinutos - entradaConvertidaParaMinutos

const qtdMinutos = Math.floor(comparaMinutos / 60)
const qtdMinutosExcedente = comparaMinutos % 60

// resultado esperdado:
//2 horas e 12 minutos
console.log(`${qtdMinutos} horas e ${qtdMinutosExcedente} minutos`)*/


/*const entradaHora = 16
const entradaMinutos = 45

const saidaHora = 17
const saidaMinutos = 15

// CONVERTER HORAS PARA MINUTOS:
const hEntrada = (entradaHora * 60) + entradaMinutos
const hSaida = (saidaHora * 60) + saidaMinutos

const diferencaHora = hSaida - hEntrada

//const teste = Math.floor(diferencaHoras /60)
const qtdmminutos = diferencaHora % 60

//console.log(teste)
console.log(`${qtdmminutos} minutos`)*/


const entradaHora = 18
const entradaMinutos = 40

const saidaHora = 20
const saidaMinutos = 25

const converterHoraEntradaParaMinutos = (entradaHora * 60) + entradaMinutos
const converterHoraSaidaParaMinutos = (saidaHora * 60) + saidaMinutos

const diferencaTotalMinutos = converterHoraSaidaParaMinutos - converterHoraEntradaParaMinutos
const qtdEmHoras = Math.floor(diferencaTotalMinutos / 60)
const qtdEmminutos = diferencaTotalMinutos % 60
//1 hora e 45 minutos
console.log(`${qtdEmHoras} horas e ${qtdEmminutos} minutos`)


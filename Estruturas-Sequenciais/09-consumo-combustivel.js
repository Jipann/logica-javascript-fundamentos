/**
 * Calcule o consumo médio de combustível de um automóvel sabendo
 *  a distância total percorrida (km) e o combustível gasto (litros).
 */

const prompt = require('prompt-sync')()

let distanciaTotal = Number(prompt('Distância percorrida em km: '))
let consumoCombustivel = Number(prompt('quantidade de combustível consumida em litros: '))

let consumoMedio = distanciaTotal / consumoCombustivel

console.log(`Autonomia do veículo foi de ${consumoMedio.toFixed(2)} km/L`)
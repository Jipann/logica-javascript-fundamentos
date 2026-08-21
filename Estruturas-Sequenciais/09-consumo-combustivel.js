/**
 * Calcule o consumo médio de combustível de um automóvel sabendo
 *  a distância total percorrida (km) e o combustível gasto (litros).
 */


const distanciaTotal = 120
const consumoCombustivel = 7.8

const consumoMedio = distanciaTotal / consumoCombustivel

console.log(`Autonomia do veículo foi de ${consumoMedio.toFixed(2)} km/L`)
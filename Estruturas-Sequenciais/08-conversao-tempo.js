/**
 * Receba um valor total em segundos e 
 * converta-o para horas, minutos e segundos restantes.
 */


const totalSegundos = 5400;

// 1. Calcula as horas completas
const horas = Math.floor(totalSegundos / 3600)

// 2. Pega o que sobrou de segundos depois de extrair as horas
const restoAposHoras = totalSegundos % 3600

// 3. Calcula os minutos completos a partir do resto
const minutos = Math.floor(restoAposHoras / 60)

// 4. Pega os segundos finais que sobraram
const segundosFinais = restoAposHoras % 60

console.log(`${horas}h ${minutos}m ${segundosFinais}s`)

/**
 * magine que você entrou no estacionamento às:

16:00

E saiu às:

17:00

Pergunta:

Quanto tempo você ficou no estacionamento?
 */

/*const horaEntrada = 16
const horaSaida = 17

const horarioSaida = horaSaida - horaEntrada

//Quanto tempo você ficou no estacionamento?
console.log(`Entrei às ${horaEntrada.toFixed(2)} e saí às ${horaSaida.toFixed(2)}. fiquei ${horarioSaida} hora`)*/


/**
 * Agora entra o minuto

Vamos fazer um passo bem pequeno.

Você entrou no estacionamento:

16:15

E saiu:

17:15
 */

const horaEntrada = 16
const minutosEntrada = 15
const horasaida = 17
const minutosSaida = 15


const horarioEntrada = (horaEntrada * 60) + minutosEntrada
const horarioSaida = (horasaida * 60) + minutosSaida

//Quanto tempo você ficou?
const tempoNoEstacionamento = horarioSaida - horarioEntrada

const tempoEmHoras = tempoNoEstacionamento / 60

console.log(`Entrei às ${horaEntrada}:${minutosEntrada} e saí às ${horasaida}:${minutosSaida}.Fiquei ${tempoEmHoras} hora.`)
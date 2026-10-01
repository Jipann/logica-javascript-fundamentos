/**
 * Exercício 3 — Estacionamento

Um estacionamento calcula o preço com base no tempo.

Peça:

Quantidade de horas:
É cliente mensalista? (sim/não):

Regras:

Não mensalista
até 1 hora → R$ 10
acima de 1 até 3 horas → R$ 20
acima de 3 até 5 horas → R$ 30
acima de 5 horas → R$ 50
Mensalista

Paga R$ 10, independentemente do tempo.

Exemplos
Horas: 2
Mensalista: não

Valor: R$ 20
Horas: 7
Mensalista: não

Valor: R$ 50
Horas: 8
Mensalista: sim

Valor: R$ 10
🧠 Aqui temos uma regra que pode ser pensada primeiro:

mensalista → tarifa especial.

Depois você pensa nas faixas do estacionamento comum.

Esse exercício é bom para você decidir se começa pela exceção ou pela categoria.
 */

const prompt = require('prompt-sync')()


let horas = Number(prompt('Quantidade de horas: '))
let mensalista = (prompt('É cliente mensalista (sim/nao)? '))

if (mensalista === 'sim') {
    console.log(`Horas: ${horas} ` )
    console.log(`Mensalista:${mensalista}`)
    console.log(`Valor: R$ 10`)

}else if (horas <= 1) {
    console.log(`Horas: ${horas} ` )
    console.log(`Mensalista:${mensalista}`)
    console.log(`Valor: R$ 10`)

}else if (horas <= 3) {
    console.log(`Horas: ${horas} ` )
    console.log(`Mensalista:${mensalista}`)
    console.log(`Valor: R$ 20`)

}else if (horas <= 5) {
    console.log(`Horas: ${horas} ` )
    console.log(`Mensalista:${mensalista}`)
    console.log(`Valor: R$ 30`)

}else{
   console.log(`Horas: ${horas} ` )
    console.log(`Mensalista:${mensalista}`)
    console.log(`Valor: R$ 50`) 
}

/**
 * Exercício 1 — Controle de acesso ao estacionamento

Um estacionamento possui uma regra especial para moradores.

O acesso será liberado quando:

a pessoa for moradora E tiver adesivo do condomínio;

OU

a pessoa não for moradora, mas estiver com autorização.

Peça:

É morador? (sim/não)
Possui adesivo? (sim/não)
Possui autorização? (sim/não)
Exemplos
morador = sim
adesivo = sim
autorização = não

→ Acesso liberado
morador = não
adesivo = não
autorização = sim

→ Acesso liberado
morador = sim
adesivo = não
autorização = não

→ Acesso negado
Antes do código

Escreva:

(Regra A) OU (Regra B)
 */


const prompt = require('prompt-sync')()

let pessoa = prompt('É morador (sim/nao)? ')
let adesivo = prompt('Possui adesivo  sim/nao)? ')
let autorizacao = prompt('Possui autorização (sim/nao)? ')

if ((pessoa === 'sim' && adesivo === 'sim') || (pessoa === 'nao' && autorizacao === 'sim')) { 
    console.log(`morador = ${pessoa}`)  
    console.log(`adesivo = ${adesivo}`)
    console.log(`autorização = ${autorizacao}`)
    console.log('Acesso liberado!')

}else{

    console.log(`morador = ${pessoa}`)  
    console.log(`adesivo = ${adesivo}`)
    console.log(`autorização = ${autorizacao}`)
    console.log('Acesso negado!')
}
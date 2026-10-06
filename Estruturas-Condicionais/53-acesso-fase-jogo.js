/**
 * Exercício 2 — Acesso a uma fase do jogo

Um jogador poderá acessar uma fase especial quando:

tiver 100 pontos ou mais
E tiver pelo menos 50 pontos de energia

OU

for jogador VIP
E tiver pelo menos 30 pontos de energia

Peça:

Pontos:
Energia:
É VIP? (sim/não):
Exemplos
Pontos: 120
Energia: 60
VIP: não

Fase liberada.
Pontos: 80
Energia: 60
VIP: não

Fase bloqueada.
Pontos: 80
Energia: 40
VIP: sim

Fase liberada.
Pontos: 80
Energia: 20
VIP: sim

Fase bloqueada.
🧠 Antes do código

Tente escrever:

(Regra A) OU (Regra B)
 */

const prompt = require('prompt-sync')()

let pontos = Number(prompt('Pontos: '))
let energia = Number(prompt('Energia: '))
let vip = (prompt('É VIP (sim/nao)? '))

if ((pontos >= 100 && energia >= 50) || (vip === 'sim' && energia >= 30)) {
    console.log(`Pontos: ${pontos}`)
    console.log(`Energia: ${energia}`)
    console.log(`VIP: ${vip}`)
    console.log('Fase liberada!')

}else{
    console.log(`Pontos: ${pontos}`)
    console.log(`Energia: ${energia}`)
    console.log(`VIP: ${vip}`)
    console.log('Fase bloqueada!')
}
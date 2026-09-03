const prompt = require('prompt-sync')()

let inter = Number(prompt('Quantos gols do Inter? '))
let gremio = Number(prompt('Quantos gols do grêmio? '))

// Math.abs() garante que a diferença seja sempre positiva
let diferenca = Math.abs(inter - gremio)

// QUANTIDADE DE GOLS
let qtdgols = inter + gremio

if (diferenca === 0){
    console.log('DIFERENÇA:', diferenca)
    console.log('STATUS: PARTIDA EMPATE')

}else if ((diferenca >= 1) && (diferenca <= 4)) {
    console.log('DIFERENÇA:', diferenca)
    console.log('STATUS: NORMAL')

}else{
    console.log('DIFERENÇA:', diferenca)
    console.log('STATUS: GOLEADA')
}


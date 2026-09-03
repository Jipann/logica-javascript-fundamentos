/**
 * Estacionamento

Vamos voltar ao nosso velho conhecido. 😂

Um estacionamento cobra:

Até 1 hora → R$ 10

Mais de 1 hora até 3 horas → R$ 20

Mais de 3 horas → R$ 30

Peça ao usuário quantas horas ele ficou estacionado e informe o valor a pagar.

Exemplos:
1 hora → R$ 10

2 horas → R$ 20

3 horas → R$ 20

4 horas → R$ 30
 */


const prompt = require('prompt-sync')()

let hora = Number(prompt('Informe quantas horas ficou no estacionamento? '))


if (hora <= 1) {
    console.log(`${hora} horas irá pagar R$ 10`)

}else if (hora <= 3) {
    console.log(`${hora} horas irá pagar R$ 20`)
    
}else{

    console.log('Mais de 3 horas irá pagar R$ 30')
}


/*let peso = Number(prompt('Informe seu peso: '))
let altura = Number(prompt('Informe sua altura: '))
let imc = peso / Math.pow(altura, 2)

if (imc < 18.5) {
    console.log('Magreza')

}else if (imc < 25) {
    console.log('Peso normal ')

}else if (imc < 30) {
    console.log('sobrepeso')

}else if (imc < 40) {
    console.log('Obesidade')

}else{
    console.log('Obesidade grave')
}*/
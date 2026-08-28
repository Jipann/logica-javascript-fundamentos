const prompt = require('prompt-sync')()

let peso = Number(prompt(' informe quantos KG, você pesa.'))
let altura = Number(prompt(' informe sua altura.'))

let imc = peso / Math.pow(altura, 2)

if ((imc >= 18.5 && imc < 25)) {
    console.log('Parabéns, você está no seu peso ideal.')

}else{
    console.log('Você não está na faixa de peso ideal')
}

console.log(imc.toFixed(2))
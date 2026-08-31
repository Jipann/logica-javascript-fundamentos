const prompt = require('prompt-sync')()

let peso = Number(prompt(' informe quantos KG, você pesa.'))
let altura = Number(prompt(' informe sua altura.'))

let imc = peso / Math.pow(altura, 2)

if (imc < 18.5) {
    console.log('Magreza (abaixo do peso)',imc.toFixed(2))

}else if(imc < 25){

    console.log('Peso normal (adequado)', imc.toFixed(2))

}else if(imc < 30){
    console.log('Sobrepeso (excesso de peso)', imc.toFixed(2))

}else if(imc < 40){

    console.log(' Obesidade (graus I e II)',imc.toFixed(2))

}else{
    console.log('Obesidade grave (grau III)')
}
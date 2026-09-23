/**Exercício 4 — Imposto sobre salário

Uma empresa quer calcular uma taxa simples:

até R$ 2.500 → 0%
acima de R$ 2.500 até R$ 4.000 → 10%
acima de R$ 4.000 até R$ 6.000 → 15%
acima de R$ 6.000 → 20%

Peça o salário e calcule:
 * Salário:
Taxa:
Valor do imposto:
Salário após imposto:

Exemplo
Salário: 5000

Taxa: 15%
Imposto: 750
Salário líquido: 4250

Quero atenção especial nos limites:
2500
2500,01
4000
4000,01
6000
6000,01

Não precisa testar todos agora, mas pense nesses valores.
 */

const prompt = require('prompt-sync')()


let salario = Number(prompt('Informe o salário: '))
let fgts = 0
let desconto = 0
// ESSA FORMULA DA O VALOR QUE IRA SER DESCONTADO DO SALÁRIO:
let imposto = 0 //salario * (15/100)
// ESSA FORMULA DA O VALOR DO NOVO SALÁRIO: (VALOR DO IMPOSTO)
let Novosalario = 0 //salario - imposto

if (salario <= 2500) {
    fgts = 0/100
    imposto = salario * (fgts)
    desconto = fgts * 100
    Novosalario = salario - imposto
    console.log(`Salário: ${salario}`)
    console.log(`Taxa ${desconto}%`)
    console.log(`Imposto:${imposto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)
    console.log(`Salário líquido: ${Novosalario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)

}else if (salario > 2500 && salario <= 4000) {
    fgts = 10/100
    imposto = salario * (fgts)
    desconto = fgts * 100
    Novosalario = salario - imposto
    console.log(`Salário: ${salario}`)
    console.log(`Taxa ${desconto}%`)
    console.log(`Imposto:${imposto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)
    console.log(`Salário líquido: ${Novosalario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)

}else if (salario > 4000 && salario <=6000) {
    fgts = 15/100
    imposto = salario * (fgts)
    desconto = fgts * 100
    Novosalario = salario - imposto
    console.log(`Salário: ${salario}`)
    console.log(`Taxa ${desconto}%`)
    console.log(`Imposto:${imposto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)
    console.log(`Salário líquido: ${Novosalario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)

}else{

    fgts = 20/100
    imposto = salario * (fgts)
    desconto = fgts * 100
    Novosalario = salario - imposto
    console.log(`Salário: ${salario}`)
    console.log(`Taxa ${desconto}%`)
    console.log(`Imposto:${imposto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)
    console.log(`Salário líquido: ${Novosalario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)
}

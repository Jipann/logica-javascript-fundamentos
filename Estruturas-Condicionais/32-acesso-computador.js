/**
 * Exercício 1 — Acesso ao computador

Um computador só pode ser acessado quando:

o usuário é "admin"
E a senha está correta.

Peça:

Usuário:
Senha:

Senha correta:

1234

Resultado:

Acesso liberado!

ou:

Acesso negado!
 */

const prompt = require('prompt-sync')()

let usuario = prompt('Usuário: ')
let senha = Number(prompt('Senha: '))

if (usuario === 'admin' && senha === 1234) {
    console.log('Acesso liberado!')

}else{
    console.log('Acesso negado !')
}

/**
 * Exercício 2 — Promoção da loja

Uma loja dará desconto quando o cliente atender uma destas condições:

compra de R$300 ou mais;
OU cliente possui cartão da loja.

Peça:

Valor da compra:
Possui cartão? (sim/não)

Exemplo:

Compra: 150
Cartão: sim

Desconto liberado.

Aqui quero que você identifique:

condição A
OU
condição B
 */

let valorCompra = Number(prompt('Valor da compra: '))
let cartao = prompt('Possui cartão (sim/nao)? ')

if ((valorCompra >= 300) || (cartao === 'sim') ){
    console.log(`Compra: ${valorCompra}`)
    console.log(`Cartão: ${cartao}`)
    console.log('Desconto Liberado! ')

}else{
    console.log('Desconto não liberado!')
}


/**
 * Exercício 3 — Entrada em um curso

Uma escola aceita matrícula se:

a pessoa tiver 18 anos ou mais;
E tiver concluído o ensino médio.

Peça:

Idade:
Concluiu o ensino médio? (sim/não)

Exemplos:

20 / sim → Pode se matricular.
20 / não → Não pode.
17 / sim → Não pode.

Aqui temos uma regra simples com &&.
 */

let idade = Number(prompt('Idade: '))
let ensino = (prompt('Conclui o ensino médio (sim/nao)? : '))

if (idade >= 18 && ensino === 'sim') {
    console.log('Pode se matricular')

}else{
    console.log('Não pode se matricular.')
}

/**
 * Exercício 4 — Frete especial

Uma loja oferece frete grátis quando:

Regra A:

compra ≥ R$200
E cliente é assinante

OU

Regra B:

compra ≥ R$500

Exemplo:

Compra: 250
Assinante: sim
→ Frete grátis
Compra: 250
Assinante: não
→ Frete pago
Compra: 600
Assinante: não
→ Frete grátis
Antes do código, tente escrever:
(REGRA A) OU (REGRA B)

Esse exercício já começa a treinar blocos de lógica.
 */

let compra = Number(prompt('Valor da compra:'))
let cliente = (prompt('O cliente é assinante (sim/nao)? '))

if ((compra >= 200 && cliente === 'sim') || (compra >=500)) {
    console.log(`Compra: ${compra}`)
    console.log(`Assinante: ${cliente}`)
    console.log('Frete grátis!')

}else{
    console.log(`Compra: ${compra}`)
    console.log(`Assinante: ${cliente}`)
    console.log('Frete pago!')
}


/**
 * Exercício 5 — Classificação de funcionário

Uma empresa possui três situações:

Excelente

Funcionário tem:

produtividade ≥ 90
E faltas ≤ 2
Bom

Funcionário tem:

produtividade ≥ 70
E faltas ≤ 5
Caso contrário

Regular.

Peça:

Produtividade:
Número de faltas:
Exemplos:
Produtividade: 95
Faltas: 1

Excelente
Produtividade: 80
Faltas: 3

Bom
Produtividade: 80
Faltas: 7

Regular
🧠 Atenção

Aqui não é só saber escrever &&.

Você precisa pensar:

Qual condição precisa vir primeiro?

A condição de "Excelente" é mais específica que "Bom".

Esse exercício é ótimo para consolidar o que aconteceu naquele exercício da goleada.
 */

let produtividade = Number(prompt('Informe a produtividade do funcionário:'))
let faltas = Number(prompt('Informe o número de faltas:'))

if (produtividade >= 90 &&  faltas <= 2) {
    console.log(`Produtividade:${produtividade}`) 
    console.log(`Faltas: ${faltas}`)
    console.log('Exelente')

}else if (produtividade >= 70 &&  faltas <= 5) {
    console.log(`Produtividade:${produtividade}`) 
    console.log(`Faltas: ${faltas}`)
    console.log('Bom')

}else{
    console.log(`Produtividade:${produtividade}`) 
    console.log(`Faltas: ${faltas}`)
    console.log('Regular')
}

/**
 * Exercício 6 — Desafio: sistema de aprovação de crédito

Agora vamos fazer um mais próximo de uma regra real.

Um cliente pode receber aprovação se cumprir uma das duas regras.

Regra A
salário ≥ R$5.000
E parcela ≤ 30% do salário
E não possui nome negativado
Regra B
salário ≥ R$3.000
E parcela ≤ 20% do salário
E possui mais de 2 anos de empresa

Peça:

Salário:
Valor da parcela:
Nome negativado? (sim/não):
Anos de empresa:

Calcule primeiro:

percentual da parcela =
(parcela / salário) × 100

Depois avalie as regras.

Exemplos
Salário: 6000
Parcela: 1500
Negativado: não
Anos de empresa: 1

Parcela = 25%

Aprovado

Porque atende à Regra A.

Outro:

Salário: 3500
Parcela: 600
Negativado: sim
Anos de empresa: 4

Parcela = 17,14%

Aprovado

Porque atende à Regra B.

E:

Salário: 4000
Parcela: 1500
Negativado: não
Anos de empresa: 1

Parcela = 37,5%

Não aprovado.
 */

let salario = Number(prompt('Informe o salário: '))
let parcela = Number(prompt('Informe o valor da parcela: '))
let negativado = (prompt('Nome negativado (sim/nao)? '))
let tempoEmpresa = Number(prompt('Informe tempo de empresa: '))

let percentualParcela = (parcela / salario) * 100

if (salario >= 5000 && percentualParcela <= 30 && negativado === 'nao') {
    console.log(`Salário: ${salario}`)
    console.log(`Parcela:${parcela} `)
    console.log(`Negativado: ${negativado}`)
    console.log(`Anos de empresa: ${tempoEmpresa}`)
    console.log(`Parcela = ${percentualParcela.toFixed(1)} % `)
    console.log('Aprovado.')

}else if (salario >= 3000 && percentualParcela <= 20 && tempoEmpresa > 2 ) {
    console.log(`Salário: ${salario}`)
    console.log(`Parcela:${parcela} `)
    console.log(`Negativado: ${negativado}`)
    console.log(`Anos de empresa: ${tempoEmpresa}`)
    console.log(`Parcela = ${percentualParcela.toFixed(1)} % `)
    console.log('Aprovado.')

}else{
    console.log(`Salário: ${salario}`)
    console.log(`Parcela:${parcela} `)
    console.log(`Negativado: ${negativado}`)
    console.log(`Anos de empresa: ${tempoEmpresa}`)
    console.log(`Parcela = ${percentualParcela.toFixed(1)} % `)
    console.log('Não aprovado.')
}

/**Exercício 4 — Empréstimo de equipamento

Uma empresa empresta equipamentos.

Peça:

Tipo de equipamento:
Número de dias:
Possui cadastro ativo? (sim/não):

Opções:

[1] Notebook
[2] Câmera
[3] Projetor

Use switch.

Regras

Notebook

cadastro ativo
E até 7 dias

Câmera

cadastro ativo
E até 3 dias

Projetor

cadastro ativo
E até 2 dias
Exemplos
Equipamento: Notebook
Dias: 5
Cadastro: sim

Empréstimo aprovado.
Equipamento: Notebook
Dias: 8
Cadastro: sim

Empréstimo não aprovado.
Equipamento: Câmera
Dias: 3
Cadastro: sim

Empréstimo aprovado.
Equipamento: Câmera
Dias: 3
Cadastro: não

Empréstimo não aprovado.
Equipamento: Projetor
Dias: 2
Cadastro: sim

Empréstimo aprovado.
🎯 Aqui quero que você observe

Cada case possui sua própria regra.
 * 
 */

const prompt = require('prompt-sync')()

console.log('[1] Notebook\n[2] Câmera\n[3] Projetor ')
let opEquipamento = Number(prompt('Tipo de equipamento: '))
let dias = Number(prompt('Número de dias:'))
let cadastro = (prompt('Possui cadastro ativo(sim/nao)? '))

switch (opEquipamento) {
    case 1:
        if (cadastro === 'sim' && dias <= 7) {
            console.log('Equipamento: Notebook')
            console.log(`Dias: ${dias}`)
            console.log(`Cadastro: ${cadastro}`)
            console.log('Empréstimo aprovado.')

        }else{
            console.log('Equipamento: Notebook')
            console.log(`Dias: ${dias}`)
            console.log(`Cadastro: ${cadastro}`)
            console.log('Empréstimo não aprovado.')
        }
        
        break;

    case 2:
        if (cadastro === 'sim' && dias <= 3) {
            console.log('Equipamento: Câmera')
            console.log(`Dias: ${dias}`)
            console.log(`Cadastro: ${cadastro}`)
            console.log('Empréstimo aprovado.')

        }else{
            console.log('Equipamento: Câmera')
            console.log(`Dias: ${dias}`)
            console.log(`Cadastro: ${cadastro}`)
            console.log('Empréstimo não aprovado.')
        }
        
        break;

    case 3:
        if (cadastro === 'sim' && dias <= 2) {
            console.log('Equipamento: Projetor')
            console.log(`Dias: ${dias}`)
            console.log(`Cadastro: ${cadastro}`)
            console.log('Empréstimo aprovado.')

        }else{
            console.log('Equipamento: Projetor')
            console.log(`Dias: ${dias}`)
            console.log(`Cadastro: ${cadastro}`)
            console.log('Empréstimo não aprovado.')
        }
        
        break;

    default:
        console.log('Opção inválida!')
        break;
}
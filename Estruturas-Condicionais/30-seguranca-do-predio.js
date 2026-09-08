/**
 * Exercício 7 — Segurança do prédio

Agora vamos aumentar um pouco.

Um prédio possui três formas de permitir a entrada:

Funcionário

Pode entrar se:

possui crachá E está no horário permitido
Morador

Pode entrar se:

possui chave OU possui autorização
Visitante

Pode entrar somente se:

possui autorização E está acompanhado do morador

Pergunte:

Tipo de pessoa: funcionário / morador / visitante
Possui crachá? sim/não
Está no horário permitido? sim/não
Possui chave? sim/não
Possui autorização? sim/não
Está acompanhado do morador? sim/não

Você não precisa obrigatoriamente usar todas as informações para todos os tipos.
 */

const prompt = require('prompt-sync')()

let pessoa = String(prompt(' Funcionário / morador / visitante: '))
let cracha = String(prompt('Possui crachá? sim/não: '))
let horario = String(prompt('Está no horário permitido? sim/não: '))
let chave = String(prompt('Possui chave? sim/não: '))
let autorizacao = String(prompt('Possui autorização? sim/não: '))
let acompanhado = String(prompt('Está acompanhado do morador? sim/não: '))


if (pessoa === 'funcionario' && horario === 'sim') {

    console.log('Acesso Liberado! ')

}else if ((pessoa === 'morador') && (chave === 'sim') || (autorizacao === 'sim')) {
     console.log('Acesso Liberado! ')

}else if (pessoa === 'visitante' && acompanhado === 'sim') {
    console.log('Acesso Liberado! ')
    
}else{

    console.log('Acesso negado! ')
}
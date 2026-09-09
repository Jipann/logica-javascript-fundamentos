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

const pessoa = prompt('Funcionário / morador / visitante: ')
const cracha = prompt('Possui crachá? (sim/não): ')
const horario = prompt('Está no horário permitido? (sim/não): ')
const chave = prompt('Possui chave? (sim/não): ')
const autorizacao = prompt('Possui autorização? (sim/não): ')
const acompanhado = prompt('Está acompanhado do morador? (sim/não): ')

if(pessoa === 'funcionario' && cracha === 'sim' && horario === 'sim') {

    console.log('Acesso liberado!')

}else if (pessoa === 'morador' && (chave === 'sim' || autorizacao === 'sim')) {
    console.log('Acesso liberado!')

} else if (pessoa === 'visitante' && autorizacao === 'sim' && acompanhado === 'sim') {
    console.log('Acesso liberado!')

} else{
    console.log('Acesso negado!')
}
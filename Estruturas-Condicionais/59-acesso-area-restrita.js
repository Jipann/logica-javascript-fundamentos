/**
 * Exercício 2 — Acesso a uma área restrita
Combinação de regras


Enunciado

Uma empresa libera o acesso de acordo com estas regras:
- Funcionário: pode entrar se estiver no horário permitido e tiver crachá.
- Visitante: pode entrar se tiver autorização e estiver acompanhado de um funcionário.
- Qualquer outra situação: acesso negado.
Peça ao usuário:
- Tipo de pessoa (funcionario ou visitante).
- Está no horário permitido? (sim ou nao).
- Tem crachá? (sim ou nao).
- Tem autorização? (sim ou nao).
- Está acompanhado de funcionário? (sim ou nao).
Saídas esperadas
Pessoa	Horário	Crachá	Autorização	Acompanhado	Resultado
funcionario	sim	sim	nao	nao	Acesso liberado
funcionario	sim	nao	sim	sim	Acesso negado
funcionario	nao	sim	sim	sim	Acesso negado
visitante	nao	nao	sim	sim	Acesso liberado
visitante	sim	sim	sim	nao	Acesso negado
O que treinar: você pode separar
 as regras por tipo de pessoa usando if / else if e verificar 
 as condições de cada tipo dentro delas. Pense se um if aninhado 
 deixa a regra mais clara.
 */

 const prompt = require('prompt-sync')()

 let tipoPessoa = prompt('Funcionario ou visitante? ')
 let horarioPermitido = prompt('Está no horário permitido(sim/não) ? ')
 let cracha = prompt('Tem crachá (sim/nao) ? ')
 let autorizacao = prompt('Tem autorização (sim/nao)? ')
 let acompanhado = prompt('Está acompanhado de funcionário(sim/nao) ? ')

 if (tipoPessoa === 'funcionario') {
    if (horarioPermitido === 'sim' && cracha === 'sim') {
        console.log('Acesso liberado')
    }else{
        console.log('Acesso negado')
    }
    
    
}else if (tipoPessoa === 'visitante') {
    if (autorizacao === 'sim' && acompanhado === 'sim') {
         console.log('Acesso liberado')
    }else{
         console.log('Acesso Negado')
    }
}else{

     console.log('Acesso Negado')
}


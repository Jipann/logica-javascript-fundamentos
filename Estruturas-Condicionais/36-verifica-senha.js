/**
 * Exercício 5 — Verificação de senha mais completa

Crie um pequeno sistema de cadastro.

Peça:

Usuário
Senha
Confirmação da senha

As regras:

usuário não pode estar vazio;
senha deve ter pelo menos 6 caracteres;
senha e confirmação devem ser iguais.

Se tudo estiver correto:

Cadastro realizado com sucesso.

Caso contrário, mostre uma mensagem explicando o problema.

🧠 Atenção

Aqui você provavelmente vai precisar de:

senha.length

Isso retorna a quantidade de caracteres de uma string.

Exemplo:

const senha = 'abc123'

console.log(senha.length)

Resultado:

6

Esse exercício introduz uma pequena coisa nova, mas ainda é bem acessível.
 */

const prompt = require('prompt-sync')()

let user = prompt('Usuário: ')
let senha = prompt('Senha: ')
let confirmaSenha = prompt('Confirmação da senha: ')


if ((user?.trim() && senha.length >= 6) && (confirmaSenha === senha)) {
    console.log('Cadastro realizado com sucesso!')

}else{
    console.log('Cadastro não realizado! ')
}



// tive que descobrir que length pega texto eu estava tentando
//usar Number ai estava aparecendo undefined

/**
 * O método .trim() remove todos os espaços do início e 
 * do final antes da checagem. Se a variável
 *  também puder ser null ou undefined, 
 * proteja a verificação usando encadeamento opcional:
 * if (user?.trim()) {
}
 */

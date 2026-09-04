/**
 * Crie um programa que peça:

Usuário:
Senha:

O acesso será permitido somente se:

usuário for "admin"
E
senha for "1234"

Caso contrário:

Usuário ou senha incorretos.

Se estiver tudo correto:

Login realizado com sucesso!
 */

const prompt = require('prompt-sync')()
console.log('Para acessar o sistema digite usuário e senha!')
let usuario = String(prompt('Usuário: '))
let senha = Number(prompt('Senha: '))

if (usuario === 'admin' && senha === 1234) {
    console.log('Login realizado com sucesso!')

}else{
    console.log('Usuário ou senha incorretos.')
    
}
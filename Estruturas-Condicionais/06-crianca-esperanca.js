const prompt = require('prompt-sync')()


console.log('-------------------------------------')
console.log('           CRIANÇA ESPERANÇA'          )
console.log('-------------------------------------')
console.log('Muito obrigado por ajudar! ')
console.log('[1] para doar R$10 ')
console.log('[2] para doar R$25 ')
console.log('[3] para doar R$50 ')
console.log('[4] Outros valores ')
console.log('[5] Cancelar ')
let opcao =Number(prompt('Digite uma opção: '))

switch (opcao) {
    case 1:
        console.log(' Muito obrigado, você doou R$10.')
        break

    case 2:
        console.log(' Muito obrigado, você doou R$25.')
        break

    case 3:
    console.log(' Muito obrigado, você doou R$50.')
     break

     case 4:
    let doacao = Number(prompt('Qual valor gostaria de doar?'))
    console.log('Você doou R$',doacao, ' Obrigado!')
     break

      case 5:
        console.log('Você saiu do sistema!')
     break
    

    default:
        console.log('Opção inválida! digite 1 ao 5.')
        break;
}
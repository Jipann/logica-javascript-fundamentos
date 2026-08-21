/**
 * Declare um valor em Reais (BRL) e a cotação atual do Dólar (USD); 
 * calcule e exiba o valor convertido em Dólares.
 */

const valoremReais = 100
const cotacaoDolar = 5.14

const cambio = valoremReais / cotacaoDolar

console.log(`o montante de R$ ${valoremReais} convertido para Dolar é ${cambio.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`)
/* //CODIGO AQUI
let saldo = 15 + 22.4 //setei o saldo inicial
console.log(`Saldo inicial: ${saldo}`)
saldo = saldo - 12.34 //saldo inicial subrtraindo 12.34
console.log(`Saldo atualizado: ${saldo}`)
saldo = saldo / 3 // Saldo dividido por 3
console.log(`Saldo após divisão: ${saldo}`)
saldo = saldo * 3.42 // Saldo após aplicação
console.log(`Saldo após aplicação: ${saldo}`)
saldo = saldo % 3
console.log(`Valor para o chiclete: ${saldo}`)

//ORDEM
const multESoma = 2 + 2 * 2
console.log(multESoma)
const somaEMult = (2 + 2) * 2
console.log(somaEMult)

let igual = 5 === 5
console.log(igual)
let diferente = 5 !== 5
console.log(diferente)

//Lógicos
const num1 = 2
const num2 = 8
let resultado = num1 === num2
console.log(`O primeiro numéro é igual ao segundo? ${resultado}`)
resultado = num1 <= num2
console.log(`O primeiro numéro é menor ou igual ao segundo? ${resultado}`)
resultado = num1 > num2
console.log(`O primeiro numéro é maior ao segundo? ${resultado}`)
resultado = num1 < num2
console.log(`O primeiro numéro é menor ao seundo? ${resultado}`)  */

let a = 'Quero dirigir um Celta 2012'
let b = 'Sou maior de idade'
let c = 'consigo comprar o Celta por 22.000 reais'
let d = 'consigo alugar o Celta'
let e = 'tenho carteira de motorista'

a
!b
b && !e
b && (c || d)(b && e) && !a

/* 
Desafio 01 - Stage 04

Solicitar ao usuário que ele insira dois números. A partir desses números, calcular:
- a soma dos dois números
- a subtração dos dois números
- a multiplicação dos dois números
- a divisão dos dois números
- o resto da divisão dos dois números
- verificar se a soma dos dois números é par ou ímpar
- verificar se os dois números inseridos são iguais
*/

let firstNumber = Number(prompt('Por favor, insira um número:'))
let secondNumber = Number(prompt('Por favor, insira mais um número:'))

alert(`A soma dos dois números é: ${sum()}`)
alert(`A subtração dos dois números é: ${subtract()}`)
alert(`A multiplicação dos dois números é: ${multiply()}`)
alert(`O resultado da divisão do primeiro número pelo segundo é: ${divide()}`)
alert(`O resto da divisão do primeiro número pelo segundo é: ${remainder()}`)

if (sum() % 2 == 0) {
  alert(`A soma dos números é par: ${sum()}`)
} else {
  alert(`A soma dos números é ímpar: ${sum()}`)
}

if (firstNumber == secondNumber) {
  alert(`Os dois números inseridos são iguais`)
} else {
  alert (`Os números inseridos são diferentes`)
}

function sum () {
  const sum = firstNumber + secondNumber
  return sum
}

function subtract () {
  const subtraction = firstNumber - secondNumber
  return subtraction
}

function multiply () {
 const multiply = firstNumber * secondNumber
  return multiply
}

function divide () {
  const division = (firstNumber / secondNumber).toFixed(2)
  return division
}

function remainder () {
  const remainder = firstNumber % secondNumber
  return remainder
}


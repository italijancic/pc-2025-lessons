import { prompt } from './prompt.js'

// 4. **Serie de Fibonacci**
//    - Crea un programa que solicite al usuario ingresar un número `n` y que imprima los primeros `n` números de
//    - la serie de Fibonacci utilizando un bucle `while`.

console.log()
console.log('----------')
console.log('Problema 4')
console.log('----------')
console.log()

// Solicitar al usuario ingresar un número
let n = parseInt(prompt("Ingrese un número para calcular los primeros n números de la serie de Fibonacci: "))

// Inicializar los primeros dos números de la serie de Fibonacci
let fib1 = 0
let fib2 = 1

// Variable para contar cuántos números de Fibonacci se han generado
let count = 2

// Imprimir los primeros dos números de la serie
if(n > 1)
  console.log(fib1)

if(n > 2)
  console.log(fib2)

// Bucle para calcular los siguientes números de Fibonacci
while (count < n) {
  // Calcular el siguiente número de Fibonacci
  let nextFib = fib1 + fib2
  console.log(nextFib)

  // Actualizar los valores para la próxima iteración
  fib1 = fib2
  fib2 = nextFib

  count++ // Incrementar el contador
}


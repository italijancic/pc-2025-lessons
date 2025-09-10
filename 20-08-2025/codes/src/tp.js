// 📝 TP frlow control – Soluciones
// Autor: Ivan Talijancic

import { prompt } from './prompt.js'

// =======================
// Problema 1
// =======================
console.log("=== Problema 1 ===")
var a = 10
let b = 20
const c = 30

a = 15  // permitido
b = 25  // permitido
// c = 35 // Error: no se puede reasignar

console.log("var a:", a)
console.log("let b:", b)
console.log("const c:", c, "(no puede ser reasignado)")

// =======================
// Problema 2
// =======================
console.log("\n=== Problema 2 ===")
console.log(nombre) // undefined (hoisting eleva la declaración, no la asignación)
var nombre = "Iván"

// =======================
// Problema 3
// =======================
console.log("\n=== Problema 3 ===")
{
  let x = 10
  console.log("Dentro del bloque:", x)
}
// console.log(x) // Error: x no está definida fuera del bloque

// =======================
// Problema 4
// =======================
console.log("\n=== Problema 4 ===")
const persona = { nombre: "Ana", edad: 20 }
persona.edad = 21 // permitido
console.log("Edad modificada:", persona.edad)
// persona = { nombre: "Juan", edad: 30 } // Error: no se puede reasignar

// =======================
// Problema 5
// =======================
console.log("\n=== Problema 5 ===")
let studentAge = 18         // camelCase
class Student {}            // PascalCase
const MAX_SCORE = 100       // snake_case

console.log(`studentAge = ${studentAge} → camelCase`)
console.log(`Student = ${Student} → PascalCase`)
console.log(`MAX_SCORE → ${MAX_SCORE} snake_case`)

// =======================
// Problema 6
// =======================
console.log("\n=== Problema 6 ===")
const age = parseInt(prompt("Ingrese su edad: "))
if (age < 18) {
  console.log("Menor de edad")
} else if (age === 18) {
  console.log("Exactamente 18")
} else {
  console.log("Mayor de edad")
}

// =======================
// Problema 7
// =======================
console.log("\n=== Problema 7 ===")
const n1 = parseInt(prompt("Nota 1: "))
const n2 = parseInt(prompt("Nota 2: "))
const n3 = parseInt(prompt("Nota 3: "))
const average = (n1 + n2 + n3) / 3
if (average >= 6) {
  console.log("Aprobado con promedio", average)
} else {
  console.log("Reprobado con promedio", average)
}

// =======================
// Problema 8
// =======================
console.log("\n=== Problema 8 ===")
const day = parseInt(prompt("Ingrese un número del 1 al 7: "))
switch (day) {
  case 1:
    console.log("Lunes")
    break
  case 2:
    console.log("Martes")
    break
  case 3:
    console.log("Miércoles")
    break
  case 4:
    console.log("Jueves")
    break
  case 5:
    console.log("Viernes")
    break
  case 6:
    console.log("Sábado")
    break
  case 7:
    console.log("Domingo")
    break
  default: console.log("Número inválido")
}

// =======================
// Problema 9
// =======================
console.log("\n=== Problema 9 ===")
const edadVoto = parseInt(prompt("Ingrese su edad: "))
const tieneDNI = prompt("¿Tiene DNI? (true/false): ") === "true"
console.log("¿Puede votar?", edadVoto >= 16 && tieneDNI)

// =======================
// Problema 10
// =======================
console.log("\n=== Problema 10 ===")
const num1 = parseFloat(prompt("Ingrese el primer número: "))
const num2 = parseFloat(prompt("Ingrese el segundo número: "))
const op = prompt("Ingrese operación (+, -, *, /): ")
let result

switch (op) {
  case "+":
    result = num1 + num2
    break
  case "-":
    result = num1 - num2
    break
  case "*":
    result = num1 * num2
    break
  case "/":
    if (num2 !== 0) {
      result = num1 / num2
    } else {
      result = "Error: división por cero"
    }
    break
  default: result = "Operación inválida"
}

console.log("Resultado:", result)

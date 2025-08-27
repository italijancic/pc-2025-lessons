import { prompt } from './prompt.js'

// CLI input read examples
// -----------------------
// Read an string
let name = prompt('Write your name: ')
console.log(`Hello ${name}, welcome to the Computer Programming Course 2025 | UTN - FRRQ`)

// // Read an integer
let edad = parseInt(prompt('How old are you?: '))
console.log(edad)
console.log(typeof edad)
console.log(`${name} is ${edad} years old`)

// // Read a float
let height = parseFloat(prompt('How tall are you (on [m])?: '))
console.log(height)
console.log(typeof height)
console.log(`${name} is ${height} [m] tall`)

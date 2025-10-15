import { prompt } from './prompt.js'

/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - Minimum possible integer.
 * @param {number} max - Maximum possible integer.
 * @returns {number} A random integer between min and max.
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Creates a random vector of integers within the given range.
 * @param {number} min - Minimum value for the random integers.
 * @param {number} max - Maximum value for the random integers.
 * @param {number} size - Number of elements in the vector.
 * @returns {number[]} A vector filled with random integers.
 */
const rndVector = (min, max, size) => {
  const vector = new Array(size)

  for (let i = 0; i < vector.length; i++) {
    vector[i] = rndInt(min, max)
  }

  return vector.slice()
}

/**
 * Finds the maximum value in a vector.
 * @param {number[]} vector - Array of numbers.
 * @returns {number} The maximum value in the vector.
 */
const max = (vector) => {
  let maxValue = vector[0]

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] > maxValue) {
      maxValue = vector[i]
    }
  }

  return maxValue
}

/**
 * Finds the minimum value in a vector.
 * @param {number[]} vector - Array of numbers.
 * @returns {number} The minimum value in the vector.
 */
const min = (vector) => {
  let minValue = vector[0]

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] < minValue) {
      minValue = vector[i]
    }
  }

  return minValue
}

/**
 * Calculates the average of all values in a vector.
 * @param {number[]} vector - Array of numbers.
 * @returns {number} The average of the values in the vector.
 */
const avg = (vector) => {
  let sum = 0

  for (let i = 0; i < vector.length; i++) {
    sum += vector[i]
  }

  return sum / vector.length
}

/**
 * Calculates the average of values at even positions in a vector.
 * @param {number[]} vector - Array of numbers.
 * @returns {number} The average of values at even positions.
 */
const evenPositionsAvg = (vector) => {
  let sum = 0
  let count = 0

  for (let i = 0; i < vector.length; i += 2) {
    sum += vector[i]
    count++
  }

  return sum / count
}

/**
 * Calculates the average of values at odd positions in a vector.
 * @param {number[]} vector - Array of numbers.
 * @returns {number} The average of values at odd positions.
 */
const oddPositionsAvg = (vector) => {
  let sum = 0
  let count = 0

  for (let i = 1; i < vector.length; i += 2) {
    sum += vector[i]
    count++
  }

  return sum / count
}

/**
 * Computes the dot product (inner product) of two vectors.
 * @param {number[]} vectorA - First vector.
 * @param {number[]} vectorB - Second vector.
 * @returns {number} The dot product of vectorA and vectorB.
 * @throws {Error} If the vectors are not of the same length.
 */
const dotProduct = (vectorA, vectorB) => {
  if (vectorA.length !== vectorB.length) {
    throw new Error('Vectors must have the same length to compute dot product.')
  }

  let product = 0

  for (let i = 0; i < vectorA.length; i++) {
    product += vectorA[i] * vectorB[i]
  }

  return product
}

// Problem 2
console.log('--- Problem 2 ---')
console.log('Generate a random vector and analyze its values.')
let minValue = parseInt(prompt('Enter the minimum value (integer) for the random vector: '))
let maxValue = parseInt(prompt('Enter the maximum value (integer) for the random vector: '))
let size = parseInt(prompt('Enter the size of the random vector (integer): '))

const vector = rndVector(minValue, maxValue, size)


console.log('Generated vector:', vector)
console.log('Maximum value in the vector:', max(vector))
console.log('Minimum value in the vector:', min(vector))
console.log('Average of all values in the vector:', avg(vector))

const evenAvg = evenPositionsAvg(vector)
const oddAvg = oddPositionsAvg(vector)

if (evenAvg > oddAvg) {
  console.log(`The average of the values in the even positions ${evenAvg} is greater than the average of the values in the odd positions ${oddAvg}.`)
} else if (evenAvg < oddAvg) {
  console.log(`The average of the values in the even positions ${evenAvg} is less than the average of the values in the odd positions ${oddAvg}.`)
} else {
  console.log(`The average of the values in the even ${evenAvg} positions is equal to the average of the values in the odd positions ${oddAvg}.`)
}



// Problem 3
console.log()
console.log('--- Problem 3 ---')
console.log('Generate two random vectors and compute their dot product.')
minValue = parseInt(prompt('Enter the minimum value (integer) for the random vectors: '))
maxValue = parseInt(prompt('Enter the maximum value (integer) for the random vectors: '))
size = parseInt(prompt('Enter the size of the random vectors (integer): '))
const vectorA = rndVector(minValue, maxValue, size)
const vectorB = rndVector(minValue, maxValue, size)
console.log('Generated vectorA:', vectorA)
console.log('Generated vectorB:', vectorB)
console.log('Dot product of vectorA and vectorB:', dotProduct(vectorA, vectorB))

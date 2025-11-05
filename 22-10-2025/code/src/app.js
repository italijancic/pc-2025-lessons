import { prompt } from './prompt.js'

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - Minimum integer value
 * @param {number} max - Maximum integer value
 * @returns {number} Random integer between min and max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Creates a matrix with random non-repeating integers from 0 to (rows*cols)-1
 * @param {number} rows - Number of rows
 * @param {number} cols - Number of columns
 * @returns {number[][]} Matrix of random non-repeating integers
 */
const createRandomMatrix = (rows, cols) => {
  const matrix = new Array(rows)
  const totalNumbers = rows * cols
  const usedNumbers = new Array(totalNumbers)

  // Initialize usedNumbers array to false
  for (let i = 0; i < totalNumbers; i++) {
    usedNumbers[i] = false
  }

  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols)
    for (let j = 0; j < cols; j++) {
      let num
      // Conditional to ensure non-repeating numbers
      do {
        num = rndInt(0, totalNumbers - 1)
      } while (usedNumbers[num])
      usedNumbers[num] = true
      matrix[i][j] = num
    }
  }

  return matrix
}

// ============================================================
// PARTE B - CÁLCULOS GLOBALES
// ============================================================

/**
 * Calculates the sum of all elements in a matrix
 * @param {number[][]} matrix - Matrix of integers
 * @returns {number} Total sum of all elements
 */
const sumAll = (matrix) => {
  let sum = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j]
    }
  }

  return sum
}

/**
 * Finds the maximum element in a matrix and its position
 * @param {number[][]} matrix - Matrix of integers
 * @returns {number[]} Array with [maxValue, row, column]
 */
const maxElement = (matrix) => {
  let maxValue = matrix[0][0]
  let maxRow = 0
  let maxCol = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j]
        maxRow = i
        maxCol = j
      }
    }
  }

  return [maxValue, maxRow, maxCol]
}

/**
 * Finds the minimum element in a matrix and its position
 * @param {number[][]} matrix - Matrix of integers
 * @returns {number[]} Array with [minValue, row, column]
 */
const minElement = (matrix) => {
  let minValue = matrix[0][0]
  let minRow = 0
  let minCol = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < minValue) {
        minValue = matrix[i][j]
        minRow = i
        minCol = j
      }
    }
  }

  return [minValue, minRow, minCol]
}

/**
 * Calculates the average of all elements in a matrix
 * @param {number[][]} matrix - Matrix of integers
 * @returns {number} Average of all elements
 */
const average = (matrix) => {
  let sum = 0
  let count = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j]
      count++
    }
  }

  return sum / count
}

// ============================================================
// PARTE C - CÁLCULOS PARCIALES
// ============================================================

/**
 * Calculates the sum of each row in a matrix
 * @param {number[][]} matrix - Matrix of integers
 * @returns {number[]} Vector with the sum of each row
 */
const rowSums = (matrix) => {
  const sums = new Array(matrix.length)

  for (let i = 0; i < matrix.length; i++) {
    let sum = 0
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j]
    }
    sums[i] = sum
  }

  return sums
}

/**
 * Calculates the sum of each column in a matrix
 * @param {number[][]} matrix - Matrix of integers
 * @returns {number[]} Vector with the sum of each column
 */
const colSums = (matrix) => {
  const numCols = matrix[0].length
  const sums = new Array(numCols)

  // Initialize all sums to 0
  for (let j = 0; j < numCols; j++) {
    sums[j] = 0
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sums[j] += matrix[i][j]
    }
  }

  return sums
}

// ============================================================
// PARTE D - OPERACIONES MATRICIALES
// ============================================================

/**
 * Transposes a matrix
 * @param {number[][]} matrix - Matrix to transpose
 * @returns {number[][]} Transposed matrix
 */
const transpose = (matrix) => {
  const rows = matrix.length
  const cols = matrix[0].length
  const transposed = new Array(cols)

  for (let i = 0; i < cols; i++) {
    transposed[i] = new Array(rows)
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i]
    }
  }

  return transposed
}

/**
 * Determines if a square matrix is symmetric
 * @param {number[][]} matrix - Square matrix to check
 * @returns {boolean} True if the matrix is symmetric, false otherwise
 */
const isSymmetric = (matrix) => {
  const rows = matrix.length
  const cols = matrix[0].length

  // Check if the matrix is square
  if (rows !== cols) {
    return false
  }

  // Check if matrix[i][j] == matrix[j][i] for all i, j
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false
      }
    }
  }

  return true
}

/**
 * Multiplies two matrices if their dimensions are compatible
 * @param {number[][]} m1 - First matrix
 * @param {number[][]} m2 - Second matrix
 * @returns {number[][]|string} Product matrix or "Dimensiones inválidas" if incompatible
 */
const multiply = (m1, m2) => {
  const rows1 = m1.length
  const cols1 = m1[0].length
  const rows2 = m2.length
  const cols2 = m2[0].length

  // Check if dimensions are compatible (cols1 must equal rows2)
  if (cols1 !== rows2) {
    return "Dimensiones inválidas"
  }

  // Create result matrix with dimensions rows1 x cols2
  const result = new Array(rows1)

  for (let i = 0; i < rows1; i++) {
    result[i] = new Array(cols2)
    for (let j = 0; j < cols2; j++) {
      result[i][j] = 0
      // Calculate the dot product of row i of m1 and column j of m2
      for (let k = 0; k < cols1; k++) {
        result[i][j] += m1[i][k] * m2[k][j]
      }
    }
  }

  return result
}

/**
 * Compares two matrices for equality
 * @param {number[][]} m1 - First matrix
 * @param {number[][]} m2 - Second matrix
 * @returns {boolean} True if matrices are equal, false otherwise
 */
const areMatricesEqual = (m1, m2) => {
  if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
    return false
  }

  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m1[i].length; j++) {
      if (m1[i][j] !== m2[i][j]) {
        return false
      }
    }
  }

  return true
}

// ============================================================
// PROBLEMA 1 - ANÁLISIS DE MATRIZ ALEATORIA
// ============================================================

console.log('='.repeat(60))
console.log('PROBLEMA 1 - ANÁLISIS DE MATRIZ ALEATORIA')
console.log('='.repeat(60))

const rows = parseInt(prompt('Ingrese el número de filas (N): '))
const cols = parseInt(prompt('Ingrese el número de columnas (M): '))

console.log(`\nCreando matriz de ${rows}x${cols} con valores aleatorios no repetidos entre 0 y ${rows * cols - 1}...\n`)

const matrix = createRandomMatrix(rows, cols)

console.log('Matriz generada:')
console.table(matrix)

console.log('\n--- PARTE B: CÁLCULOS GLOBALES ---')
console.log('Suma total de elementos:', sumAll(matrix))

const [maxVal, maxRow, maxCol] = maxElement(matrix)
console.log(`Elemento máximo: ${maxVal} en posición [${maxRow}, ${maxCol}]`)

const [minVal, minRow, minCol] = minElement(matrix)
console.log(`Elemento mínimo: ${minVal} en posición [${minRow}, ${minCol}]`)

console.log('Promedio de todos los elementos:', average(matrix).toFixed(2))

console.log('\n--- PARTE C: CÁLCULOS PARCIALES ---')
console.log('Suma de cada fila:', rowSums(matrix))
console.log('Suma de cada columna:', colSums(matrix))

console.log('\n--- PARTE D: OPERACIONES MATRICIALES ---')
const transposedMatrix = transpose(matrix)
console.log('Matriz transpuesta:')
console.table(transposedMatrix)

console.log('¿Es simétrica la matriz?', isSymmetric(matrix) ? 'Sí' : 'No')

// ============================================================
// PROBLEMA 2 - COMPROBACIÓN DE PROPIEDADES
// ============================================================

console.log('\n' + '='.repeat(60))
console.log('PROBLEMA 2 - COMPROBACIÓN DE PROPIEDADES')
console.log('='.repeat(60))

let A = [
  [2, 4, 6],
  [4, 5, 8],
  [6, 8, 9]
]

let B = [
  [1, 2, 3],
  [0, 4, 5],
  [6, 7, 8]
]

console.log('\nMatriz A:')
console.table(A)

console.log('\nMatriz B:')
console.table(B)

// 1. Compruebe cuál de ellas es simétrica
console.log('\n--- 1. VERIFICACIÓN DE SIMETRÍA ---')
console.log('¿Es A simétrica?', isSymmetric(A) ? 'Sí' : 'No')
console.log('¿Es B simétrica?', isSymmetric(B) ? 'Sí' : 'No')

// 2. Calcule el producto A * B y B * A
console.log('\n--- 2. PRODUCTOS MATRICIALES ---')
const AB = multiply(A, B)
console.log('Producto A * B:')
console.table(AB)

const BA = multiply(B, A)
console.log('\nProducto B * A:')
console.table(BA)

// 3. Transponga ambas y verifique que (A * B)^T = B^T * A^T
console.log('\n--- 3. VERIFICACIÓN DE PROPIEDAD DE TRANSPOSICIÓN ---')

const AT = transpose(A)
console.log('Transpuesta de A (A^T):')
console.table(AT)

const BT = transpose(B)
console.log('\nTranspuesta de B (B^T):')
console.table(BT)

const AB_T = transpose(AB)
console.log('\nTranspuesta de (A * B):')
console.table(AB_T)

const BT_AT = multiply(BT, AT)
console.log('\nProducto B^T * A^T:')
console.table(BT_AT)

console.log('\n¿Se cumple (A * B)^T = B^T * A^T?',
  areMatricesEqual(AB_T, BT_AT) ? 'Sí' : 'No')

// 4. Interpretación de resultados
console.log('\n--- 4. INTERPRETACIÓN DE RESULTADOS ---')
console.log('• La matriz A es simétrica porque A[i][j] = A[j][i] para todo i, j.')
console.log('• La matriz B no es simétrica (por ejemplo: B[0][1]=2 pero B[1][0]=0).')
console.log('• A * B ≠ B * A, lo que confirma que la multiplicación matricial NO es conmutativa.')
console.log('• Se verifica la propiedad: (A * B)^T = B^T * A^T')
console.log('  Esta es una propiedad fundamental del álgebra matricial.')
console.log('='.repeat(60))

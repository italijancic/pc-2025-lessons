import { prompt } from './prompt.js'
/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number} Random integer within range.
 */
function rndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Generates a MxN matrix with random integer values.
 * @param {number} N - Number of rows (panels).
 * @param {number} M - Number of columns (zones).
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number[][]} Generated matrix.
 */
function generateProductionMatrix(N, M, min, max) {
  let matrix = []

  for (let i = 0; i < N; i++) {
    matrix[i] = []
    for (let j = 0; j < M; j++) {
      matrix[i][j] = rndInt(min, max)
    }
  }

  return matrix
}

/**
 * Generates a vector with random integer values.
 * @param {number} M - Size of the vector (zones).
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number[]} Generated vector.
 */
function generateIrradiationVector(M, min, max) {
  let vector = []

  for (let i = 0; i < M; i++) {
    vector[i] = rndInt(min, max)
  }

  return vector.slice()
}

/**
 * Calculates the total daily energy production of all solar panels.
 * @param {number[][]} productionMatrix - Production matrix P[N][M] in kWh.
 * @returns {number} Total energy production in kWh.
 */
function calculateTotalProduction(productionMatrix) {
  let total = 0

  for (let i = 0; i < productionMatrix.length; i++) {
    for (let j = 0; j < productionMatrix[i].length; j++) {
      total += productionMatrix[i][j]
    }
  }

  return total
}

/**
 * Calculates the efficiency vector E[M] for each zone.
 * @param {number[][]} productionMatrix - Production matrix P[N][M] in kWh.
 * @param {number[]} irradiationVector - Irradiation vector I[M] in kWh/m².
 * @returns {number[]} Efficiency vector E[M].
 */
function calculateEfficiencyVector(productionMatrix, irradiationVector) {
  let M = productionMatrix[0].length
  let efficiencyVector = []

  for (let j = 0; j < M; j++) {
    let zoneProduction = 0

    // Sum production in zone j
    for (let i = 0; i < productionMatrix.length; i++) {
      zoneProduction += productionMatrix[i][j]
    }

    // Calculate efficiency: E[j] = sum of energy in zone j / irradiation in zone j
    efficiencyVector[j] = Number((zoneProduction / irradiationVector[j]).toFixed(1))
  }

  return efficiencyVector.slice()
}

/**
 * Finds the zone with maximum energy efficiency.
 * @param {number[]} efficiencyVector - Efficiency vector E[M].
 */
function findMaxEfficiencyZone(efficiencyVector) {
  let maxEfficiency = efficiencyVector[0]
  let maxZone = 0

  for (let j = 1; j < efficiencyVector.length; j++) {
    if (efficiencyVector[j] > maxEfficiency) {
      maxEfficiency = efficiencyVector[j]
      maxZone = j
    }
  }

  console.log(`\n⭐ ZONA CON MAYOR EFICIENCIA ENERGÉTICA:`)
  console.log(`  - Zona ${maxZone} con eficiencia de ${maxEfficiency}`)
}

/**
 * Finds the panel and zone with maximum energy production.
 * @param {number[][]} productionMatrix - Production matrix P[N][M] in kWh.
 */
function findMaxProduction(productionMatrix) {
  let maxProduction = productionMatrix[0][0]
  let maxPanel = 0
  let maxZone = 0

  for (let i = 0; i < productionMatrix.length; i++) {
    for (let j = 0; j < productionMatrix[i].length; j++) {
      if (productionMatrix[i][j] > maxProduction) {
        maxProduction = productionMatrix[i][j]
        maxPanel = i
        maxZone = j
      }
    }
  }

  console.log(`\n🔥 MÁXIMA PRODUCCIÓN ENERGÉTICA:`)
  console.log(`  - Panel ${maxPanel} - Zona ${maxZone} con ${maxProduction} kWh`)
}

/**
 * Finds the panel and zone with minimum energy production.
 * @param {number[][]} productionMatrix - Production matrix P[N][M] in kWh.
 */
function findMinProduction(productionMatrix) {
  let minProduction = productionMatrix[0][0]
  let minPanel = 0
  let minZone = 0

  for (let i = 0; i < productionMatrix.length; i++) {
    for (let j = 0; j < productionMatrix[i].length; j++) {
      if (productionMatrix[i][j] < minProduction) {
        minProduction = productionMatrix[i][j]
        minPanel = i
        minZone = j
      }
    }
  }

  console.log(`\n❄️ MÍNIMA PRODUCCIÓN ENERGÉTICA:`)
  console.log(`  - Panel ${minPanel} - Zona ${minZone} con ${minProduction} kWh`)
}

/**
 * Prints a matrix in table format.
 * @param {number[][]} matrix - The matrix to print.
 * @param {string} title - Title of the matrix.
 */
function printMatrix(matrix, title) {
  console.log(`\n${title}:`)
  console.table(matrix)
}

/**
 * Prints a vector in table format.
 * @param {number[]} vector - The vector to print.
 * @param {string} title - Title of the vector.
 */
function printVector(vector, title) {
  console.log(`\n${title}:`)
  console.table(vector)
}

// ========== MAIN ==========

console.log('═══════════════════════════════════════════════════════════')
console.log('   OPTIMIZACIÓN DE ENERGÍA EN PANELES SOLARES')
console.log('═══════════════════════════════════════════════════════════')

// Configuration
const N = parseInt(prompt(`Ingrese la cantidad de paneles solares (N): `))
const M = parseInt(prompt(`Ingrese la cantidad de zonas geográficas (M): `))

// 1. Generate random data
console.log(`\n📊 Generando datos aleatorios para ${N} paneles en ${M} zonas...`)
const productionMatrix = generateProductionMatrix(N, M, 5, 50)
const irradiationVector = generateIrradiationVector(M, 2, 10)

// 2. Calculate total production
const totalProduction = calculateTotalProduction(productionMatrix)

// 3. Calculate efficiency vector
const efficiencyVector = calculateEfficiencyVector(productionMatrix, irradiationVector)

// 4. Find maximum and minimum production
// (will be called in the report section)

// 5. Print final report
console.log(`\n`)
console.log(`═══════════════════════════════════════════════════════════`)
console.log(`                    REPORTE FINAL`)
console.log(`═══════════════════════════════════════════════════════════`)

printMatrix(productionMatrix, '☀️ Matriz de Producción P[N][M] (kWh)')
printVector(irradiationVector, '🌞 Vector de Irradiación Solar I[M] (kWh/m²)')
printVector(efficiencyVector, '⚡ Vector de Eficiencia Energética E[M]')

console.log(`\n💡 PRODUCCIÓN TOTAL DIARIA:`)
console.log(`  - Total: ${totalProduction} kWh`)

findMaxEfficiencyZone(efficiencyVector)
findMaxProduction(productionMatrix)
findMinProduction(productionMatrix)

console.log('\n═══════════════════════════════════════════════════════════')
console.log('                    FIN DEL ANÁLISIS')
console.log('═══════════════════════════════════════════════════════════\n')

import { prompt } from './prompt.js'

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - Minimum integer value
 * @param {number} max - Maximum integer value
 * @returns {number} Random integer between min and max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Generates a vector of random integers representing daily temperatures
 * @param {number} min - Minimum temperature
 * @param {number} max - Maximum temperature
 * @param {number} n - Number of days (vector size)
 * @returns {Array<number>} Vector of random temperatures
 */
const rndVector = (min, max, n) => {
  const v = new Array(n)

  for (let i = 0; i < n; i++) {
    v[i] = rndInt(min, max)
  }

  return v.slice()
}

/**
 * Calculates the average of numeric values in a vector
 * @param {Array<number>} v - Vector of numbers
 * @returns {number} Average of the values
 */
const avgVector = (v) => {
  let sum = 0

  for (let i = 0; i < v.length; i++) {
    sum += v[i]
  }

  return sum / v.length
}

/**
 * Finds the maximum value in a vector
 * @param {Array<number>} v - Vector of numbers
 * @returns {number} Maximum value
 */
const maxVector = (v) => {
  let max = v[0]

  for (let i = 1; i < v.length; i++) {
    if (v[i] > max) {
      max = v[i]
    }
  }

  return max
}

/**
 * Finds the minimum value in a vector
 * @param {Array<number>} v - Vector of numbers
 * @returns {number} Minimum value
 */
const minVector = (v) => {

  let min = v[0]

  for (let i = 1; i < v.length; i++) {
    if (v[i] < min) {
      min = v[i]
    }
  }

  return min
}

/**
 * Counts how many elements in the vector are greater or equal than threshold
 * @param {Array<number>} v - Vector of numbers
 * @param {number} threshold - Threshold value
 * @returns {number} Count of elements >= threshold
 */
const countGreaterEqual = (v, threshold) => {
  let count = 0

  for (let i = 0; i < v.length; i++) {
    if (v[i] >= threshold) {
      count++
    }
  }

  return count
}

/**
 * Counts how many elements in the vector are smaller than threshold
 * @param {Array<number>} v - Vector of numbers
 * @param {number} threshold - Threshold value
 * @returns {number} Count of elements < threshold
 */
const countSmaller = (v, threshold) => {
  let count = 0

  for (let i = 0; i < v.length; i++) {
    if (v[i] < threshold) {
      count++
    }
  }
  return count
}

/**
 * Inserts exactly `failures` failures ('X') at random distinct positions in the vector
 * @param {Array<number>} v - Original vector of temperatures
 * @param {number} failures - Number of failures to insert
 * @returns {Array<number|string>} New vector with 'X' in failure positions
 */
const insertFailures = (v, failures) => {
  const w = new Array(v.length)

  for (let i = 0; i < v.length; i++) w[i] = v[i]
  let inserted = 0

  // prevent infinite loop if failures > length
  const maxInsertions = failures > v.length ? v.length : failures

  while (inserted < maxInsertions) {
    // random index between 0 and v.length-1
    const idx = rndInt(0, v.length - 1)

    if (w[idx] !== 'X') {
      w[idx] = 'X'
      inserted++
    }
  }

  return w.slice()
}

/**
 * Counts the number of failures ('X') in the vector
 * @param {Array<number|string>} v - Vector with possible failures
 * @returns {number} Number of failures
 */
const countFailures = (v) => {
  let count = 0

  for (let i = 0; i < v.length; i++) {
    if (v[i] === 'X') {
      count++
    }
  }

  return count
}

/**
 * Calculates the average of valid numeric temperatures (ignores 'X')
 * @param {Array<number|string>} v - Vector with possible failures
 * @returns {number} Average of valid numbers, or NaN if none valid
 */
const avgValid = (v) => {
  let sum = 0
  let count = 0

  for (let i = 0; i < v.length; i++) {
    if (v[i] !== 'X') {
      sum += v[i]
      count++
    }
  }

  // Example of ternary operator
  return count === 0 ? NaN : sum / count
}

/**
 * Finds the longest streak of consecutive days strictly above threshold
 * (treats 'X' as breaking the streak)
 * @param {Array<number|string>} v - Vector of temperatures
 * @param {number} threshold - Threshold temperature
 * @returns {number} Longest streak length
 */
const longestStreak = (v, threshold) => {
  let streak = 0
  let maxStreak = 0

  for (let i = 0; i < v.length; i++) {
    if (typeof v[i] === 'number' && v[i] > threshold) {
      streak++
      if (streak > maxStreak) maxStreak = streak
    } else {
      streak = 0
    }
  }
  return maxStreak
}

/**
 * Calculates average of temperatures on even days (day 2,4,... => indices 1,3,...)
 * Ignores 'X' entries
 * @param {Array<number|string>} v - Vector of temperatures
 * @returns {number} Average of even days, or NaN if none valid
 */
const avgEvenDays = (v) => {
  let sum = 0
  let count = 0

  for (let i = 1; i < v.length; i += 2) {
    if (v[i] !== 'X') {
      sum += v[i]
      count++
    }
  }

  return count === 0 ? NaN : sum / count
}

/**
 * Calculates average of temperatures on odd days (day 1,3,... => indices 0,2,...)
 * Ignores 'X' entries
 * @param {Array<number|string>} v - Vector of temperatures
 * @returns {number} Average of odd days, or NaN if none valid
 */
const avgOddDays = (v) => {
  let sum = 0
  let count = 0
  for (let i = 0; i < v.length; i += 2) {
    if (v[i] !== 'X') {
      sum += v[i]
      count++
    }
  }

  return count === 0 ? NaN : sum / count
}

/**
 * Finds the first day where temperature < 0 (ignores 'X')
 * @param {Array<number|string>} v - Vector of temperatures
 * @returns {number} Day number (1-based), or -1 if none
 */
const firstFrostDay = (v) => {

  for (let i = 0; i < v.length; i++) {
    if (typeof v[i] === 'number' && v[i] < 0) {
       return i + 1
    }
  }

  return -1
}

/**
 * Counts sign transitions between consecutive numeric readings (>=0 <-> <0)
 * Ignores 'X' entries and only counts when both consecutive values are numeric
 * @param {Array<number|string>} v - Vector of temperatures
 * @returns {number} Number of sign transitions
 */
const signTransitions = (v) => {
  let count = 0
  let prevIndex = -1

  // find first numeric
  for (let i = 0; i < v.length; i++) {
    if (typeof v[i] === 'number') {
      prevIndex = i
      break
    }
  }

  if (prevIndex === -1) {
    return 0
  }

  for (let i = prevIndex + 1; i < v.length; i++) {
    if (typeof v[i] === 'number') {
      const prev = v[prevIndex]
      const curr = v[i]
      if ((prev >= 0 && curr < 0) || (prev < 0 && curr >= 0)) {
         count++
      }
      prevIndex = i
    }
  }

  return count
}

/**
 * Finds the first day when cumulative average (day-by-day) reaches or exceeds threshold
 * Ignores 'X' readings (i.e., cumulative average computed only with valid numbers up to that day)
 * Note: cumulative average computed with only valid readings seen so far
 * @param {Array<number|string>} v - Vector of temperatures
 * @param {number} threshold - Threshold average
 * @returns {number} Day number (1-based) when threshold is first reached, or -1 if never
 */
const dayCumulativeAverage = (v, threshold) => {
  let sum = 0
  let count = 0

  for (let i = 0; i < v.length; i++) {
    if (typeof v[i] === 'number') {
      sum += v[i]
      count++
    }
    if (count > 0) {
      const avg = sum / count
      if (avg >= threshold){
        return i + 1
      }
    }
  }

  return -1
}

// -------------------- Inputs over CLI --------------------
const minValue = parseInt(prompt('Enter the minimum temperature (°C): '))
const maxValue = parseInt(prompt('Enter the maximum temperature (°C): '))
const size = parseInt(prompt('Enter the number of days: '))

// Problem 1: Temperatures vector generation
const temps = rndVector(minValue, maxValue, size)
console.log('Generated temperature vector (°C):', temps)

// Problem 2: basic stats
console.log('Average temperature:', avgVector(temps).toFixed(1))
console.log('Maximum temperature:', maxVector(temps))
console.log('Minimum temperature:', minVector(temps))
console.log('Days >= 30 °C:', countGreaterEqual(temps, 30))
console.log('Days < 0 °C:', countSmaller(temps, 0))

// Problem 3: failures
const failuresCount = parseInt(prompt('Enter number of failures to inject (integer): '))
const tempsWithFailures = insertFailures(temps, failuresCount)
console.log('Original temperature vector (°C):', temps)
console.log('Temperature vector with failures:', tempsWithFailures)
console.log('Number of failed readings:', countFailures(tempsWithFailures))
const avgValidTemps = avgValid(tempsWithFailures)
console.log('Average of valid temperatures:', Number.isNaN(avgValidTemps) ? 'No valid readings' : avgValidTemps.toFixed(1))

// Problem 4: longest streak above threshold
const streakThreshold = parseInt(prompt('Enter threshold for longest streak (°C): '))
console.log('Longest streak above', streakThreshold, '°C:', longestStreak(temps, streakThreshold))

// Problem 5: even/odd days, first frost, sign transitions
const avgEven = avgEvenDays(tempsWithFailures)
const avgOdd = avgOddDays(tempsWithFailures)
console.log('Average even days:', Number.isNaN(avgEven) ? 'No valid even-day readings' : avgEven.toFixed(1))
console.log('Average odd days:', Number.isNaN(avgOdd) ? 'No valid odd-day readings' : avgOdd.toFixed(1))
const firstFrost = firstFrostDay(temps)
console.log(firstFrost === -1 ? 'No frost days' : 'First frost day: Day ' + firstFrost)
console.log('Sign transitions (>=0 <-> <0):', signTransitions(temps))

// Problem 6: day when cumulative average reaches/exceeds threshold
const cumThreshold = parseFloat(prompt('Enter cumulative average threshold (°C): '))
const dayReached = dayCumulativeAverage(tempsWithFailures, cumThreshold)
console.log(dayReached === -1 ? 'Cumulative average never reached the threshold' : 'The average reached the threshold at day ' + dayReached)

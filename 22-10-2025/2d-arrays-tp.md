### 📋 Trabajo Práctico: Operaciones y Análisis de Matrices

Autor: Talijancic, Iván
Materia: Programación en Computación
Tema: Arrays bidimensionales (matrices) en JavaScript
Fecha: 23-10-2024

#### 🎯 Objetivos

El presente trabajo tiene como objetivo consolidar los siguientes conceptos:
	•	Declaración e inicialización de arrays bidimensionales.
	•	Recorrido de matrices utilizando estructuras de control (for, while).
	•	Implementación de funciones que realicen cálculos y transformaciones sobre matrices.
	•	Aplicación de conceptos de simetría, transposición y producto matricial.
	•	Desarrollo de código claro, modular y correctamente comentado.

#### 🧩 Consignas Generales
	1.	El programa debe desarrollarse en JavaScript, utilizando solo estructuras básicas del lenguaje:
	•	Bucles for, while o do-while.
	•	Condicionales if u otra estructura de control de flujo vista en clase.
	•	Acceso por índice (matriz[i][j]).
	2.	**No se permite el uso de métodos avanzados de arrays** `(map, reduce, forEach, filter, etc.)`.
	3.	Las funciones deben retornar un único valor o matriz, y **no objetos**.
	4.	Cada función debe incluir comentarios descriptivos al estilo estándar:

```js
/**
 * Calcula la suma de todos los elementos de una matriz.
 * @param {number[][]} matrix - Matriz de números enteros
 * @returns {number} - Suma total de los elementos
 */
 ```

	5.	Todas las matrices deben inicializarse mediante bucles, sin utilizar fill() ni push().


#### 📘 Enunciado del Problema

##### Problema 1 – Análisis de una Matriz Aleatoria

Desarrolle un programa en JavaScript que permita realizar un análisis completo de una matriz de números enteros aleatorios.

###### Parte A – Inicialización

Implemente una función que permita crear e inicializar una matriz de `N` filas y `M` columnas con valores enteros aleatorios no repetidos, comprendidos entre `0` y `M*N - 1`

```js
const createRandomMatrix = (rows, cols) => { ... }
```

##### Parte B – Cálculos globales

Implemente las siguientes funciones:
	•	`sumAll(matrix)` → Retorna la suma total de los elementos.
	•	`maxElement(matrix)` → Retorna el máximo y su posición [fila, columna].
	•	`minElement(matrix)` → Retorna el mínimo y su posición [fila, columna].
	•	`average(matrix)` → Retorna el promedio de todos los elementos.

##### Parte C – Cálculos parciales

Implemente:
	•	`rowSums(matrix)` → Retorna un vector con la suma de cada fila.
	•	`colSums(matrix)` → Retorna un vector con la suma de cada columna.

##### Parte D – Operaciones Matriciales

Implemente las siguientes funciones:
	1.	`transpose(matrix)` → Retorna la matriz transpuesta.
	2.	`isSymmetric(matrix)` → Determina si una matriz cuadrada es simétrica.
	3.	`multiply(m1, m2)` → Retorna el producto matricial entre m1 y m2 si sus dimensiones son compatibles.

En caso de dimensiones inválidas, la función debe retornar la cadena "Dimensiones inválidas".

##### 🧠 Problema 2 – Comprobación de Propiedades

Dadas las siguientes matrices:

```js
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
```

1.	Compruebe cuál de ellas es simétrica.
2.	Calcule el producto A * B y B * A.
3.	Transponga ambas y verifique si se cumple que (A * B)^T = B^T * A^T.
4.	Interprete los resultados en base al álgebra matricial.

##### 💡 Sugerencia para los estudiantes

Antes de comenzar a programar:
	•	Planifique el recorrido con bucles antes de codificar.
	•	Use `console.log()` o `console.table()` para verificar el comportamiento de cada función antes de combinarlas.

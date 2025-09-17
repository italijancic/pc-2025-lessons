## 1er Exámen Parcial
Autor: Talijancic Ivan

#### Problema 1
Escriba una **función** en `JavaScript` que le permita crear un vector aleatorio de `n-elementos` **enteros (positivos, negativos y/o cero)**, para lo cuál:

- Dicha función tomará los siquientes argumentos:
  1. El valor mínimo del rango de definición del vector aleatorio
  2. El valor máximo del rango de definición del vector aleatorio
  3. La cantidad de elementos del vector aleatorio

Se presenta a continuación un código de ejemplo, visualizar la funcionalidad del código a desarrollar:

```js
// Ejemplo de uso
const minValue = -10
const maxValue = 10
const vectorSize = 5

const randomVector = getRandomVector(minValue, maxValue, vectorSize)
console.log(randomVector)

// Salida de consola
[ -10, 8, 0, 1, 7 ]
```

#### Problema 2
Utilizando la **función desarrollada en el inciso anterior** escribir una programa que le permita, para un vector aleatorio creado:

1. Implementar el acceso de los parámetros de la función por el CLI
2. Hallar el valor `máximo` y `mínimo` de dicho vector
2. Hallar el `promedio` de todos los valores
3. Determinar si el **promedio** de los valores en las **posiciones pares** es `mayor, menor` o `igual` al promedio de los valores en las **posiciones impares**. Para indicar el resultado de este análisis debe `imprimir por consola`, alguno de los siguientes mensajes:
    - El promedio de las posiciones pares es mayor
    - El promedio de las posiciones pares es menor
    - Los promedios son iguales


#### Problema 3

Utilizando la **función desarrollada en el Problema 1** para la creación de vectores aleatorios, escribir un programa que le permita:

1. Crear **dos vectores aleatorios** de igual tamaño, dentro del mismo rango de valores definidos por el usuario.
2. Calcular el **producto interno** (también llamado **producto escalar**) de los dos vectores.

   - El producto interno se define como:

   \[
   \vec{A} \cdot \vec{B} = \sum_{i=1}^{n} A_i \cdot B_i
   \]

3. Imprimir ambos vectores generados y el resultado del **producto interno**.

**Ejemplo de salida en consola:**

```bash
Vector A: [ 2, -1, 3 ]
Vector B: [ 0, 4, -2 ]
Producto interno: -10
```

### Ejemplo de salida de terminal
```bash
--- Problem 2 ---
Generate a random vector and analyze its values.
Enter the minimum value (integer) for the random vector: 0
Enter the maximum value (integer) for the random vector: 10
Enter the size of the random vector (integer): 10
Generated vector: [
  3, 6, 9, 7, 4,
  6, 5, 5, 1, 5
]
Maximum value in the vector: 9
Minimum value in the vector: 1
Average of all values in the vector: 5.1
The average of the values in the even positions 4.4 is less than the average of the values in the odd positions 5.8.

--- Problem 3 ---
Generate two random vectors and compute their dot product.
Enter the minimum value (integer) for the random vectors: 0
Enter the maximum value (integer) for the random vectors: 10
Enter the size of the random vectors (integer): 3
Generated vectorA: [ 9, 0, 4 ]
Generated vectorB: [ 6, 10, 0 ]
Dot product of vectorA and vectorB: 54
```

# 📋 TP: Práctica primer parcial
**Autor:** Talijancic Iván

## Problema 1
Escriba una función en `JavaScript` que permita crear un vector de `n` elementos, donde cada elemento representa la **temperatura diaria** medida por un sensor.

- Los valores de las temperaturas deben generarse aleatoriamente como **números enteros** dentro de un rango definido por el usuario (por ejemplo, entre -10 y 40 °C).

**Ejemplo de salida esperada:**
```bash
Enter the minimum temperature (°C): -10
Enter the maximum temperature (°C): 40
Enter the number of days: 31
Generated temperature vector (°C): [
   9,  9, 19, 25, -5, 40, -1, 32, 7,
  11, 30, 18, 17, 17,  3, 18, 16, 9,
  26,  7, -2, 38, -3, 30, -1, 26, 0,
   5, 31, 22,  1
]
```

## Problema 2
Utilizando la función desarrollada en el **Problema 1**, escribir un programa que permita:
	1.	Calcular la temperatura media durante el período.
	2.	Hallar la temperatura máxima y la mínima.
	3.	Determinar en cuántos días la temperatura fue mayor o igual a 30 °C (días de calor extremo).
	4.	Determinar en cuántos días la temperatura fue menor a 0 °C (días con heladas).

Ejemplo de salida esperada:

```bash
Temperature vector: [ 10, 25, -3, 30, 18, 35 ]
Average temperature: 19.1 °C
Maximum temperature: 35 °C
Minimum temperature: -3 °C
Days with heatwave (>= 30 °C): 2
Days with frost (< 0 °C): 1
```

## Problema 3
Se desea simular **fallas en las mediciones del sensor**. Para ello:
	1.	Modifique aleatoriamente algunas posiciones del vector de temperaturas, reemplazando el valor numérico por la letra 'X' (representando una lectura fallida).
	2.	Calcule la cantidad de lecturas fallidas que se generaron.
	3.	Calcule nuevamente la media de temperaturas válidas (ignorando los días con 'X').

Ejemplo de salida esperada:

```bash
Original temperature vector (°C): [ 10, 22, -5, 35, 28 ]
Temperature vector with failures: [ 10, 'X', -5, 35, 'X' ]
Number of failed readings: 2
Average of valid temperatures: 13.3 °C
```


## Problema 4
Implemente un algoritmo que permita determinar el número más largo de días consecutivos en los que la temperatura estuvo por encima de un valor umbral definido por el usuario (por ejemplo, 25 °C). Este algoritmo debe conteplar y manejar las lecturas fallidas.

Ejemplo de salida esperada:

```bash
Threshold: 25
Temperature vector: [ 20, 28, 30, 32, 18, 27, 29 ]
Longest streak above threshold: 3 days
```

## Problema 5
Escriba un programa que permita:
	1.	Comparar la temperatura media de los días pares contra la temperatura media de los días impares.
	2.	Identificar el primer día en que ocurrió una helada (temperatura < 0 °C).
	3.	Contar cuántas veces la temperatura cambió de positivo a negativo (transiciones a heladas).
  4. Este algoritmo debe conteplar y manejar las lecturas fallidas.

Ejemplo de salida esperada:

```bash
Temperature vector: [ 5, -2, 8, -1, 12, -5, 20 ]
Average of even days: 0.3 °C
Average of odd days: 11.7 °C
First frost day: Day 2
Positive-to-negative transitions: 3
```

## Problema 6
Se desea detectar en qué momento la media acumulada de las temperaturas alcanza o supera un umbral programable definido por el usuario.
	1.	Calcular la media acumulada día a día.
	2.	Indicar en qué número de medición/día la media acumulada alcanzó o superó el umbral.
  3.  Este algoritmo debe conteplar y manejar las lecturas fallidas.

Ejemplo de salida esperada:

```bash
Temperature vector: [ 10, 15, 20, 25, 30 ]
Threshold: 18
Day when threshold is reached: Day 4
```

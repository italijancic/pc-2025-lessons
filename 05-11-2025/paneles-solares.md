### **TP - Programación en Computación**
**Docentes:**
- Talijancic Ivan

#### **Problema: Optimización de Energía en Paneles Solares**

Una empresa dedicada a la generación de energía a través de paneles solares necesita analizar la producción energética diaria de **N paneles solares** distribuidos en **M zonas**. La producción de cada panel se mide en **kWh** y se organiza en una **matriz P[N][M]**, donde cada valor representa la producción diaria de un panel en una zona específica.

Además, se debe analizar la **irradiación solar diaria** en cada zona, representada en un vector **I[M]**, que indica la cantidad de energía solar recibida en kWh/m².

#### **Requerimientos**

1. **Generación de Datos Aleatorios:**
   - Programar una función que genere aleatoriamente la **matriz P[N][M]**. Los valores deben ser enteros entre **5 y 50 kWh**.
   - Programar una función que genere aleatoriamente el vector **I[M]** de irradiación solar. Los valores deben ser enteros entre **2 y 10 kWh/m²**.

2. **Cálculo de Producción Total:**
   - Programar una función que calcule la **producción total diaria de energía** generada por todos los paneles solares.

3. **Eficiencia Energética por Zona:**
   - Programar una función que calcule un **vector de eficiencia E[M]**, donde cada posición contiene el cociente entre la suma de la producción de energía en una zona y la irradiación solar en esa misma zona:
     \[
     E[j] = \frac{\text{Suma de energía en zona j}}{\text{Irradiación solar en zona j}}
     \]
   - Imprimir un mensaje indicando cuál es la zona con **mayor eficiencia energética** y cuál es su valor.

4. **Producción Máxima y Mínima:**
   - Programar funciones que determinen:
     - El **panel solar** (fila) y la **zona** (columna) donde se registró la **máxima producción energética** y el valor de la misma.
     - El **panel solar** (fila) y la **zona** (columna) donde se registró la **mínima producción energética** y el valor de la misma.

5. **Reporte Final:**
   - Imprimir la matriz de producción, el vector de irradiación y el vector de eficiencia energética.
   - Imprimir mensajes con los resultados de la producción total, máxima y mínima, y la zona con mayor eficiencia.


#### **Restricciones**
- No se permite el uso de los siguientes métodos de arrays: `filter`, `reduce`, `flat`, `find`, `map`, `sort` ni `indexOf`, ni ningún otro método no visto en clase.
- Utilice exclusivamente bucles tradicionales como `for`, `while` o `do-while` para recorrer y procesar los datos.
- No se permite el uso de `json` en retornos de funciones.

#### **Ejemplo de Entrada y Salida**

##### **Entrada:**
- **Matriz P[N][M]:**
```js
[[12, 18, 25],
 [30, 22, 10],
 [15, 35, 20]]
```
- **Vector I[M]:**

```js
[5, 8, 10]
```

##### **Salida Esperada:**
- **Producción total:** `187 kWh`
- **Vector de eficiencia E:** `[11.4, 9.4, 5.5]`
- **Zona con mayor eficiencia:** `Zona 0` con eficiencia `11.4`
- **Máxima producción:** `Panel 2 - Zona 1` con `35 kWh`
- **Mínima producción:** `Panel 1 - Zona 2` con `10 kWh`

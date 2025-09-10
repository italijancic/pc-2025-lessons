# 📝 Trabajo Práctico – Variables, Nombres y Control de Flujo en JavaScript
Autor: Ing. Talijancic Ivan

## Consigna
Resolver los siguientes problemas  en `JavaScript` utilizando **Node.js**. Tenga en cuenta:

- La aplicación de las buenas prácticas detalladas en clases:
  - convenciones de nombres
  - tipos de variables
  - casos de uso de estructuras de control de flujo


### **Problema 1 – Declaración con `var`, `let` y `const`**
Escribe un programa que:
1. Declare una variable con `var`, otra con `let` y otra con `const`.
2. Intente **reasignar** valores a cada una.
3. Muestra en pantalla qué variables permiten reasignación y cuáles no.


### **Problema 2 – Hoisting con `var`**
Escribe un programa que:
1. Declare una variable con `var` después de usarla en un `console.log`.
2. Explica en un comentario por qué se imprime `undefined` en vez de error.


### **Problema 3 – Ámbito de Bloque con `let`**
Escribe un programa que:
1. Declare una variable `let x = 10` dentro de un bloque `{ }`.
2. Intente acceder a `x` fuera del bloque.
3. Muestra el error que ocurre y explícalo en un comentario.

### **Problema 4 – Convenciones de Nombres**
Crea un archivo llamado `naming_conventions.js` donde declares:
1. Una variable en **camelCase** llamada `studentAge`.
2. Una clase en **PascalCase** llamada `Student`.
3. Una constante en **snake_case** llamada `MAX_SCORE`.
Explica con un `console.log` cuál es el estilo usado en cada caso.

### **Problema 5 – Mayor de Edad**
Usando el módulo `prompt`, pide la edad de una persona y:
- Si es menor de 18 → imprime "Menor de edad".
- Si tiene exactamente 18 → imprime "Exactamente 18".
- Si es mayor de 18 → imprime "Mayor de edad".

### **Problema 6 – Promedio de Notas**
Pide tres notas enteras al usuario con `prompt`. Calcula el promedio y:
- Si es mayor o igual a 6 → imprime "Aprobado".
- Si es menor a 6 → imprime "Reprobado".

### **Problema 7 – Día de la Semana (switch-case)**
Pide al usuario un número del 1 al 7 y muestra el nombre del día usando `switch-case`.
Ejemplo: `1 → Lunes`, `2 → Martes`, ..., `7 → Domingo`.


### **Problema 9 – Operadores Lógicos**
Pide al usuario su edad y si tiene DNI (true/false).
- Imprime `true` si puede votar (edad ≥ 16 **y** tiene DNI).
- Imprime `false` en caso contrario.


### **Problema 10 – Calculadora Básica**
Pide al usuario dos números y una operación (`+`, `-`, `*`, `/`).
Usa `switch-case` para realizar la operación e imprimir el resultado.

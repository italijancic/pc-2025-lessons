# 📋 20-08-2025: Class Notes
Autor: Ivan Talijancic

## Introducción a la Programación y Herramientas

### **Diferencias entre `var`, `let`, y `const` en JavaScript**

En `JavaScript`, existen tres maneras principales de declarar variables: `var`, `let`, y `const`. Cada una tiene sus propias características, usos, ventajas y desventajas. Aquí te explico de forma básica las diferencias:

#### **1. `var`**
- **Ámbito (Scope):** Las variables declaradas con `var` tienen un ámbito de función o global, lo que significa que si se declaran dentro de una función, solo existen dentro de esa función. Si se declaran fuera de cualquier función, son globales.
- **Re-declaración:** Puedes re-declarar una variable con `var` en el mismo ámbito sin generar errores.

**Ejemplo:**
```javascript
function ejemploVar() {
  console.log(nombre); // undefined (por el hoisting)
  var nombre = 'Iván';
  console.log(nombre); // Iván
}

ejemploVar();
```

**Ventajas:** Simple y flexible, funciona en todas las versiones de JavaScript.
**Desventajas:** Puede generar errores difíciles de rastrear debido a su comportamiento de hoisting y su ámbito global.

#### **2. `let`**
- **Ámbito (Scope):** Las variables declaradas con `let` tienen un ámbito de bloque, lo que significa que solo existen dentro del bloque de código en el que fueron definidas (entre llaves `{ }`).
- **Re-declaración:** No puedes re-declarar una variable con `let` en el mismo ámbito, lo que ayuda a evitar errores accidentales.

**Ejemplo:**
```javascript
function ejemploLet() {
  if (true) {
    let nombre = 'Iván';
    console.log(nombre); // Iván
  }
  // console.log(nombre); // Error: nombre no está definido fuera del bloque
}

ejemploLet();
```

**Ventajas:** Más seguro y predecible que `var` debido a su ámbito de bloque.
**Desventajas:** Puede ser un poco más estricto que `var`, pero esto suele ser una ventaja en lugar de una desventaja.

#### **3. `const`**
- **Ámbito (Scope):** Igual que `let`, las variables `const` tienen un ámbito de bloque.
- **Re-declaración:** No se pueden re-declarar ni reasignar después de su declaración.
- **Inmutabilidad:** Aunque `const` impide que se reasigne una variable, no hace inmutables a los objetos o arrays que almacena. Esto significa que puedes modificar las propiedades de un objeto o los elementos de un array declarado con `const`.

**Ejemplo:**
```javascript
const nombre = 'Iván';
// nombre = 'Juan'; // Error: No se puede reasignar un `const`

const persona = { nombre: 'Iván', edad: 30 };
persona.edad = 31; // Esto es válido, aunque la referencia no cambia

console.log(persona); // { nombre: 'Iván', edad: 31 }
```

**Ventajas:** Útil para valores que no deben cambiar, mejora la legibilidad y seguridad del código.
**Desventajas:** No se puede reasignar, lo que puede ser limitante en algunos casos, pero esto es normalmente una ventaja.

### **Recomendaciones y Buenas Prácticas en Node.js con JavaScript**

1. **Usa `let` y `const` en lugar de `var`:**
   - `var` puede ser propenso a errores debido a su hoisting y ámbito global/función. Es recomendable usar `let` para variables que pueden cambiar de valor y `const` para valores que no deberían cambiar.

2. **Prefiere `const` siempre que sea posible:**
   - Declara variables con `const` a menos que necesites reasignarlas. Esto ayuda a prevenir errores accidentales y deja claro que un valor no debería cambiar.

3. **Manten tus variables con un ámbito reducido:**
   - Intenta declarar variables en el ámbito más pequeño posible. Esto reduce el riesgo de colisiones y errores. Por ejemplo, declara variables dentro de funciones o bloques `{}` en lugar de en el ámbito global.

4. **Escribe código claro y legible:**
   - Nombra tus variables de forma descriptiva. Esto mejora la comprensión y mantenibilidad de tu código.

5. **Evita modificar objetos y arrays si están declarados con `const`:**
   - Aunque es posible modificar los valores dentro de un objeto o array declarado con `const`, esto puede ser confuso. Si necesitas modificar un objeto o array, considera usar `let` o asegúrate de que el código sea fácil de entender.

6. **Mantén tu código modular:**
   - Usa `require` o `import` para separar tu código en módulos. Esto facilita la gestión de proyectos grandes y mejora la reutilización de código.

7. **Usa linters y herramientas de formato:**
   - Herramientas como ESLint te ayudarán a mantener un estilo de código consistente y a detectar posibles errores antes de que se conviertan en problemas.

### **Conclusión**

- **`const`**: Úsalo para valores que no deberían cambiar.
- **`let`**: Úsalo cuando necesitas que una variable pueda cambiar de valor.
- **`var`**: **Evítalo en la medida de lo posible** debido a sus limitaciones y comportamiento impredecible.

---
## **Convenciones de Nombres en Programación**

Cuando escribimos programas, es fundamental dar nombres claros y consistentes a nuestras variables, funciones y clases. En `JavaScript`, existen varias convenciones de nombres que se utilizan según el caso:

### **1. camelCase**
- La primera palabra comienza en minúscula y cada palabra siguiente empieza con mayúscula.
- Se utiliza comúnmente para:
  - Nombres de variables
  - Nombres de funciones

**Ejemplo:**
```javascript
let userName = 'Iván'
function calculateAverage(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3
}
```

### **2. PascalCase**
- Igual que camelCase, pero la primera palabra también comienza con mayúscula.
- Se utiliza principalmente para:
  - Nombres de clases
  - Constructores

**Ejemplo:**
```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }
}

const estudiante = new Persona('Iván', 18)
console.log(estudiante)
```

### **3. snake_case**
- Todas las palabras están en minúscula y se separan con guiones bajos `_`.
- Se usa con menor frecuencia en JavaScript, pero es común en:
  - Archivos (`mis_notas.js`)
  - Bases de datos
  - Algunas constantes

**Ejemplo:**
```javascript
let promedio_final = 7
const API_KEY = '12345_ABC'
```

### **Buenas Prácticas al Nombrar**
1. Usa **nombres descriptivos**: mejor `studentAge` que `x`.
2. Mantén un **estilo consistente** en todo tu proyecto.
3. Sigue las convenciones del lenguaje y la comunidad:
   - **camelCase** para variables y funciones.
   - **PascalCase** para clases.
   - **snake_case** principalmente para nombres de archivos o cuando sea necesario.


**Importante:**
- Aplicar cada convención correctamente.
- Identificar en qué casos usarías cada estilo.

---

## **Estructuras de Control**

### Operadores Relacionales y Lógicos

Antes de usar condicionales, es importante conocer los operadores que permiten comparar valores o combinar condiciones.

#### Operadores Relacionales
- `>` : Mayor que
- `<` : Menor que
- `>=` : Mayor o igual
- `<=` : Menor o igual
- `===` : Igualdad estricta (valor y tipo)
- `!==` : Desigualdad estricta

**Ejemplo:**
```javascript
let x = 10, y = 20;
console.log(x < y);   // true
console.log(x === 10); // true
console.log(x !== y); // true
```

#### Operadores Lógicos
- `&&` : Y lógico (true si ambas condiciones son verdaderas)
- `||` : O lógico (true si al menos una condición es verdadera)
- `!`  : Negación (invierte el valor booleano)

**Ejemplo:**
```javascript
let edad = 18;
let tieneDNI = true;

console.log(edad >= 18 && tieneDNI); // true
console.log(edad < 18 || tieneDNI);  // true
console.log(!(edad < 18));           // true
```

### Sentencias Condicionales

#### Introducción a las Sentencias `if`, `else if`, `else`

1. **Sintaxis Básica**
   - `if`:
     ```javascript
     if (condición) {
       // código a ejecutar si la condición es verdadera
     }
     ```
   - `else if` y `else`:
     ```javascript
     if (condición1) {
       // código a ejecutar si condición1 es verdadera
     } else if (condición2) {
       // código a ejecutar si condición2 es verdadera
     } else {
       // código a ejecutar si ninguna de las condiciones anteriores es verdadera
     }
     ```

2. **Ejemplo**
   ```javascript
   let edad = 18;
   if (edad < 18) {
     console.log('Menor de edad');
   } else if (edad === 18) {
     console.log('Exactamente 18 años');
   } else {
     console.log('Mayor de edad');
   }
   ```

#### Ejercicios Prácticos

1. **Ejercicio 1**
   - Escribir un script que determine si una persona es mayor de edad (18 años o más).

2. **Ejercicio 2**
   - Escribir un script que evalúe tres notas y determine si un estudiante aprueba (promedio ≥ 6) o reprueba.

### Estructura switch-case

La estructura `switch` permite evaluar una expresión contra múltiples casos posibles,
ofreciendo una alternativa más clara que el uso de múltiples `if-else`.

**Sintaxis básica:**

```javascript
switch (variable) {
  case valor1:
    // Código a ejecutar si variable === valor1
    break
  case valor2:
    // Código a ejecutar si variable === valor2
    break
  default:
    // Código a ejecutar si ningún caso coincide
}
```

**Ejemplo práctico:**

```javascript
let day = 3
let dayName

switch (day) {
  case 1:
    dayName = "Monday"
    break
  case 2:
    dayName = "Tuesday"
    break
  case 3:
    dayName = "Wednesday"
    break
  case 4:
    dayName = "Thursday"
    break
  case 5:
    dayName = "Friday"
    break
  default:
    dayName = "Weekend"
}

console.log("Today is " + dayName)
```

---

## **Uso del Módulo `prompt` para Leer Entradas de Usuario en Node.js**

En este apunte, aprenderás cómo utilizar un módulo personalizado en Node.js para leer entradas de usuario desde la consola. El módulo usa la biblioteca `readline-sync` para solicitar datos y es ideal para alumnos que están comenzando a trabajar con Node.js y JavaScript.

### **Leer una Entrada de Texto**

```javascript
import { prompt } from './prompt.js';

const nombre = prompt('Escribe tu nombre: ');
console.log(`Hola, ${nombre}! Bienvenido al curso.`);
```

**Salida Esperada:**
```zsh
Escribe tu nombre: Iván
Hola, Iván! Bienvenido al curso.
```

### **Leer una Entrada Numérica (Entero)**

```javascript
import { prompt } from './prompt.js';

const edad = parseInt(prompt('¿Cuántos años tienes?: '));
console.log(`Tienes ${edad} años.`);
```

### **Leer una Entrada Numérica (Flotante)**

```javascript
import { prompt } from './prompt.js';

const altura = parseFloat(prompt('¿Cuál es tu altura en metros?: '));
console.log(`Mides ${altura} metros.`);
```

**Nota:** El separador decimal reconocido es el punto.


function miniMaxSum(arr) {
    // Write your code here
    let sortedArray = arr.sort((a, b) => a-b); //1.
    let minimum = sortedArray.slice(0, sortedArray.length -1).reduce((a, b) => a+b);
    let maximum = sortedArray.slice(1).reduce((a, b) => a+b);
    console.log(minimum, maximum);
}

//1. Ordenar arreglo
//Qué hace: Esta línea ordena el arreglo arr en orden ascendente (de menor a mayor).
//Cómo funciona:
//El método sort organiza los elementos del arreglo.
//La función (a, b) => a - b asegura el orden numérico:
//Si a - b es negativo, a aparece antes que b.
//Si a - b es positivo, b aparece antes que a.
//Por ejemplo, si arr = [5, 1, 9, 3, 7], después de esta línea, sortedArray será [1, 3, 5, 7, 9].

//2.Calcular suma minima
//Qué hace: Calcula la suma de los 4 números más pequeños del arreglo.
//Cómo funciona:
//sortedArray.slice(0, sortedArray.length - 1):
//Usa el método slice para tomar los primeros 4 números del arreglo.
//slice(0, sortedArray.length - 1) significa: "Toma los elementos desde el índice 0 hasta el penúltimo índice".
//En nuestro ejemplo, sortedArray.slice(0, 4) devuelve [1, 3, 5, 7].
//.reduce((a, b) => a + b):
//El método reduce suma todos los números del arreglo.
//a es el acumulador (el valor acumulado hasta el momento).
//b es el valor actual en cada iteración.
//Resultado: 1 + 3 + 5 + 7 = 16.

//3. Calcular la suma máxima
//Qué hace: Calcula la suma de los 4 números más grandes del arreglo.
//Cómo funciona:
//sortedArray.slice(1):
//Usa el método slice para tomar todos los elementos excepto el primero.
//slice(1) significa: "Toma los elementos desde el índice 1 hasta el final".
//En nuestro ejemplo, sortedArray.slice(1) devuelve [3, 5, 7, 9].
//.reduce((a, b) => a + b):
//El método reduce suma los números del nuevo arreglo.
//Resultado: 3 + 5 + 7 + 9 = 24.

//Por qué se excluye un valor
//La idea es aprovechar que el arreglo contiene exactamente 5 números y calcular lo siguiente:

//Suma mínima:

//Aquí queremos excluir el número más grande del arreglo. Por eso tomamos los primeros 4 números (que, tras ordenar, son los más pequeños).
//Suma máxima:

//Aquí queremos excluir el número más pequeño del arreglo. Por eso tomamos los últimos 4 números (que, tras ordenar, son los más grandes).
//El truco está en que ordenar el arreglo asegura que los números están organizados de menor a mayor, facilitando la exclusión del menor o el mayor con una selección directa.

//Por qué no se toma todo el arreglo
//Si sumaras todo el arreglo (del primero al último valor), estarías incluyendo tanto el valor más pequeño como el más grande en ambas sumas, por lo que no se lograría diferenciar entre la suma mínima y la máxima. Esto violaría la premisa del problema, que es identificar dos resultados distintos:

//La menor suma posible (excluyendo el mayor número).
//La mayor suma posible (excluyendo el menor número).

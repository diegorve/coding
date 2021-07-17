
/* const adivinaNumero = (numero) => {
    random = Math.floor(Math.random()*(100 - 1)) + 1;
    intentos = 0;
    while (intentos <= 10) {
        if (numero > random) {
            console.log('El número a adivinar es menor')
        } else if (numero < random) {
            console.log('El número a adivinar es mayor')
        } else {
            console.log(`Exacto!!! El número a adivinar es ${numero}`)
        }
        intentos = intentos + 1;
    }
    return(numero, random, intentos)
}

adivinaNumero(10)  */


// EJERCICIOS CON ARRAYS

// PRIMER EJERCICIO

/* 1.- Hacer una función que reciba como parámetros un arreglo, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’] */

/* const arrayNumber = (arreglo, retorno) => {
    if (retorno > arreglo.length) {
        return console.log(`El arreglo solo tiene ${arreglo.length} elementos`);
    }
    const nuevoArreglo = arreglo.slice(0, retorno);
    console.log(nuevoArreglo);
}
arrayNumber(["morado", "verde", "amarillo", "azul", "rojo"], 3);
arrayNumber(["Jamilett", "Charlie", "Ana"], 2) */

// SEGUNDO EJERCICIO

/* 2.- Escribe una función “reemplazar” que tenga como parámetros una arreglo de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de el arreglo, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]
 */
/* let arrayEntrada = [3,2,3,4,6,8,1,2,5,5];
let segundoPar = 7;
let tercerPar = 2;
const reemplazar = (entrada, segundo, tercero) => {
    let repetido = false;
    for (let i = 0; i <= entrada.length; i++){
       if (  tercero === entrada[i] ) {
            if( repetido === true ){
                let reemplazo = entrada.splice(i);
                reemplazo = entrada.push(segundo);
                return console.log(entrada);
            }
            //console.log(entrada[i]);
            repetido = true;
        } else {
        }
    }

reemplazar (arrayEntrada, segundoPar, tercerPar);
*/


// TERCER EJERCICIO

/* Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen */
// Chiguagua, Camargo, Delicias, Cd. Juarez

// Incluir una nueva ciudad que esta entre Delicias y Camargo que se llama Conchos

let elRecorrido = ["Chiguagua", "Camargo", "Delicias", "Cd. Juarez"];

const elRegreso = (laIda) => {
    console.log(laIda)
    laIda.splice(2, 0, 'Conchos')
    console.log(laIda);
    laVuelta = laIda.reverse();
    console.log(laVuelta)
}

elRegreso(elRecorrido)
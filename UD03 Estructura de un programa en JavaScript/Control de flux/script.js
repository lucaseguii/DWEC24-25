// let numero = Number(prompt("Elije tu numero: "));

// console.log("Tu numero es la raiz cuadrada de " + numero * numero);

// Condicional
// let numero = Number(prompt("Elije tu numero: "));

// if(!Number.isNaN(numero)) console.log("Tu numero es la raiz cuadrada de " + numero * numero);
// else if (numero < 5) console.log("El numero es menor que 5");
// else console.log("Pon un numero");

// else if
// else

// BUCLES
// WHILE
// let numero = 2;
// let limite = 100;
// while(numero <= limite) {
// console.log(numero);
// numero = numero + 2;
// }
//-----------------------------------------
// let numero = 0;
// let sumaPar = 0;
// let sumados = 0;

// while (sumados <= 100) {
//     if(num % 2 == 0){
//         sumaPar = sumaPar + numero;
//         sumados = sumados + 1;
//     }
//     numero = numero + 1;
// }
// console.log(sumados);
//-----------------------------------------

// Potencia n-ésima de un numero a
// let a = 0 || Number(prompt("Introduzca la base"));
// let n = 0 || Number(prompt("Introduzca el exponente"));

// n = n == 0 ? 1 : n;

// let resultado = 1;
// let contador = 0;

// while(contador < n){
//     resultado = resultado * a;
//     contador = contador + 1;
// }
// console.log(resultado);
//------------------------------------------

//------------------------------------------
// DO WHILE
// let nombre;
// do{
//     nombre = prompt("Quien eres?");

// } while (!nombre);
// console.log(nombre);

// -------------------------------------------

// BUCLES FOR
// let numero = 2;
// console.log("Antes del bucle: " + numero);
// for(numero = 0; numero <= 12; numero += 2){
// console.log(numero);
// }
// console.log("Despues del bucle: " + numero);

// for(let numero = 20; numero < 100; numero++){
//     if(numero % 5 != 0){
//         continue;
//     }
//     console.log(numero);
// }

//----------------------------------------------

//SWITCH -CASE
// let pregunta = prompt("Que tiempo hace? ");
// switch (pregunta) {
//   case "lluvioso":
//     console.log("Coje paraguas");
//     break;

//   case "soleado":
//     console.log("Lleva ropa ligera");
//     break;

//   case "nublao":
//     console.log("puedes salir a la calle");
//     break;
//   default:
//     console.log("Tiempo desconocido");
// }

//---------------------------------------------

//EJERICIO 1
/*
    Escribe un bucle que reaqlice siete llamadas a 
    console.log para mostrar la siguiente figura:
    #
    ##
    ###
    ####
    #####
    ######
    #######

    SOLUCIÓ:

let arbol = "";
for(let numero = 0; numero <= 7; numero++){
    arbol += "#";
    console.log(arbol);
}
*/

//EJERCICIO 2
/*
    Escribe un programa que use console.log para imprimir
    todos los numeros del 1 al 100, con dos excepciones:
    -Para los numeros que sean divisibles por 3, imprime:
    "Jander".
    -Para los numeros divisibles por 5 (y no por 3), imprime: 
    "Clander".

    SOLUCIÓ:
    for(let numero = 0; numero < 100; numero++){
    if(numero % 3 == 0){
        console.log("Jander");
    }
    else if(numero % 5 == 0){
        console.log("Clander");
    }else{
        console.log(numero);
    }
}
*/

//EJERCICIO 2- EXTENSION PACK
/*
    Modifica tu programa papra imprimir 'JanderClander' para los 
    numeros que sean divisibles por 3 y 5 (y sigue imprimiendo)
    "Jander" o -"Clander" para los numeros que son divisibles solo
     por uno de esos casos.

     SOLUCIO:
     for(let numero = 0; numero < 100; numero++){
    if(numero % 3 == 0 && numero % 5 == 0 ){
        console.log("JanderClander");
    }else if(numero % 5 == 0){
        console.log("Clander");
    }else if(numero % 3 == 0){
        console.log("Jander");
    }else{
        console.log(numero);
    }
}

*/

//EJERCICIO 3
/*
    Escribe un programa que cree una cadena que represente un tablero
    de 8x8, usando caracteres de salto de linea para separar las lineas.
    En cada posicion del tablero hay un caracter de espacio o un caracter "#".
    Los caracteres deben formar un tablero de ajedrez:
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #

    SOLUCIO:
    let tablero = "";
    for (let fila = 0; fila < 8; fila++) {
    for (let columna = 0; columna < 8; columna++) {
        if ((fila + columna) % 2 == 0) {
            tablero += " ";
        } else {
            tablero += "#";
        }
    }
    tablero += "\n";
}

console.log(tablero);
*/

//EJERICIO 4
/*
    Hacer un switch en que las opciones sean que 
    ejercicios quiere que haga el 1, el 2, el 2+ o el 3.

    SOLUCIO:
let pregunta = prompt("Que ejercicio quieres hacer( 1 | 2 | 2+ | 3 )");
switch (pregunta) {
  case "1":
    let arbol = "";
    for (let numero = 0; numero <= 7; numero++) {
      arbol += "#";
      console.log(arbol);
    }
    break;

  case "2":
    for (let numero = 0; numero < 100; numero++) {
      if (numero % 3 == 0) {
        console.log("Jander");
      } else if (numero % 5 == 0) {
        console.log("Clander");
      } else {
        console.log(numero);
      }
    }
    break;

  case "2+":
    for (let numero = 0; numero < 100; numero++) {
      if (numero % 3 == 0 && numero % 5 == 0) {
        console.log("JanderClander");
      } else if (numero % 5 == 0) {
        console.log("Clander");
      } else if (numero % 3 == 0) {
        console.log("Jander");
      } else {
        console.log(numero);
      }
    }
    break;
  case "3":
    let tablero = "";
    for (let fila = 0; fila < 8; fila++) {
      for (let columna = 0; columna < 8; columna++) {
        if ((fila + columna) % 2 == 0) {
          tablero += " ";
        } else {
          tablero += "#";
        }
      }
      tablero += "\n";
    }

    console.log(tablero);
    break;
    default:
        console.log("Pon un numero de estos: ( 1 | 2 | 2+ | 3 ) ");
}
*/

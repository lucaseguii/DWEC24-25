// DEFINIR FUNCIONS
const quadrat = function(n){
    return n * n;
}

const mensaje = function(){
    console.log("Funcio que no retorna res pero que mostra un missatge");
}

// mensaje();
// console.log(quadrat(3));


// redondear n al multiplo mas cercano a m
const redondeaA = function(n, m){
let resto = n % m; 
return n - resto + (resto < m / 2 ? 0 : m);
}
// console.log(redondeaA(23, 10));


// AMBITOS 
// let x = 10; // global
// if(true){
//     let y = 20; // local respecto al bloque 
//     // console.log(x);
//     var z = 30; // global
// }
// console.log(z);

// const mitad = function(n){
//     return n / 2;
// };

// let n = 10;
// console.log(mitad(100)); // 50
// console.log(n);


// AMBITO ANIDADO
// const humus =  function(factor){
//     const ingrediente = function(cantidad, unidad, nombre){
//         let cantidadIngrediente = cantidad * factor;
//         if(cantidadIngrediente > 1){
//             unidad += "s";
//         }
//         console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
//     };
//     ingrediente(1, "lata", "garbanzos");
//     ingrediente(0.25, "taza", "tahini");
//     ingrediente(0.25, "taza", "jugo de limon");
//     ingrediente(1, "diente", "ajo");
//     ingrediente(2, "cucharada", "aceite de oliva");
//     ingrediente(0.5, "cucharadita", "comino");
// };
// humus(100);

// const rendondeaA = (n, m) =>{
//     let resto = n % m;
//     return n -resto + (resto < m / 2 ? 0: m)
// }
// let nombre = "Luca";
// const saluda = () => "Hola " + nombre;
// console.log(saluda());

// Pila de llamadas
// function saludar(nombre){
//     console.log("Hola " + nombre);
// }
// saludar("Luca");
// console.log("Adios");
// no en funcion
// en saludar
// en clg
// en saludar
// no en funcion
// clg
// no en funcion

// function gallina(){
//     return huevo();
// }
// function huevo(){
//     return gallina();
// }
// console.log("Que fue antes, el " + huevo() + " o la " + gallina());

// Parametros opcionales
// const quadraat = function(n, b = "n/a") {
//    console.log(b);
//     return n * n; 

// };
// console.log(quadrat(3));

// cierre o clausura
// function valor(n) {
//     let local = n;
//     return () => local;
// }
// let valor1 = valor(1);
// let valor2 = valor(2);

// console.log(valor1());
// console.log(valor2());


// recursividad 
// function exponencial(base, exponente){
//     if(exponente == 0){
//         return 1;
//     }else{
//     return base * exponencial(base, exponente - 1);  
//     }
// }
// console.log(exponencial(2, 3));

// factorial de n: n! = n * (n-1) * (n-2)... * 1
// Ej.: 4! = 4 * 3 * 2 * 1= 24
//Spoiler: 5! = 5* 4!

// function factorial(n){
//     if (n === 0 || n === 1) {
//         return 1;
//       }
//       return n * factorial(n - 1)
//     }
//     console.log(factorial(5));


// Crecimiento de la funcions
// imprimirInventarioGranja(10, 15);
// function imprimirInventarioGranja(vacas, pollos){
//     let cadenaVaca = String(vacas);
//     while(cadenaVaca.length < 3){
//         cadenaVaca = "0" + cadenaVaca;
//     }
//     console.log(`${cadenaVaca} Vacas`);

//     let cadenaPollos = String(pollos);
//     while(cadenaPollos.length < 3){
//         cadenaPollos = "0" + cadenaPollos;
//     }
//     console.log(`${cadenaPollos} Pollos`);
// }

// function imprimirConCeros(numero, longitud){
//     let cadenaNumero = String(numero);
//     while(cadenaNumero.length < longitud){
//         cadenaNumero = "0" + cadenaNumero;
//     }
//     return cadenaNumero;
// }

// function imprimirInventarioGranja(vacas, pollos, cerdos){
//     console.log(`${imprimirConCeros(vacas, 5)} Vacas`);
//     console.log(`${imprimirConCeros(pollos, 5)} Pollos`);
//     console.log(`${imprimirConCeros(cerdos, 5)} Cerdos`);
//     // imprimirConCeros(vacas, 'Vacas');
//     // imprimirConCeros(pollos, 'Pollos');
//     // imprimirConCeros(cerdos, 'Cerdos');
// }

// imprimirInventarioGranja(7, 12, 26);

// Math.min()
// let a = Math.min(2,4);
// console.log(a);

// Escribe una funcion que devuelva el minimo de 3 numeros
// function numeroMinimo(num1, num2, num3) {
//     return Math.min(num1, num2, num3);
// }


// Ejercicio recursividad:
/*  Podemos usar % para verificar si un número es par o impar
    al usar el %2 para ver si es divisible por dos.
    Existe otra manera de definir si un número es par o impar:
    - 0 es PAR
    - 1 es IMPAR
    - N: su paridad es la misma que N - 2
    Define la función recursiva esPar que corresponda a esta
    descripción. La función debe aceptar un solo parámetro (número
    entero positivo) y devolver un booleano.
    Probar con 50 y 75.
*/
/*
function esPar(n) {
     // Numero 0 es par
     if (n == 0) {
         return ("Es par");
     }
     //Numero 1 es impar
     if (n == 1) {
         return ("Es impar");
     }
 return esPar(n-2)
 }

console.log(esPar(50));  
console.log(esPar(75));  
*/


function kaprekar(num) {
    while (num !== 6174) {
        // Convertimos el número en string y rellenamos con ceros si es necesario
        let numStr = num.toString().padStart(4, '0');
        
        // Separamos los dígitos
        let digitos = numStr.split('');
        
        // Ordenamos los dígitos de mayor a menor y los unimos para obtener el número mayor
        let digitosMayor = digitos.sort().reverse().join('');
        let mayor = parseInt(digitosMayor);
        
        // Ordenamos los dígitos de menor a mayor y los unimos para obtener el número menor
        let digitosMenor = digitos.sort().join('');
        let menor = parseInt(digitosMenor);

        // Mostrar la resta
        console.log(`${mayor} - ${menor} = ${mayor - menor}`);
        
        // Realizar la resta
        num = mayor - menor;
    }
    
    console.log("¡Llegaste a 6174!");
}

kaprekar(2546);


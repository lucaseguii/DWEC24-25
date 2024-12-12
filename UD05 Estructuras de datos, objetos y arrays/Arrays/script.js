// let numeros = [1, 2, 3, 4]; // 4 elementos
// console.log(numeros[0]); // indexados de 0 hasta su longitud -1
// console.log(numeros[3]);//ultimo
// console.log(numeros[numeros.length - 1])

// let nombres = ["pepe", "Maria", 'Joan', `Pere`];
// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);

// let mescla1 = ["Hola", 10, true];
// console.log(mescla1[0]);
// console.log(mescla1[1]);
// console.log(mescla1[2]);

// console.log(mescla1);

// let numeros = new Array();
// numeros[0] = 10;
// numeros[1] = 20;
// numeros[3] = 10;
// console.log(numeros);

// let noms = new Array('Maria', 'Joan');
// console.log(noms);

// let numeros = new Array(5);
// numeros = Array(5).fill('Hola');
// console.log(numeros);

//Metodes de Array
//push(): agrega un o mes elements al final del array
// const frutas = ['manzana', 'platano', 'naranja'];
// console.log(frutas);
// frutas.push('uvas');
// console.log(frutas);

//pop(): elimina l'ultim element de l'array.
// let uva = frutas.pop();
// console.log(uva);
// console.log(frutas);

//shift(): elimina el primer elemento del array
// let primer = frutas.shift();
// console.log(frutas);
// console.log(primer);

//unshift(): Agregar un o mes elements al principi del array
// frutas.unshift('melon', 'sandia');
// console.log(frutas);

//concat(): combina dos o més arrays i retorna un nou array.
// const frutas2 = ['melocoton', 'kiwi'];
// const combinacion = frutas.concat(frutas2);
// console.log(combinacion);

//slice(): retonra una copia superficial de una porcio del array
// frutas.push('kiwi', 'melon', 'sandia', 'melocoton');
// console.log(frutas);
// const frutas2 = frutas.slice(1, 5);
// console.log(frutas2);

//splice(): canvia el contingut de un array eliminant
//reemplaçant o agregant elements.
// frutas2.splice(1, 1, 'uva', 'tomate')
// console.log(frutas2);

//indexOf(): Devuelve el primer indice en el que se encuentra 
//un elemento dado en un array o -1 si no lo encuentra.
// const IndexBuscao  = frutas.indexOf('Platano'.toLocaleLowerCase());
// console.log(IndexBuscao);

//join(): une todos los elemeentos de un array en una cadean
// utilizando un separador especificado
// const UnioElementos = frutas.join(' * ');
// console.log(UnioElementos);


//sort():ordena los elementos de un array alfabeticammente
//(si son cadenas) o numericamente(para numeros)
// console.log(frutas.sort());

// ordenar por valores unicode!!
// const numeros = [10, 5, 8, 3, 1];
// console.log(numeros);
// numeros.sort();
// console.log(numeros);

// const ciudades = ['Zaragoza', 'madrid', 'Barcelona'];
// ciudades.sort();
// console.log(ciudades);

//affortunadametne sort() tiene un parametro opcional

// const numeros = [10, 5, 8, 3, 1];
// console.log(numeros.sort(function(a, b){
//         // -1 a < b
//         // 1 a > b
//         // 0 a == b
//     return a - b;
// }));
// console.log(numeros.sort((a, b) => a - b ));


// const ciudades = ['Zaragoza', 'madrid', 'Barcelona', 'Avila'];
// // ciudades.sort((a, b) => a.toLowerCase() > b.toLowerCase());

// ciudades.sort((a, b) => a.localeCompare(b));
// console.log(ciudades);

// //Operador Spread
// // const numeros = [1, 2, 3];
// // const masNumeros = [...numeros, 4, 5, ...numeros, 50, 60];
// // console.log(masNumeros);

// function sumar(... numeros){
//     let resultado = 0;
//     for(let numero of numeros){
//         resultado +=numero;
// }
//     return resultado;
// }
// console.log(sumar(1, 3, 8, 9 , 12));


//Despues de ver objetos, vemos alguna cosa mas de array
// forEach(): ejecuta una funcion una vez por cada elemento del array
// const numeros =  [1,3,5,7];
// numeros.forEach((numero)=>{
//     let resultado = numero * 2;
//     console.log(resultado);
// })

//map(): Crea un nuevo array con los resultados de aplicar una funcion
// a caada elemento del array original
// const numeros= [1, 2, 3, 4, 5];
// const doblaNumeros = numeros.map((numero)=>{
//     return numero *2;
// });
// console.log(doblaNumeros);
// console.log(numeros);


// filter(): crea un nuevo array con todos los elementos que cumolan
// una condicion determinada
// const numeros= [1, 2, 3, 4, 5];
// const numerosPares = numeros.filter((numeros)=>{
//     return numero % 2 == 0;
// });
// console.log(numerosPares);

// reduce(): aplica una funcion  aun acumulador y a cada elemento
// del array (de izquierda a derecha), para reducirlo aun unico valor.
// const numeros= [1, 2, 3, 4, 5];
// let suma = numeros.reduce((acumula, numero)=>{
// return acumula + numero;
// });
// console.log(suma);

// find(): devuelve el primer elemento del array que cumpla 
// una condicion determinada.
// const numeros = [1, 2, 3, 4, 5];
// const numeroEncontrado = numeros.find((numero)=>{
//     return numero % 2 == 0;
// });
// console.log(numeroEncontrado);


//findIndex(): devuelve elindice del primer elemento del array 
// que cumple con una funcion de prueb, o "-1" si no se encuentra
// const numeros= [1, 2, 3, 4, 5];
// const indiceEncontrado = numeros.findIndex((numero)=>{
//     return numero > 3;
// });
// console.log(indiceEncontrado);

//some(): comprueba si al menos un elemento del array cumple 
// una condicion determinada
// const numeros= [1, 2, 3, 4, 5];
// const tieneNumeroPar = numeros.some((numero)=> {
//     return numero % 2 == 0;
// });
// console.log(tieneNumeroPar);

// every(): comprueba si todos los elementos del array cumplen
//con una condicion  determinada
// const numeros= [4, 2, 6, 4, 8];
// const sonPares = numeros.every((numero)=>{
//     return numero % 2 == 0;
// });
// console.log(sonPares);


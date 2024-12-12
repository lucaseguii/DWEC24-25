// creacion
//let saludo= 'hola';
//console.log(saludo1);

//constructor
//let saludo= new String('Hola');
//console.log(saludo);
//console.log(saludo + 'Joan);

//propiedades
let saludo = 'hola';
//length
// console.log(saludo.length);
//metodos mas comuns
// charAt(): Retorna el caracter de indice especificado dentro de la cadena
//como si cada caracter fuese un elemento de  un array
//let caracter = saludo.charAt(1);
// console.log(caracter);

//chatCodeAt(): retorna el codigo unicode del caracter en elindice especificado
// let codigo = saludo.charCodeAt(3);
// console.log(codigo);

//concat(): combina una o mas cadenes
// let saludoCompleto = saludo.concat(', !como estas');
// console.log(saludoCompleto);

// //includes(): verifica si una cadena contiene a otra
// console.log(saludo.includes('mundo'));
// let saludoCompleto = saludo.concat(',mundo');
// console.log(saludoCompleto.includes('mundo'));

// indexOf(): retorna el indice de la primera apraicion de una cadena en 
// otra cadena 
// let indice = saludo.indexOf('la');
// console.log(indice);

// lastIndexOF(): retorna el indice de la ultima aparicion de una cadena en otra 
// let cadena = 'hola, hola adios y hola';
// let ultimoIndice = cadena.lastIndexOf('hola');
// console.log(ultimoIndice);

// slice(): extreu una part de la cadena y retorna una nova cadena
// let cadena = 'Hola, cara de bola';
// let nuevaCadena = cadena.slice(6, 10);
// console.log(nuevaCadena);

// subString(): similar a slice, pero sin admitir indices negativos
// let cadena = 'Hola, cara de bola';
// let nuevaCadena = cadena.substring(6, 10);
// console.log(nuevaCadena);

// toLowerCase(), toUpperCase()
// let cadena = 'Hola, cara de bola';
// let mayus = cadena.toUpperCase();
// console.log(mayus);
// let minus = mayus.toLowerCase();
// console.log(minus);


// replace(): remplaza una cadena por otra
// let cadena = 'Hola, cara de bola';
// let mayus = cadena.toUpperCase();
// let minus= mayus.toLowerCase().replace('cara', 'CARA');
// console.log(minus);

//trimi(): elimnina els espais en bland devant i darrere la cadena
// let cadena = '       Joan       ';
// let cadenaSinEspacios = cadena.trim();
// console.log(cadena);
// console.log(cadena.length);
// console.log(cadenaSinEspacios);
// console.log(cadenaSinEspacios.length);

//split(): divide una cadena en un array de subcadenas
let cadena ='hola, cara de bola';
// let miArray = cadena.split('  ');
// console.log(miArray);
console.log(cadena[1]);


// let unCliente = {
//     nombre: "Peter Jackson",
//     "Direccion del cliente": "c/ desconocida",
//     "-+-+-+-+-": "boquepasa",
//     pago:{
//         tipo: "visa",
//         tarjeta: "1223245425",
//         "fecha de caducidad": "nunca"
//     }
// };
// console.log(unCliente.pago.tipo);
// console.log(unCliente["fecha de caducidad"]);
// unCliente["nombre"] = "juanito";
// console.log(unCliente);
// console.log(unCliente["Direccion del cliente"]);

// let estudiante = {
//     id: 2,
//     nombre: "Obi Wan Kenobi",
//     diHola: function(){
//         return "Hola";
//     }
// };
// console.log(estudiante);
// // console.log(estudiante.diHola());

// estudiante.edad = 190;

// estudiante.diAdios = function(){
//     return "Adios";
// };
// console.log(estudiante);

//this
// let factura = {
//     descripcion: "factura de prueba",
//     importe: 100.0,
//     iva: 21.00,
//     subtotal: function() {
//         return this.importe;
//     },
//     total: function(){
//         return this.importe + this.iva / 100;
//     },
// };
// console.log(factura.subtotal());
// console.log(factura.total());

//Constructors
// function Web(){
//     this.url = "http://localhost";
//     this.nombre = "Localhost";
//     this.mostrarInfo = function() {
//         return this.nombre + " :: " + this.url;
//     }
// };
// let unaWeb = new Web();
// unaWeb.url = "http://fcbarcelona.cat";
// unaWeb.nombre = "Mes que un club";
// console.log(unaWeb.mostrarInfo());

// let otraWeb = new Web();
// console.log(otraWeb.mostrarInfo());


// function Web(url, nombre){
//     this.url = url;
//     this.nombre = nombre;

//     this.mostrarInfo = ()=> {
//         return this.nombre + " :: " + this.url;
//     }
// };
// let unaWeb = new Web("http://fcbarcelona.cat", " Mes que un club" );
// console.log(unaWeb.mostrarInfo());

// let otraWeb = new Web("http://localhost", "lcoalhost");
// console.log(otraWeb.mostrarInfo());

// Web.visitas = 10;
// console.log(Web.visitas);

// Web.miFuncion = function(){
//     return "Boquepasa";
// };
// console.log(unaWeb.miFuncion());

//prototype
// console.log(unaWeb);
// Web.prototype.visitas = 10;
// unaWeb.visitas = 23;
// console.log(unaWeb);

//Com recorrer un objecte
// let notas ={
//     diw: 8,
//     dwes: 9.5,
//     dwec: 4.9,
//     daw: 2.0
// };
// for(let nota in notas){
//     console.log(nota);
//     console.log(notas[nota]);
// };

// STAR WARS: Personajes y edades 
/*
    Eres un joven padawan que colecciona datos sobre los heroesde
    Star Wars. Se te proporcionan dos arrays: uno con  los nombres
    de algunos de estos heroesy otro con sus edades(en el episodio 4),
    con la indexacion correspondiente a su nombre enm el otro array.
*/
const nombres = ["luke", "obi-wan", "yoda", "leia"];
const edades =  [19, 57, 900, 19];

/*
    Escribe un programa que combine los datos de ambos arrays en un
    objeto y los muestre por consola.
    Calcula ademas, la suma de las edades y muestralas al final.
*/




//desestrucracion de objectes
// const persona = {
//     nombre: "Pere",
//     edad: 33
// };
// const{edad, nombre} = persona;
// console.log(nombre, edad);

// const nombre = "Toni";
// const edead = "54";
// const persona = {
//     nombre,
//     edad
// };
// console.log(nombre, edad);

// ordenar matrices con objetos
const ciudades = [{
    municipio: "Zaragoza",
    provincia: "Zaragoza"
},
{
    municipio: "Avila",
    provincia: "Avila"
},
{
    municipio: "madrid",
    provincia: "madrid"
}
];
ciudades.sort((a, b)=>{
    a.municipio.localeCompare(b.municipio);
});
console.log(ciudades);

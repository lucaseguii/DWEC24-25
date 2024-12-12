let guardarLS = document.getElementById('guardarLS')
let recuperarLS = document.getElementById('recuperarLS')
let netejarLS = document.getElementById('netejarLS')
let valors = document.getElementById('valors')

let diHola = 'Hola';
let diAdios = 'Adios';
let numeros = [1, 3, 5, 7];
let factura = {
    numero: 1,
    descripcion: 'Tayla nova del profe',
    import: 22000.50,
    pago: {
        metodo: 'Efectivo',
        nombre: 'luca'
    }
};

guardarLS.addEventListener('click', ()=>{
    // localStorage.setItem('diHola', diHola);
    // diHola ='Hola' + ' - ' + i++;
    // localStorage.setItem('diAdios', diAdios);
    // diAdios ='Adios' + ' - ' + i++;
localStorage.setItem('numeros', JSON.stringify(numeros))
localStorage.setItem('factura', JSON.stringify(factura))
});

recuperarLS.addEventListener('click', ()=> {
//    let lsDiHola = localStorage.getItem('diHola');
//    let lsDiAdios = localStorage.getItem('diAdios');

//    if(lsDiHola){valors.innerText += lsDiHola;}
//    if(lsDiAdios){valors.innerText += lsDiAdios;}
let lsNumeros = localStorage.getItem('numeros');
lsNumeros = JSON.parse(lsNumeros);
console.log(lsNumeros);
console.log(typeof lsNumeros);
valors.innerText = lsNumeros;

let lsFactura = JSON.parse(localStorage.getItem('factura'));
console.log(lsFactura);
console.log(typeof lsFactura);
valors.innerText = lsFactura;
});
netejarLS.addEventListener('click', ()=> {
    localStorage.clear();
});

localStorage.k
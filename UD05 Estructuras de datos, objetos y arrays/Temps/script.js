//Objeto data
// let miFecha = new Date();
// console.log(miFecha);

// let horas = rellenarConCeros(miFecha.getHours(), 2);
// let minutos = rellenarConCeros(miFecha.getMinutes(), 2);
// let segundos = rellenarConCeros(miFecha.getSeconds(), 2);
// let ampm = "";
// let horaActual = horas + ':' + minutos + ':' + segundos + ' ' + ampm;
// console.log(horaActual);


// if(horas > 12){
//     horas-= 12;
//     ampm ="pm";
// }else{
//     ampm="am";
// }
// let horaActual1 = horas + ':' + minutos + ':' + segundos + ' ' + ampm;
// console.log(horaActual1);

// setTimeout(funcion_a_llamar, milisegundos)
//setInterval(funcion_a_llamar, milisegundos)
// clearInterval()
//clearTimeout()

function crono(){
    let miFecha = new Date();    
    let horas = rellenarConCeros(miFecha.getHours(), 2);
    let minutos = rellenarConCeros(miFecha.getMinutes(), 2);
    let segundos = rellenarConCeros(miFecha.getSeconds(), 2);
    let ampm = "";
    let laHora= document.getElementById('laHora');
    
    
    if(horas > 12){
        horas-= 12;
        ampm ="pm";
    }else{
        ampm="am";
    }
    let horaActual = horas + ':' + minutos + ':' + segundos + ' ' + ampm;
    laHora.innerHTML = horaActual;
}
let elCrono;

window.onload = function(){
    elCrono = setInterval(crono, 1000);
}

function start(){
    
}


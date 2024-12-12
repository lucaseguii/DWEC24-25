//Demanar nom i edat 
//Guardar c00kie amb nom , edat i data expiracio dema
//Tancar navegador i tornar a obrirlo 
//quan demana es nom te diu sa edat




let nombre = prompt("Nombre:");

if (nombre) {
    document.getElementById('missatge').innerText = `Tu nombre: ${nombre}`;
}
let edat = prompt("Edat:");

if (edat) {
    document.getElementById('missatge2').innerText = `Tu edat: ${edat}`;
}


const jugar = document.getElementById('jugar');

function guardarNombre() {
    const nombre = document.getElementById('nombre').value.trim(); 
    if (nombre) {
        localStorage.setItem('nombreJugador', nombre);
    }
}

jugar.addEventListener('click', ()=> {
    guardarNombre();
});

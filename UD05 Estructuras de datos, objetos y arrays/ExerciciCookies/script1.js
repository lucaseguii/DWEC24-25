// pagina que cree cookies de 30 segundos 
//se elimina la cookie cuiando pasen 30 segundos 
//boton crear cookie que caduque 30 seg
// cunado creo la cookie me tiene que salir una cuenta atras 

document.getElementById("crearCookie").addEventListener("click", crearCookie);

// Funció per crear una cookie amb 30 segons de caducitat
function crearCookie() {
    const expiryTime = new Date(Date.now() + 30 * 1000); // Caduca en 30 segons
    document.cookie = `cookieTemporal=valor; expires=${expiryTime.toUTCString()}; path=/`;
    document.getElementById("status").innerText = "Cookie creada";
    iniciarCompteEnrere(30); // Inicia la compta enrere de 30 segons
}

// Funció per iniciar una compta enrere
function iniciarCompteEnrere(temps) {
    const contador = document.getElementById("cuentaatras");
    let tempsRestant = temps;

    const interval = setInterval(() => {
        contador.innerText = `Temps restant: ${tempsRestant} segons`;
        tempsRestant--;

        if (tempsRestant < 0) {
            clearInterval(interval);
            contador.innerText = "La cookie ha caducat.";
            document.getElementById("status").innerText = "Cookie eliminada.";
        }
    }, 1000);
}


const palabrasSecretas = ["INFORMATICA", "RATON", "EXTINTOR", "PIZARRA", "MOVIL", "ORDENADOR", "TECLADO", "MONITOR", "RED", "CABLE", "PROGRAMACION", "ALGORITMO", "CIRCUITO", "SISTEMA", "LENGUAJE", "REDES", "CONECTOR"];

// Elementos del DOM 
const tiempo = document.getElementById("tiempo");
const mensajeDiv = document.querySelector('.mensaje-final');
const intentosRestantesSpan = document.getElementById('intentos-restantes');
const dibujo = document.querySelector('.dibujo');

// Partes del ahorcado
const partesDibujo = [
    '.poste-vertical',
    '.poste-superior',
    '.cuerda',
    '.cabeza',
    '.poste-cuerpo',
    '.brazo-derecho',
    '.brazo-izquierdo',
    '.pierna-derecha',
    '.pierna-izquierda',
];

let elCrono; 
let cronoActivo = false; 
let tiempoSegundos = 0; 
let tiempoRestante = 10; 
let intervaloCuentaAtras; 
let palabraSecreta = palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)]; // Selecciona una palabra aleatoria
let palabraAdivinada = Array(palabraSecreta.length).fill('_'); // Inicializa el array con _
let errores = 0; 
const maxErrores = partesDibujo.length; // Número máximo de errores 

// Elemento donde se muestra la palabra secreta
const contenedorPalabra = document.querySelector('.contenedor-palabra');
contenedorPalabra.textContent = palabraAdivinada.join(' '); // Muestra la palabra con _ _ _


// Botones
const botones = document.querySelectorAll('.botones button');
intentosRestantesSpan.textContent = maxErrores - errores; // Muestra los intentos 


//Funciones  

// Función que maneja la letra seleccionada 
function manejarLetra(letra, boton) {
    let letraEncontrada = false;

    // Comprueba si la letra esta en la palabra
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            palabraAdivinada[i] = letra; // Reemplaza _ por la letra si la adivina
            letraEncontrada = true;
        }
    }

    if (letraEncontrada) {
        boton.style.backgroundColor = 'green';
    } else {
        errores++;
        boton.style.backgroundColor = 'red';
        actualizarDibujo(errores);

        // Si tiene elmaximo de erroes se acabo el juego
        if (errores >= maxErrores) {
            finalizarJuego(false);
            return;
        }
    }

    // Actualiza la palabra mostrada
    contenedorPalabra.textContent = palabraAdivinada.join(' ');

    // El jugador ha adivinado la palabra
    if (!palabraAdivinada.includes('_')) {
        finalizarJuego(true);
        return;
    }

    // Actualiza los intentos restantes
    intentosRestantesSpan.textContent = maxErrores - errores;

    // Inicio el cronometro si no esta aun
    if (!cronoActivo) {
        elCrono = setInterval(crono, 1000);
        cronoActivo = true;
    }

    // Cuenta atrás para la selección de letra
    iniciarCuentaAtras();
}

// Cuenta atras
function iniciarCuentaAtras() {
    tiempoRestante = 10; // Resetear el tiempo 
    document.getElementById("tiempo-restante").textContent = rellenarConCeros(tiempoRestante, 2); // Muestra el tiempo restante con ceros

    clearInterval(intervaloCuentaAtras); // Borra el intervalo previo para reiniciarlo

    // Establece un nuevo intervalo para la cuenta atrás
    intervaloCuentaAtras = setInterval(() => {
        tiempoRestante--; // Reduce el tiempo restante
        document.getElementById("tiempo-restante").textContent = rellenarConCeros(tiempoRestante, 2); // Muestra el tiempo restante

        // Si el tiempo se agota, se suma un error y se reinicia el tiempo
        if (tiempoRestante <= 0) {
            tiempoRestante = 10;
            document.getElementById("tiempo-restante").textContent = rellenarConCeros(tiempoRestante, 2);
            añadirErrorPorTiempo(); // Añade un error por tiempo agotado
        }
    }, 1000);
}

// Si el tiempo se acaba, pues error
function añadirErrorPorTiempo() {
    errores++;
    actualizarDibujo(errores);

    // Mas errores pues termina el juego
    if (errores >= maxErrores) {
        finalizarJuego(false);
        return;
    }

    // Actualiza los intentos restantes
    intentosRestantesSpan.textContent = maxErrores - errores;

    // Habilita los botones para seguir jugando
    botones.forEach(boton => boton.disabled = false);
}

// Función que actualiza el ahorcado según los errores cometidos
function actualizarDibujo(errores) {
    if (errores > 0 && errores <= partesDibujo.length) {
        const parte = document.querySelector(partesDibujo[errores - 1]);
        parte.style.display = 'block'; // Muestra trozo de ahorcado
    }
}

// Función que termina el juego
function finalizarJuego(ganaste) {
    clearInterval(elCrono); // Detiene el cronómetro
    clearInterval(intervaloCuentaAtras); // Detiene la cuenta atrás
    cronoActivo = false; // Cronomotetro inacitvo

    if (ganaste) {
        mensajeDiv.textContent = '¡Felicidades! Has adivinado la palabra';
        mensajeDiv.style.color = 'green';
    } else {
        mensajeDiv.textContent = `¡Has perdido! La palabra era "${palabraSecreta}".`;
        mensajeDiv.style.color = 'red';
    }

    mensajeDiv.style.display = 'block';

    // Desactivar botones
    botones.forEach(boton => boton.disabled = true);

    // Guarda los resultadoso
    guardarResultados(tiempoSegundos, errores);
}

// Función que guarda el resultado en el LS
function guardarResultados(tiempo, errores) {
    const nombre = localStorage.getItem('nombreJugador'); // Coge el nombre del jugador almacenado
    const palabraSeleccionada = palabraSecreta; // Usamos la palabra secreta del juego

    // Crea un objeto con los resultados
    const resultado = {
        nombre: nombre,
        tiempo: tiempo,
        errores: errores,
        palabra: palabraSeleccionada
    };

    // Recupera los resultados de localStorage 
    const resultados = JSON.parse(localStorage.getItem('resultados')) || [];
    resultados.push(resultado); // Añade el nuevo resultado

    // Guarda los resultados en localStorage
    localStorage.setItem('resultados', JSON.stringify(resultados));
}

// Función que actualiza el cronómetro cada segundo
function crono() {
    tiempoSegundos++; // Incrementa el contador de segundos
    let minutos = Math.floor((tiempoSegundos % 3600) / 60); 
    let segundos = tiempoSegundos % 60; 
    minutos = rellenarConCeros(minutos, 2); 
    segundos = rellenarConCeros(segundos, 2); 
    tiempo.innerHTML = minutos + ':' + segundos; 
}

// Función que añade ceros
function rellenarConCeros(numero, longitud) {
    let num = "" + numero;
    while (num.length < longitud) {
        num = "0" + num;
    }
    return num;
}

// Añade el evento click a cada botón para la letra seleccionada
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.disabled = true; 
        manejarLetra(boton.textContent, boton); 
    });
});

// Función del ahorcado
function inicializarDibujo() {
    partesDibujo.forEach(parte => {
        const elemento = document.querySelector(parte);
        if (elemento) elemento.style.display = 'none'; 
    });
}

inicializarDibujo();
// Capturar elementos del DOM
const contenedor = document.querySelector(".contenedor");
const asientos = document.querySelectorAll(".fila .asiento:not(.ocupado)");
const contador = document.getElementById("contador");
const total = document.getElementById("total");
const peliculaSelect = document.getElementById("pelicula");

// Precio de la pelicula seleccionada
let precioTicket = peliculaSelect.value;

llenaIU();

//FUNCIONES
function actualizaSeleccionAsientos() {
  const asientosSeleccionados = document.querySelectorAll(
    ".fila .asiento.seleccionado"
  );
  // console.log(asientosSeleccionados);

  // const indiceAsientos = [...asientosSeleccionados].map(function(asiento){
  //     return[...asientos].indexOf(asiento);
  // });

  const indiceAsientos = [...asientosSeleccionados].map((asiento) =>
    [...asientos].indexOf(asiento)
  );

  localStorage.setItem("asientosSeleccionados", JSON.stringify(indiceAsientos));

  const contadorAsientosSeleccionados = asientosSeleccionados.length;

  console.log(contadorAsientosSeleccionados);

  contador.innerText = contadorAsientosSeleccionados;

  total.innerText = contadorAsientosSeleccionados * precioTicket;
}

function llenaIU() {
  const asientosSeleccionados = JSON.parse(localStorage.getItem("asientosSeleccionados"));

  if (asientosSeleccionados !== null && asientosSeleccionados.length > 0) {
    asientos.forEach((asiento, index) => {
      if (asientosSeleccionados.indexOf(index) > -1) {
        asiento.classList.add("seleccionado");
      }
    });
  }
  const indicePeliculaSeleccionada = localStorage.getItem("indicePeliculaSeleccionada");

  if (indicePeliculaSeleccionada) {
    peliculaSelect.selectedIndex = indicePeliculaSeleccionada;
  }

  const precioPeliculaSeleccionada = localStorage.getItem("indicePeliculaSeleccionada");

  if(precioPeliculaSeleccionada){
    precioTicket = +precioPeliculaSeleccionada;
  }
  // console.log(asientosSeleccionados);
}

// EVENTOS
contenedor.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("asiento") &&
    !e.target.classList.contains("ocupado")
  ) {
    e.target.classList.toggle("seleccionado");
    actualizaSeleccionAsientos();
  }
});

peliculaSelect.addEventListener("change", (e) => {
  precioTicket = +e.target.value;
  localStorage.setItem("indicePeliculaSeleccionada", e.target.selectedIndex);
  localStorage.setItem("precioPeliculaSeleccionada", e.target.value);
  actualizaSeleccionAsientos();
});

actualizaSeleccionAsientos();

//ahorcado abecedario cuando la letra se pulse ya no se puede volver a pulsar
//sistema de puntuacion(por ej numero de errores max 7)
//cada error se vaya formando un ahorcado(se puede hacer con imagenes)
//un jugador se tiene que poder registrar y quedar guardado en el localstorage
//Registro de records por cada palabra
//tiempo maximo para resolver el ahorcado
//si una palabra tiene ocho letras tenian 40 segundos, cada 5 segundos se le suma un error
//record de tiempo tambien 
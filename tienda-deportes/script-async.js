function capturaArticles(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(
                [
                    {id: 1, nombre: "Pelota de futbol", precio: 20},
            
                    {id: 2, nombre: "Raqueta de tenis", precio: 50}
                ]
            );
        }, 5000); //simula un delay de 5 segundos
    });
}

async function mostrarArticulos(){
    const articulos = document.getElementById("articulos");

    articulos.innerHTML = "<p>Cargando articulos...</p>";

    const articulosRecuperados = await capturaArticles(); // llamada bloqueante

    articulos.innerHTML = articulosRecuperados
                            .map((a)=>`<p>${a.nombre} - ${a.precio}€</p>`)
                            .join("");
}

document.getElementById("articulo-add").addEventListener("submit", async (e) =>{
e.preventDefault();
const nombre = document.getElementById("nombre").value;
const precio = document.getElementById("precio").value;

// Simulamos que lo guardamos en el servidor.
await new Promise((resolve)=> setTimeout(resolve, 1000));

// alert(`Articulo añadido: ${nombre} - ${precio}€`);
console.log(`Articulo añadido: ${nombre} - ${precio}€`);
document.getElementById("articulo-add").reset();
mostrarArticulos();
});

mostrarArticulos();
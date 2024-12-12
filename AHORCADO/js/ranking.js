document.getElementById("palabra-select").addEventListener("change", cargarRanking);

// Función para cargar los rankings filtrados
function cargarRanking() {
    const palabraSeleccionada = document.getElementById("palabra-select").value; // Obtén la palabra seleccionada
    const resultados = JSON.parse(localStorage.getItem('resultados')) || []; // Obtén los resultados guardados

    // Filtrar resultados válidos (adivinan palabra, tiempo > 0, errores <= 9)
    const rankingFiltrado = resultados.filter(result => 
        (!palabraSeleccionada || result.palabra === palabraSeleccionada) &&
        result.tiempo > 0 && result.errores <= 9
    );

    // Ordenar los resultados válidos
    rankingFiltrado.sort((a, b) => {
        // Errores tienen más peso que el tiempo
        const scoreA = a.errores * 100 + a.tiempo;
        const scoreB = b.errores * 100 + b.tiempo;
        return scoreA - scoreB;
    });

    // Mostrar los resultados filtrados en la tabla
    const tbody = document.getElementById("ranking-body");
    tbody.innerHTML = ""; 

    if (rankingFiltrado.length > 0) {
        rankingFiltrado.forEach((resultado, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${resultado.nombre}</td>
                <td>${formatearTiempo(resultado.tiempo)}</td>
                <td>${resultado.errores}</td>
            `;
            tbody.appendChild(row);
        });
    } else {
        // Si no hay resultados válidos
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="4">No hay resultados para mostrar.</td>`;
        tbody.appendChild(row);
    }
}

// Función para formatear el tiempo
function formatearTiempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes}`;
}

// Función para cargar el ranking al cargar la página
window.onload = function() {
    cargarRanking();
};

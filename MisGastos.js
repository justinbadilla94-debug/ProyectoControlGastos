
document.addEventListener("DOMContentLoaded", function () {
    renderizarGastos(app.gastos);
    actualizarTotal(app.gastos);
});

function renderizarGastos(gastos) {
    const lista = document.getElementById("listaGastos");
    const mensajeVacio = document.getElementById("mensajeVacio");

    lista.innerHTML = "";

    if (gastos.length === 0) {
        mensajeVacio.style.display = "block";
        return;
    }

    mensajeVacio.style.display = "none";

    gastos.forEach(function (gasto, indice) {
        const item = document.createElement("div");
        item.classList.add("item-gasto");

        const fecha = new Date(gasto.fecha).toLocaleDateString("es-CR", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        item.innerHTML = `
            <div class="info-gasto">
                <span class="descripcion-gasto">${gasto.descripcion}</span>
                <span class="meta-gasto">📅 ${fecha}</span>
            </div>
            <div class="derecha-gasto">
                <span class="badge-categoria">${gasto.categoria}</span>
                <span class="monto-gasto">₡${gasto.monto.toLocaleString("es-CR")}</span>
                <button class="btn-eliminar" onclick="eliminarGasto(${indice})" title="Eliminar">🗑️</button>
            </div>
        `;

        lista.appendChild(item);
    });
}

function actualizarTotal(gastos) {
    const total = gastos.reduce((acc, g) => acc + g.monto, 0);
    document.getElementById("totalAcumulado").textContent =
        "₡" + total.toLocaleString("es-CR");
}

function eliminarGasto(indice) {
    if (confirm("¿Seguro que deseas eliminar este gasto?")) {
        app.gastos.splice(indice, 1);
        filtrar();
    }
}

function filtrar() {
    const textoBusqueda = document.getElementById("buscador").value.toLowerCase().trim();
    const categoriaSeleccionada = document.getElementById("filtroCategoria").value;

    const gastosFiltrados = app.gastos.filter(function (gasto) {
        const coincideTexto = gasto.descripcion.toLowerCase().includes(textoBusqueda);
        const coincideCategoria = categoriaSeleccionada === "" || gasto.categoria === categoriaSeleccionada;
        return coincideTexto && coincideCategoria;
    });

    renderizarGastos(gastosFiltrados);
    actualizarTotal(gastosFiltrados);
}
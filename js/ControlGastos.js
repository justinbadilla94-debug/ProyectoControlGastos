
class ControlGastos {

    constructor(nombre) {
        this.nombre = nombre;
        this.gastos = this.cargarGastos();
    }

    guardarGastos() {
        localStorage.setItem("gastos", JSON.stringify(this.gastos));
    }

    cargarGastos() {
        const datos = localStorage.getItem("gastos");
        return datos ? JSON.parse(datos) : [];
    }

    agregarGasto(descripcion, categoria, monto) {
        const gasto = {
            descripcion,
            categoria,
            monto,
            fecha: new Date()
        };

        this.gastos.push(gasto);
        this.guardarGastos();
        this.actualizarVista();
    }

    eliminarGasto(indice) {
        this.gastos.splice(indice, 1);
        this.guardarGastos();
    }

    obtenerTotal() {
        return this.gastos.reduce((total, gasto) => total + gasto.monto, 0);
    }

    categoriaMayorGasto() {
        if (this.gastos.length === 0) return "Ninguna";

        const categorias = {};
        this.gastos.forEach(gasto => {
            categorias[gasto.categoria] =
                (categorias[gasto.categoria] || 0) + gasto.monto;
        });

        let mayor = 0;
        let categoriaMayor = "Ninguna";

        for (let categoria in categorias) {
            if (categorias[categoria] > mayor) {
                mayor = categorias[categoria];
                categoriaMayor = categoria;
            }
        }

        return categoriaMayor;
    }

    ultimoGasto() {
        if (this.gastos.length === 0) return "Ninguno";
        const ultimo = this.gastos[this.gastos.length - 1];
        return `${ultimo.descripcion} - ₡${ultimo.monto.toLocaleString("es-CR")}`;
    }

    actualizarVista() {
        const totalEl = document.getElementById("totalGastado");
        const categoriaEl = document.getElementById("categoriaMayor");
        const ultimoEl = document.getElementById("ultimoGasto");

        if (totalEl) totalEl.textContent = "₡" + this.obtenerTotal().toLocaleString("es-CR");
        if (categoriaEl) categoriaEl.textContent = this.categoriaMayorGasto();
        if (ultimoEl) ultimoEl.textContent = this.ultimoGasto();
    }
}

const app = new ControlGastos("Usuario");

const nombreEl = document.getElementById("nombreUsuario");
if (nombreEl) {
    nombreEl.textContent = app.nombre;
    app.actualizarVista();
}

function irRegistrar() {
    window.location.href = "RegistroGasto.html";
}

function irMisGastos() {
    window.location.href = "MisGastos.html";
}

function cerrarSesion() {
    window.location.href = "../index.html";
}


class ControlGastos {

    constructor(nombre) {
        this.nombre = nombre;
        this.gastos = [];
    }

    agregarGasto(descripcion, categoria, monto) {
        const gasto = {
            descripcion,
            categoria,
            monto,
            fecha: new Date()
        };

        this.gastos.push(gasto);
        this.actualizarVista();
    }

    obtenerTotal() {
        return this.gastos.reduce((total, gasto) => total + gasto.monto, 0);
    }

    categoriaMayorGasto() {
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
    return `${ultimo.descripcion} - ₡${ultimo.monto}`;
}

actualizarVista() {
    document.getElementById("totalGastado").textContent =
        "₡" + this.obtenerTotal();

    document.getElementById("categoriaMayor").textContent =
        this.categoriaMayorGasto();

    document.getElementById("ultimoGasto").textContent =
        this.ultimoGasto();
}
}


// ----------------------
// inicializacion 
// ----------------------

const app = new ControlGastos("Usuario");
document.getElementById("nombreUsuario").textContent = app.nombre;

// ----------------------
// datitos de prueba (se eliminar luego)
app.agregarGasto("Supermercado", "Comida", 15000);
app.agregarGasto("Uber", "Transporte", 5000);
app.agregarGasto("Netflix", "Entretenimiento", 7000);


// ----------------------
// acciones de botones
// ----------------------

function irRegistrar() {
    alert("Ir a la pantalla de Registrar Gasto");
}

function irMisGastos() {
    alert("Ir a la pantalla de Mis Gastos");
}

function cerrarSesion() {
    window.location.href = "login.html";
}
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-gasto");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const descripcion = document.getElementById("descripcion").value;
        const monto = document.getElementById("monto").value;
        const categoria = document.getElementById("categoria").value;

        // Creamos una instancia que ya carga lo que existe en localStorage
        const app = new ControlGastos("Usuario");

        app.agregarGasto(descripcion, categoria, monto);

        alert("Gasto guardado correctamente.");

        form.reset();

        // Opcional: volver al panel principal
        window.location.href = "ControlGastos.html";
    });

});
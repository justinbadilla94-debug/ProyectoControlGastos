document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-gasto");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const descripcion = document.getElementById("descripcion").value;
        const monto = document.getElementById("monto").value;
        const categoria = document.getElementById("categoria").value;


        const app = new ControlGastos("Usuario");

        app.agregarGasto(descripcion, categoria, monto);

        alert("Gasto guardado correctamente.");

        form.reset();

        window.location.href = "ControlGastos.html";
    });


});


document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("form-gasto");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const descripcion = document.getElementById("descripcion").value.trim();
        const montoTexto = document.getElementById("monto").value.trim();
        const categoria = document.getElementById("categoria").value;

        if (descripcion === "") {
            alert("Por favor ingresa una descripción.");
            return;
        }

        if (montoTexto === "" || isNaN(montoTexto) || Number(montoTexto) <= 0) {
            alert("Por favor ingresa un monto válido.");
            return;
        }

        if (categoria === "") {
            alert("Por favor selecciona una categoría.");
            return;
        }

        const monto = Number(montoTexto);

        app.agregarGasto(descripcion, categoria, monto);

        alert(` Gasto "${descripcion}" registrado correctamente.`);

        formulario.reset();
    });

});

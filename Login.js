document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript conectado correctamente");

    const correo = document.getElementById("correo");
    const formulario = document.getElementById("formulario-login");

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();
        console.log("Formulario enviado");

        const valorCorreo = correo.value.trim();
        console.log("Valor del correo: " + valorCorreo);

        if (valorCorreo === "") {
            alert("El campo de correo está vacío.");
            return;
        }
        if (!valorCorreo.includes("@")) {
            alert("El correo debe contener '@'.");
            return;
        }
       window.location.href = "controlGastos.html";
    });


    const botones = document.querySelectorAll(".boton-social");
    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const texto = boton.textContent.trim();

            if (texto === "Google") {
                window.location.href = "https://accounts.google.com";
            }

            if (texto === "Instagram") {
                window.location.href = "https://instagram.com";
            }

            if (texto === "Facebook") {
                window.location.href = "https://facebook.com";
            }

        });
    });

});

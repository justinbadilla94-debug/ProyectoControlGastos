document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript conectado correctamente");

    const correo = document.getElementById("correo");
   const formulario = document.getElementById("formulario-login");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const correo = document.getElementById("correo");
        const valorCorreo = correo.value.trim();

        if (valorCorreo === "") {
            alert("El campo de correo está vacío.");
            return;
        }

        if (!valorCorreo.includes("@")) {
            alert("El correo debe contener '@'.");
            return;
        }

        window.location.href = "html/ControlGastos.html";
    });
}


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




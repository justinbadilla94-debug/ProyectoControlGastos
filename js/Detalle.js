const gastos = JSON.parse(localStorage.getItem("gastos")) || []; //Carga datos o crea el espacio para guardarlos

if (gastos.length === 0) {
    alert("No hay gastos registrados para mostrar en el gráfico.");
} else {

    const categorias = {};

    gastos.forEach(gasto => {
        const categoria = gasto.categoria;
        const monto = gasto.monto;

       if (categorias[categoria]) {        //Este if-else se encarga de separar el monto de las categorias
            categorias[categoria] += monto;
        } else {
            categorias[categoria] = monto;
        }
    });

    
    const labels = Object.keys(categorias); //Nombres
    const data = Object.values(categorias); //Valores

    
    const colores = [
        "#1f4d36",
        "#2e7d5b",
        "#4caf50",
        "#3d91ff",
        "#0151fc",
        "#08fdf1",
        "#43a047"
    ];

    
    const canva = document.getElementById("graficoPastel");

   
    new Chart(canva, {

        type: "pie", //Escogimos el pastel

        data: {            //Es dividir los nombres, con sus respectivos numeros y colores.
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colores.slice(0, labels.length),
                borderWidth: 1
            }]
        },
        options: {            //Contexto de cada color
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom"
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ": ₡" + context.raw;
                        }
                    }
                }
            }
        }
    });
}

function cerrarSesion() { //Boton de cerrarSesion
    window.location.href = "../index.html";
} 
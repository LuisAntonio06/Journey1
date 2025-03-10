document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones con la clase 'btn-ver-mas'
    document.querySelectorAll(".principal__boton").forEach(function (button) {
        button.addEventListener("click", function () {
            window.location.href = "productos.html";
        });
    });
});



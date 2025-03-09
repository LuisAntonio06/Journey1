document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones con la clase 'btn-ver-mas'
    document.querySelectorAll(".btn-ver-mas").forEach(function (button) {
        button.addEventListener("click", function () {
            window.location.href = "producto.html";
        });
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 80; // Espacio extra arriba
    const position = target.offsetTop - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  });
});
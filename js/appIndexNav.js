document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar elementos del DOM
    const menuButton = document.querySelector(".menu")
    const navLinks = document.getElementById("navegacion__enlaces")
  
    // Función para alternar el menú
    function toggleMenu() {
      menuButton.classList.toggle("active")
      navLinks.classList.toggle("active")
x    }
  
    // Evento click para el botón de menú
    menuButton.addEventListener("click", toggleMenu)
  
    // Cerrar el menú al hacer clic en un enlace
    const links = document.querySelectorAll(".navegacion__enlace, .navegacion__enlace-acceder")
    links.forEach((link) => {
      link.addEventListener("click", () => {
        // Solo cerrar si estamos en vista móvil (menú está activo)
        if (navLinks.classList.contains("active")) {
          toggleMenu()
        }
      })
    })
  
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", (event) => {
      const isClickInsideNav = navLinks.contains(event.target)
      const isClickOnMenuButton = menuButton.contains(event.target)
  
      if (navLinks.classList.contains("active") && !isClickInsideNav && !isClickOnMenuButton) {
        toggleMenu()
      }
    })
  })
  
  

  
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
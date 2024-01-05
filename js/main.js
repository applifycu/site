window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var botonFlotante = document.getElementById("boton-flotante");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonFlotante.style.display = "block"; /* Muestra el botón al hacer scroll hacia abajo */
  } else {
    botonFlotante.style.display = "none"; /* Oculta el botón si se está en la parte superior de la página */
  }
}

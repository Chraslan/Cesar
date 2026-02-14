// anim.js - Versión simplificada sin errores

var lyrics = document.querySelector("#lyrics");
var audio = document.querySelector("audio");

// ============================================
// CONFIGURACIÓN DE MÚSICA (SIN REPRODUCCIÓN AUTOMÁTICA)
// ============================================
if (audio) {
    audio.volume = 0.5; // Solo configuramos el volumen
    
    // La música NO se reproducirá automáticamente
    // Solo sonará si alguien hace click en las flores (eso ya está en tu HTML)
    console.log("Audio configurado, esperando click en flores para reproducir");
}

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

// Llama a la función después de 216 segundos
setTimeout(ocultarTitulo, 216000);

console.log("anim.js cargado correctamente");
var ruta = window.location.href;
console.log(ruta);

// Se escribe la ruta dentro del parrafo con id "ruta".
var parrafo = document.getElementById("ruta");
parrafo.textContent = "Estas en " + ruta;

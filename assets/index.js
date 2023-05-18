function redirigir() {
  const numero = document.getElementById("numero").value;
  if (numero == 1) {
    window.location.href = "src/casa.html" + "?integrantes=" + numero;
  } else if (numero > 1 && numero <= 8) {
    window.location.href = "src/estudio.html" + "?integrantes=" + numero;
  } else if (numero > 8 && numero <= 16) {
    window.location.href = "src/mediana.html" + "?integrantes=" + numero;
  } else {
    window.location.href = "src/corporativa.html" + "?integrantes=" + numero;
  }
}

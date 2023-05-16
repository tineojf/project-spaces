function redirigir() {
  const numero = document.getElementById("numero").value;
  if (numero == 1) {
    window.location.href = "/src/casa.html" + "?integrantes=" + numero;
  } else if (numero > 1 && numero <= 5) {
    window.location.href = "/src/estudio.html" + "?integrantes=" + numero;
  } else if (numero > 5 && numero <= 20) {
    window.location.href = "/src/mediana.html" + "?integrantes=" + numero;
  } else {
    window.location.href = "/src/corporativa.html" + "?integrantes=" + numero;
  }
}

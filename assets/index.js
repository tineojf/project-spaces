function redirigir() {
  const numero = document.getElementById("numero").value;
  if (numero == 1) {
    window.location.href = "/project-spaces/src/casa.html" + "?integrantes=" + numero;
  } else if (numero > 1 && numero <= 8) {
    window.location.href = "/project-spaces/src/estudio.html" + "?integrantes=" + numero;
  } else if (numero > 8 && numero <= 16) {
    window.location.href = "/project-spaces/src/mediana.html" + "?integrantes=" + numero;
  } else {
    window.location.href = "/project-spaces/src/corporativa.html" + "?integrantes=" + numero;
  }
}

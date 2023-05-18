var valorParametro = new URLSearchParams(window.location.search).get(
  "integrantes"
);

// Selecciona todos los elementos <span> con la clase 'resultado'
var resultadoElements = document.querySelectorAll("span.resultado");

// Asigna el valor a cada elemento
resultadoElements.forEach(function (element) {
  element.textContent = valorParametro;
});

var areaElement = document.querySelector("span.area");

areaElement.textContent = (parseFloat(valorParametro) * 8.7).toFixed(2);
var valorParametro = new URLSearchParams(window.location.search).get(
  "integrantes"
);

// Selecciona todos los elementos <span> con la clase 'resultado'
var resultadoElements = document.querySelectorAll("span.resultado");
var formaElements = document.querySelector("span.forma");
var areaElement = document.querySelector("span.area");

// Asigna el valor a cada elemento
resultadoElements.forEach(function (element) {
  element.textContent = valorParametro;
});

areaElement.textContent = (parseFloat(valorParametro) * 8.7).toFixed(2);

if (valorParametro % 2 == 0) {
  formaElements.textContent = "cuadrada.";
} else {
  formaElements.textContent = "lineal.";
}

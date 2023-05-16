const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const numero = urlParams.get("integrantes");
console.log("integrantes: " + numero);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const numero = urlParams.get("numero");
console.log(numero);

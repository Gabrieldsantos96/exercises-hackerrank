const original = "97.50";
const resultado = original.replace(".", ","); // poderia usar o replace no próprio resultado.

let

while (resultado !== resultadoAnterior) {
  resultadoAnterior = resultado;
  resultado = resultado.replace(",", ".");
}

console.log(resultado);
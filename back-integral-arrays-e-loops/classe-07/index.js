const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesA = [];

for (let letra of nomes) {
  if (letra[0] === "A" || letra[0] === "a") {
    nomesA.push(letra);
  }
} console.log(nomesA);
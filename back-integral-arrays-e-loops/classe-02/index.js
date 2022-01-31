const palavra = ["A", "a", "B", "E", "e", "z"];

let bank = 0;
let encontrado = false;

for (let letra of palavra) {
  if (letra === "e" || letra === "E") {
    encontrado = true;
    bank++;
  }
} if (bank === 0) {
  console.log("Não tem a letra E");
} else if (bank === 1) {
  console.log("Foi encontrada a letra E apenas uma vez");
} else {
  console.log(`Foi encontrado ${bank} E ou e no array`);
}

const numeros = [54, 22, 14, 87, 10, 284];
let encontrado = false;
for (i = 0; i < numeros.length; i++) {
  const item = numeros[i];

  if (item === 10) {
    encontrado = true;
    console.log(`O número 10 foi encontrado no índice ${i}`);
    break;
  }
} if (!encontrado) {
  console.log("O número 10 não foi encontrado");
}
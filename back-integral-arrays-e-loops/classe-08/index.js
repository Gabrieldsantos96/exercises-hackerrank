const numeros = [3, 24, 1, 8, 11, 7, 15];
let maiorN = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorN) {
    maiorN = numeros[i];
  }
}
console.log(maiorN);
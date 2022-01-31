const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let numeroPares = 0;

for (let originals of numeros) {
  if (originals % 2 == 0) {
    numeroPares += originals;
  }
} console.log(numeroPares);

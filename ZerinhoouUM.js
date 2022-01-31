let jogadores = [1, 1, 1, 0, 1];
let zero = [];
let um = [];

for (let i = 0; i < jogadores.length; i++) {
  if (jogadores[i] === 0) {
    zero = jogadores[i];
  } else {
    um = jogadores[i];
  }
  i++;
}

console.log(zero);
console.log(um);

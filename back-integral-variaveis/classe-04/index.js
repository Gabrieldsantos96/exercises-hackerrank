let valorInicial = 1000;
let taxa = 12.5/100;
let tempo = 5;
//![M = 1000 (1 + 0,125)^5 \\ M = 1000 (1,802) \\ M = 1802]
let valorFinal = valorInicial * Math.pow((1+taxa), tempo);

console.log(valorFinal);
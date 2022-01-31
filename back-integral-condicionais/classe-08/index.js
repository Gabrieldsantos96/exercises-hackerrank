const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;
if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
  console.log("acesso negado");
} else if (ehEstudante === true) {
  console.log("paga 10");
} else {
  console.log("paga 20");
}

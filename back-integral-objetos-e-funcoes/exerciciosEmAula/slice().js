const localizacao = "salvador-ba";


const estado = localizacao.slice(-2);

console.log(estado);


const localizacao1 = "rio de janeiro - rj";

const EndIndex = localizacao1.indexOf("-");

const cidade = localizacao1.slice(0, EndIndex);
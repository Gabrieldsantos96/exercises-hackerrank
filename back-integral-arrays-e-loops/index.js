
stringCorrompida = "Dsklfjosdfp¨@&*#"

function solucao(stringCorrompida) {

  let dadosPurificados = '';

  for (let caractere of stringCorrompida) {

    if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '%' || caractere === '&' ||
      caractere === '*' || caractere === '(' || caractere === ')' || caractere === '.' || caractere === '$') {
      //ignore
    } else {
      dadosPurificados = dadosPurificados + caractere;
    }
  } console.log(dadosPurificados);
}

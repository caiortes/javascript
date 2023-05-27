// descarta a menor nota e faz a média das outras notas.
// nota1 - nota2 / nota1 - nota3/ nota2 - nota3
const nota1 = 8;
const nota2 = 9;
const nota3 = 10;

function menorNota(n1, n2, n3) {
  let menorNota;

  if (n1 <= n2 && n1 <= n3) {
    return (menorNota = n1);
  } else if (n2 <= n1 && n2 <= n3) {
    return (menorNota = n2);
  } else {
    return (menorNota = n3);
  }
}

function media(nota1, nota2, nota3) {
  let menorValor = menorNota(nota1, nota2, nota3);

  if (menorValor === nota1) {
    return Math.ceil((nota2 + nota3) / 2);
  } else if (menorValor === nota2) {
    return Math.ceil((nota1 + nota3) / 2);
  } else {
    return Math.ceil((nota1 + nota2) / 3);
  }
}

function mediaStatus(media) {
  if (media >= 7) {
    return `O aluno foi Aprovado com média ${media}!!`;
  } else if (media >= 4) {
    return `O aluno ficou de Recuperação com média ${media}!!`;
  } else {
    return `O aluno foi Reprovado com média ${media}!!`;
  }
}

function resultadoFinal(nota1, nota2, nota3) {
  let resultado = media(nota1, nota2, nota3);
  return mediaStatus(resultado);
}

console.log(resultadoFinal(nota1, nota2, nota3));

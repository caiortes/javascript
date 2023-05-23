// Aluno faltou 18 vezes em um total de 223 aulas no ano
// Notas: 5.8, 8.1, 6.9

//O aluno foi aprovado?
//Média maior ou igual que 7 e frequência de 80%

const notas = [5.8, 8.1, 6.9];
const totalAulas = 223;
const faltas = 18;

let media = 0;

for (let i = 0; i < notas.length; i++) {
  media += notas[i];
}

let mediaTotal = Math.round(media / notas.length);
let frequencia = Math.round((1 - faltas / totalAulas) * 100);

if (mediaTotal >= 7 && frequencia >= 80) {
  console.log(
    `O aluno foi aprovado com média de ${mediaTotal} e frequência de ${frequencia}%!!`
  );
} else {
  console.log(
    `O aluno foi reprovado com média de ${mediaTotal} e frequência de ${frequencia}%!!`
  );
}

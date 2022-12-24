const fruta = "Laranja";

const frutas = {
  Banana: "A banana custa R$ 5,00 o quilo",
  Abacaxi: "O Abacaxi custa R$ 6,00 o quilo",
  Laranja: "A laranja é uma fruta cítrica, e custa R$ 10,00 o quilo",
  Maça: "A maça custa R$ 8,00 o quilo",
};

const mensagem = frutas[fruta] || "Não temos essa fruta disponível ";

console.log(mensagem);

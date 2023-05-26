// [1-1] [1-2] [1-3]
// [2-1] [2-2] [2-3]
// [3-1] [3-2] [3-3]


let conteudo = ''

for (linha = 1; linha <= 3; linha++) {
  for (coluna = 1; coluna <= 3; coluna++) {
    conteudo += `[${linha}-${coluna}]`
  }
  conteudo += '\n'
}

console.log(conteudo)
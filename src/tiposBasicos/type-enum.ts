enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
  ROXO = 'ROXO',
  VERDE = 201,
  PRETO,
}

enum Cores {
  Rosa = 202,
}

// console.log(Cores);
// console.log(Cores.VERMELHO);
// console.log(Cores[4]);

function escolhaAcor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaAcor(Cores.AZUL);

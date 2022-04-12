const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  /*se precisar usar outras chaves*/
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

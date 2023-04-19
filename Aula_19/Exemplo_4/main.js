const alimentos = [
  {
    nome: 'Banana',
    cor: 'Amarelo',
    peso: 0.5,
    tipo: 'Fruta',
  },
  {
    nome: 'Tomate',
    cor: 'Vermelho',
    peso: 0.1,
    tipo: 'Verdura',
    local: {
      pais: 'Brasil',
      solo: 'arenoso',
      clima: 'frio',
    },
  },
  {
    nome: 'Morango',
    cor: 'Vermelho',
    peso: 0.1,
    tipo: 'Fruta',
  },
  {
    nome: 'Beterraba',
    cor: 'Roxo',
    peso: 0.3,
    tipo: 'Legume',
  },
  {
    nome: 'Abacate',
    cor: 'Verde',
    peso: 0.25,
    tipo: 'Fruta',
  },
];

console.log(alimentos);

function exibir(alimentos) {
  alimentos.forEach(function (alimento) {
    if (alimento.tipo === 'fruta') {
      console.log(alimento.nome);
    }
  });
}

exibir(alimentos);

function total(alimentos) {
  let contFrutas = 0;
  let contVerduras = 0;
  let contLegumes = 0;

  alimentos.forEach(function (alimento) {
    if (alimento.tipo === 'Fruta') {
      contFrutas++;
    } else if (alimento.tipo === 'Verdura') {
      contVerduras++;
    } else if (alimento.tipo === 'Legume') {
      contLegumes++;
    }
  });

  console.log(`Quantidade de frutas: ${contFrutas}`);
  console.log(`Quantidade de verduras: ${contVerduras}`);
  console.log(`Quantidade de legumes: ${contLegumes}`);
}

total(alimentos);

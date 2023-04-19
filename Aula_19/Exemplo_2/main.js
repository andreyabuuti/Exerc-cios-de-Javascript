function sub(x, y) {
  if (x < y) {
    console.log('Não foi possível subtrair.');
  } else {
    var resultado = x - y;
    return resultado;
  }
}

console.log(sub(3, 2));

function div(x, y) {
  if (y < 0) {
    console.log('Não foi possível dividir.');
  } else {
    var resultado = x - y;
    return resultado;
  }
}

console.log(div(4, 2));

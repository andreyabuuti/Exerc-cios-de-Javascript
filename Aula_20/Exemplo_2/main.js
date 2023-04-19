function somar() {
  var numero1 = parseInt(document.getElementById('numero1').value, 10);
  var numero2 = parseInt(document.getElementById('numero2').value, 10);

  document.getElementById('resultado').innerHTML = numero1 + numero2;
}

function subtrair() {
  var numero1 = parseInt(document.getElementById('numero1').value, 10);
  var numero2 = parseInt(document.getElementById('numero2').value, 10);

  document.getElementById('resultado').innerHTML = numero1 - numero2;
}

function multiplicar() {
  var numero1 = parseInt(document.getElementById('numero1').value, 10);
  var numero2 = parseInt(document.getElementById('numero2').value, 10);

  document.getElementById('resultado').innerHTML = numero1 * numero2;
}

function dividir() {
  var numero1 = parseInt(document.getElementById('numero1').value, 10);
  var numero2 = parseInt(document.getElementById('numero2').value, 10);

  document.getElementById('resultado').innerHTML = numero1 / numero2;
}

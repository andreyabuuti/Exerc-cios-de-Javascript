var itens = [];

function buttonClick() {
  var item = document.querySelector('#item');
  itens.push(item.value);
  console.log(itens);
  document.getElementById('item').value = '';
}

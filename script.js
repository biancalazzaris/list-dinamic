let input = document.querySelector('input');
let btAdd = document.getElementById('js-btAdd');
console.log(btAdd);
let inserirPai = document.getElementById('js-ul');
let excluirPai = document.getElementById('remove');

btAdd.addEventListener('click', function(event) {
    event.preventDefault();
    let addItem = document.createElement('li');
    addItem.textContent = input.value;
    inserirPai.appendChild(addItem);
  
    let addButtonRemover = document.createElement('button');
    addButtonRemover.textContent = 'excluir';
    addButtonRemover.id = 'js-delete';
    excluirPai.appendChild(addButtonRemover);
});
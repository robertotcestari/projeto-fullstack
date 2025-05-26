// Pegar Elementos do DOM

const increaseBtnElement = document.querySelector('#increase-button');
const resetBtnElement = document.querySelector('#reset-button');
const decreaseBtnElement = document.querySelector('#decrease-button');
const counterElement = document.querySelector('#counter');

// Pegar o valor do contador
let counterValue = 0;

// Adicionar evento de clique no botão de aumentar
increaseBtnElement.addEventListener('click', () => {
  counterValue++;
  counterElement.textContent = counterValue;
});
// Adicionar evento de clique no botão de resetar
resetBtnElement.addEventListener('click', () => {
  counterValue = 0;
  counterElement.textContent = counterValue;
});
// Adicionar evento de clique no botão de diminuir
decreaseBtnElement.addEventListener('click', () => {
  counterValue--;
  counterElement.textContent = counterValue;
});

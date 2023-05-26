// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

//1
href.addEventListener('click', (event) => {
  event.preventDefault();
});

//2
inputCheckbox.addEventListener('click', (event) => {
  event.preventDefault();
});

//3 
inputText.addEventListener('keypress', (event) => {
  if (event.key !== 'a') {
    event.preventDefault();
  }
});

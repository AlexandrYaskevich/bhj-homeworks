const inputText = document.getElementById(`editor`);

document.addEventListener(`keyup`, () => {
  localStorage.setItem(`saveText`, inputText.value);
})

window.addEventListener(`load`, () => {
  inputText.value = localStorage.getItem(`saveText`);
})


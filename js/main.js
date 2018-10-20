const controls = document.querySelectorAll('input[type=button]');
controls.forEach(button => button.addEventListener('click', event => {
  event.preventDefault();
  console.info(button.value);
}))

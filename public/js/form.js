// Seleccionar el botón y el contenedor del formulario
const showFormBtn = document.getElementById('showFormBtn');
const formWrapper = document.querySelector('.form-wrapper');

// Alternar entre mostrar y ocultar el formulario con deslizamiento
showFormBtn.addEventListener('click', () => {
  if (formWrapper.classList.contains('hidden')) {
    formWrapper.classList.remove('hidden');
    formWrapper.classList.add('show');
  } else {
    formWrapper.classList.remove('show');
    formWrapper.classList.add('hidden');
  }
});

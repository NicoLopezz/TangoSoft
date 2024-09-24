const section = document.querySelector('.scroll-section');
const ctaBtn = document.querySelector('.cta-btn');
const form = document.querySelector('#contact-form');
const hideBtn = document.querySelector('.hide-btn');
const mainTitle = document.querySelector('.main-title');
const subTitle = document.querySelector('.sub-title');
const thankYouMessage = document.querySelector('.thank-you'); // Asegúrate de tener este elemento en tu HTML

let isFormVisible = false; // Variable de estado para controlar la visibilidad del formulario

// Evento de clic para el botón que despliega el formulario
ctaBtn.addEventListener('click', () => {
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        form.classList.add('show');
        mainTitle.style.opacity = '0'; // Oculta el título
        subTitle.style.opacity = '0'; // Oculta el subtítulo
        ctaBtn.classList.add('hide'); // Oculta el botón
    }
});

// Evento de clic para ocultar el formulario
hideBtn.addEventListener('click', () => {
    form.classList.remove('show');
    form.classList.add('hidden');

    // Esperar a que el formulario se oculte antes de mostrar el título y subtítulo
    setTimeout(() => {
        mainTitle.style.opacity = '1'; // Muestra el título
        subTitle.style.opacity = '1'; // Muestra el subtítulo
        ctaBtn.classList.remove('hide'); // Remueve la clase para volver a mostrar el botón
    }, 300); // 300ms para esperar a que se oculte el formulario
});

// Evento para enviar el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Crea un objeto con los datos del formulario
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Enviar los datos a un endpoint con fetch
    fetch('https://jsonplaceholder.typicode.com/posts', { // Reemplaza con tu URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convierte el objeto a JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json(); // Espera la respuesta en formato JSON
    })
    .then(data => {
        console.log('Éxito:', data);
        
        // Muestra el mensaje de agradecimiento
        thankYouMessage.classList.remove('hidden');
        thankYouMessage.classList.add('show'); // Añade la clase .show para cambiar la opacidad
        thankYouMessage.style.opacity = '1'; // Asegúrate de que el mensaje sea visible

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            thankYouMessage.style.opacity = '0'; // Desvanece el mensaje
            setTimeout(() => {
                thankYouMessage.classList.add('hidden'); // Oculta el mensaje completamente
            }, 500); // Espera a que se desvanezca antes de ocultarlo
        }, 3000); // Mostrar durante 3 segundos

        // Limpiar el formulario
        form.reset();

        // Ocultar el formulario
        form.classList.remove('show');
        form.classList.add('hidden');
        
        // Mostrar el título y subtítulo nuevamente
        mainTitle.style.opacity = '1'; // Muestra el título
        subTitle.style.opacity = '1'; // Muestra el subtítulo
        ctaBtn.classList.remove('hide'); // Vuelve a mostrar el botón
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

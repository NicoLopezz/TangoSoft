// Precarga las imágenes para evitar el retardo
const preloadImages = (imageUrls) => {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

// Array de URLs de las imágenes
const imageUrls = [
    "../public/imgs/barSoftL.jpg",
    "../public/imgs/estudioContableL.jpeg", 
    "../public/imgs/tangoGestion.jpg", 
    
];

// Llama a la función para precargar todas las imágenes
preloadImages(imageUrls);



// Selecciona todos los elementos de flecha
const arrows = document.querySelectorAll('.imgRow');
const arrows2 = document.querySelectorAll('.imgRow2');
const blocks = document.querySelectorAll('.block1, .block2, .block3, .block4, .block5');
const triangle = document.querySelector('.triangle'); // Selecciona el triángulo
const squareContainer = document.querySelector('.square-container'); // Selecciona el contenedor
const body = document.body; // Selecciona el body del documento

// Agrega un listener a cada flecha para detectar el clic
arrows.forEach(arrow => {
    arrow.addEventListener('click', function(event) {
        // Evita que el clic en la flecha propague el evento
        event.stopPropagation();

        // Encuentra el bloque padre más cercano
        const block = this.closest('.block1, .block2, .block3, .block4, .block5');

        // Primero, resetea todos los bloques
        resetBlocks();

        // Luego, mueve solo el bloque padre del clic
        block.style.transform = 'translateX(-10%)';
        
        block.style.opacity = '1';

        // Cambia el color de fondo del triángulo y el fondo del body
        changeBackground(block);
    });
});

arrows2.forEach(arrow2 => {
    arrow2.addEventListener('click', function(event) {
        // Evita que el clic en la flecha propague el evento
        event.stopPropagation();

        // Encuentra el bloque padre más cercano
        const block = this.closest('.block1, .block2, .block3, .block4, .block5');

        // Primero, resetea todos los bloques
        resetBlocks();

        // Luego, vuelve a mover el bloque a su posición original
        block.style.transform = 'translateX(0)';
    });
});

// Función para resetear todos los bloques
function resetBlocks() {
    blocks.forEach(otherBlock => {
        otherBlock.style.transform = 'translateX(0)'; // Regresa todos los bloques a su posición original
        otherBlock.style.opacity = '0.8';

    });
}



const backgroundImages = {
    block1: "../public/imgs/estudioContableL.jpeg", // Cambia esto por la imagen correspondiente
    block2: "../public/imgs/puntoDeVenta2.jpeg", // Cambia esto por la imagen correspondiente
    block3: "../public/imgs/barSoft2.jpeg",
    block4: "../public/imgs/tangoGestion.jpeg", // Cambia esto por la imagen correspondiente
    block5: "../public/imgs/tangoNexo2.jpeg" // Cambia esto por la imagen correspondiente
};
// Función para cambiar el fondo del triángulo y el body
function changeBackground(block) {
    const blockColor = window.getComputedStyle(block).backgroundColor; // Obtiene el color de fondo del bloque
    triangle.style.backgroundColor = blockColor; // Cambia el color del triángulo

    const blockBackgroundImage = window.getComputedStyle(block).backgroundImage; // Obtiene la imagen de fondo del bloque
    squareContainer.style.transition = 'background-image 0.5s ease'; // Añade transición
    squareContainer.style.backgroundImage = blockBackgroundImage; // Cambia la imagen de fondo del contenedor

      // Cambia el fondo del body basado en el bloque
      const blockClass = block.classList[0]; // Obtiene la clase del bloque (block1, block2, ...)
      body.style.backgroundImage = `url(${backgroundImages[blockClass]})`;
      body.style.backgroundPosition = 'center'; // Centrar la imagen
      body.style.backgroundRepeat = 'no-repeat'; // No repetir la imagen
      body.style.backgroundSize = 'cover'; // Ajusta la imagen sin estirarla
    
        
}




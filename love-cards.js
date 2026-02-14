// love-cards.js - Funcionalidad para mostrar cards con imágenes y mensajes

// Array con mensajes personalizados para cada flor
const loveMessages = [
    "Te amo con todo mi corazón 💖",
    "Eres la flor más hermosa de mi jardín 🌸",
    "Mi amor por ti es eterno 💕",
    "Cada día te amo más  💗",
    "Eres mi razón de sonreír 💓",
    "Contigo todo es mejor 💝",
    "Te amo hoy, mañana y siempre 💘",
    "Eres mi persona favorita 💖",
    "Mi amor por ti crece como esta flor 🌺",
    "Eres lo más bonito que tengo 💗"
];

// Array con las rutas de las imágenes para cada flor
const photoPaths = [
    "photo/1.jpeg",
    "photo/2.jpeg", 
    "photo/3.jpeg",
    "photo/4.jpeg",
    "photo/5.jpeg",
    "photo/6.jpeg",
    "photo/7.jpeg",
    "photo/8.jpeg"
];

// Función para mostrar el card
window.showLoveCard = function(flowerNumber) {
    // Verificar si ya existe un card para esta flor
    const existingCard = document.querySelector(`.love-card[data-flower="${flowerNumber}"]`);
    if (existingCard) {
        existingCard.remove();
        return;
    }

    // Crear el elemento del card
    const card = document.createElement('div');
    card.className = 'love-card';
    card.setAttribute('data-flower', flowerNumber);
    
    // Seleccionar un mensaje aleatorio
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    const message = loveMessages[randomIndex];
    
    // Obtener la ruta de la imagen para esta flor
    const photoPath = photoPaths[flowerNumber - 1] || "photo/default.jpg";
    
    // Contenido del card con imagen y mensaje
    card.innerHTML = `
        <div class="love-card-content">
            <div class="love-card-header">
		<span class="love-card-title"></span>
                <button class="love-card-close" onclick="window.closeThisCard(this); event.stopPropagation();">×</button>
            </div>
            <div class="love-card-body">
                <div class="love-card-image-container">
                    <img src="${photoPath}" alt="Foto ${flowerNumber}" class="love-card-image" onerror="this.src='photo/default.jpg'">
                </div>
                <p class="love-card-message">${message}</p>
            </div>
        </div>
    `;
    
    // Agregar al contenedor
    document.getElementById('cardContainer').appendChild(card);
    
    // Animar la aparición
    setTimeout(() => {
        card.classList.add('show');
    }, 10);
    
    console.log('Card mostrado para flor', flowerNumber, 'con imagen:', photoPath);
};

// Función específica para cerrar el card desde el botón
window.closeThisCard = function(button) {
    if (button) {
        const card = button.closest('.love-card');
        if (card) {
            card.remove();
            console.log('Card cerrado');
        }
    }
    return false;
};

// Cerrar card al hacer clic fuera
document.addEventListener('click', function(event) {
    if (!event.target.closest('.love-card') && !event.target.closest('.flower__leafs')) {
        const cards = document.querySelectorAll('.love-card');
        cards.forEach(card => card.remove());
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('love-cards.js cargado correctamente');
    
    // Agregar cursor pointer a las hojas de las flores
    const flowerLeafs = document.querySelectorAll('.flower__leafs');
    flowerLeafs.forEach(leaf => {
        leaf.style.cursor = 'pointer';
    });
});

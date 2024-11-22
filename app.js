document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // URL de la API a consumir
    const API_URL = 'https://example.com/api/mensajes';

    // Consumir la API con fetch
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Procesar y mostrar los datos
            data.forEach(mensaje => {
                const mensajeDiv = document.createElement('div');
                mensajeDiv.textContent = mensaje.texto;
                app.appendChild(mensajeDiv);
            });
        })
        .catch(error => {
            console.error('Error al consumir la API:', error);
            app.textContent = 'Error al cargar los mensajes.';
        });
});

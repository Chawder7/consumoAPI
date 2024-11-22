document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    
    const API_URL = 'https://api.gameofthronesquotes.xyz/v1/random';

    
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
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

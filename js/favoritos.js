function toggleFavorito(movieId) {
    // Obtener películas favoritas del localStorage
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Verificar si la película ya está en favoritos
    let index = favoritos.indexOf(movieId);

    if (index === -1) {
        // Si no está en favoritos, agrégala
        favoritos.push(movieId);
    } else {
        // Si ya está en favoritos, quítala
        favoritos.splice(index, 1);
    }

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Obtener el botón de favoritos por su ID
let btnFavorito = document.getElementById('btnFavorito');

// Obtener el ID de la película (puedes obtenerlo de la URL o de otra manera)
let movieId = obtenerMovieId(); // Debes implementar la lógica para obtener el ID

// Asignar el evento de clic al botón de favoritos
btnFavorito.addEventListener('click', function () {
    // Llamar a la función para agregar/quitar la película de favoritos
    toggleFavorito(movieId);
});
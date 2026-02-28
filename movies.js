// movies.js
async function loadMovies() {
    try {
        const response = await fetch('movies.json');
        const movies = await response.json();
        const grid = document.getElementById('movieGrid');

        // Clear grid first if needed
        grid.innerHTML = '';

        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            
            // Ensure movie.image points to the file path in your JSON
            card.innerHTML = `
                <span class="movie-year">${movie.year}</span>
                <img src="${movie.image}" alt="${movie.title}" onerror="this.src='placeholder.jpg'">
                <h3 class="movie-title">${movie.title}</h3>
            `;
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading movie data:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadMovies);
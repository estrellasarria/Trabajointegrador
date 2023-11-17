// VINCULAR API PARA OBTENER DETALLES DE PELICULAS

let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let movieId = params.get("id");
console.log(movieId)
let apiKey = "43c74b59045ed8eefa36be7448cda7ac";
let peliculasEndpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;


fetch(peliculasEndpoint)
.then(function (res) {
        return res.json();
    })
.then(function (data) {
        console.log(data);
        let title = pelicula.title;
        let releaseDate = pelicula.release_date;
        let rating = pelicula.vote_average;
        let overview = pelicula.overview;
        let posterPath = pelicula.poster_path;
        let detallesContainer = document.querySelector('#detallesContainer');

        detallesContainer.innerHTML+= `
            <article>
                <img src="https://image.tmdb.org/t/p/w342${posterPath}">
                <h3>${title}</h3>
                <p>${releaseDate}</p>
                <p>Calificación: ${rating}</p>
                <p>Sinopsis: ${overview}</p>
                <button class="agregar-favorito"><a href="favoritos.html">Agregar a Favoritos</a></button>
            </article>`;

       
    })
.catch(function (e) {
        console.error("Error: " + e);
    });


//VINCULAR API PARA RECOMENDACIONES

let recomendacionesEndpoint=`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
let recomendacionesContainer= document.querySelector('#recomendacionesCointainer')

fetch(recomendacionesEndpoint)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let recomendaciones = data.results
    let recomendacionesHtml=""
    for (let i=0; i< recomendaciones.length; i++){
        let recomendacion= recomendaciones[i]
        let title= recomendacion.title
        let posterPath= recomendacion.poster_path

        recomendacionesHtml +=
        `<article><a href="detallePeliculas.html?id=${recomendacion.id}">
        <img src="https://image.tmdb.org/t/p/w342${posterPath}" alt="${title}"></a>
        <h3>${title}</h3>
        </article>`;
    }
    recomendacionesContainer.innerHTML+= recomendacionesHtml
})
.catch(function(e){
    console.log('el error es '+ e)
})

//Género al que pertenece. Si tiene más de un género deben mostrarse todos. Cada género debe linkear al detalle de género que corresponda
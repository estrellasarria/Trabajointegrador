// VINCULAR API PARA OBTENER DETALLES DE PELICULAS

let apiKey="43c74b59045ed8eefa36be7448cda7ac"
let detallesCointainer= document.querySelector('#detallesContainer')

let detallesPeliculasEndpoint= `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

fetch(detallesPeliculasEndpoint)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
    let peliculas= data.results
    let detallesHtml=""

    for (let i=0; i< peliculas.length; i++){
        let pelicula= peliculas[i]
        let movieId= pelicula.id
        let title= pelicula.title
        let releaseDate= pelicula.release_date
        let rating= pelicula.vote_average
        let overview= pelicula.overview
        let posterPath= pelicula.poster_path

        detallesHtml+= `<article>
       <img src="https://image.tmdb.org/t/p/w342${posterPath}" alt="${title}">
        <h3>${title}</h3>
        <p>Fecha de Estreno: ${releaseDate}</p>
        <p>Calificación: ${rating}</p>
        <p>Sinopsis: ${overview}</p>
        <a href="detallePeliculas.html?movie_id=${movieId}"><button>Ver Detalles</button></a><button class="agregar-favorito"><a href="favoritos.html">Agregar a Favoritos</a></button>
        </article>`;
    }
    detallesCointainer.innerHTML= detallesHtml

})
.catch(function(error){
    console.log('error es '+ error)
})

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
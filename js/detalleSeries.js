// VINCULAR API PARA OBTENER DETALLES DE SERIES

let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let seriesId = params.get("id");
console.log(seriesId);

let apiKey = "43c74b59045ed8eefa36be7448cda7ac"; 
let seriesEndpoint = `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`;
console.log(seriesEndpoint);

fetch(seriesEndpoint)
  .then(function (res) {
    return res.json();
  })
  .then(function (serie) {
    console.log(serie);

    let title = serie.name; 
    let dia = serie.first_air_date;
    let rating = serie.vote_average;
    let overview = serie.overview;
    let posterPath = serie.poster_path;
    let detallesContainer = document.querySelector('#detallesContainer');

    detallesContainer.innerHTML += `<h2>Conoce los detalles de: ${title}</h2><article>
                <img src="https://image.tmdb.org/t/p/w342${posterPath}">
                <h3>${title}</h3>
                <p>Fecha de Estreno: ${dia}</p>
                <p>Calificación: ${rating}</p>
                <p>Sinopsis: ${overview}</p>
                <button class="agregar-favorito"><a href="favoritos.html">Agregar a Favoritos</a></button>
            </article>`;
           
  })
  .catch(function (e) {
    console.error("Error: " + e);
  });


//VINCULAR API PARA RECOMENDACIONES

let recomendacionesEndpoint=`https://api.themoviedb.org/3/tv/${seriesId}/recommendations?api_key=${apiKey}`

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
        let title= recomendacion.name
        let posterPath= recomendacion.poster_path

        recomendacionesHtml +=
        `<article>
        <a href="detalleSeries.html?id=${recomendacion.id}">
        <img src="https://image.tmdb.org/t/p/w342${posterPath}" alt="${title}">
        </a>
        <h3>${title}</h3>
        </article>`;
    }
    recomendacionesContainer.innerHTML+= recomendacionesHtml
})
.catch(function(e){
    console.log('el error es '+ e)
})


// VINCULAR API PARA OBTENER DETALLES DE SERIES

let apiKey="43c74b59045ed8eefa36be7448cda7ac"
let detallesCointainer= document.querySelector('#detallesContainer')

let detallesSeriesEndpoint= `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`


fetch(detallesSeriesEndpoint)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
    let series= data.results
    let detallesHtml=""

    for (let i=0; i< series.length; i++){
        let serie= series[i]
        let serieId= serie.id
        let title= serie.name
        let releaseDate= serie.first_air_date;
        let posterPath= serie.poster_path;
        let overview= serie.overview

        detallesHtml+= `<article><img src="https://image.tmdb.org/t/p/w342${posterPath}" alt="${title}">
        <h3>${title}</h3>
        <p>${releaseDate}</p>
        <p>${overview}</p>
        <a href="detalleSeries.html?movie_id=${serieId}"><button>Ver Detalles</button></a>
        <button class="agregar-favorito"><a href="favoritos.html">Agregar a Favoritos</a></button></article>`;
    }
    detallesCointainer.innerHTML= detallesHtml

})
.catch(function(error){
    console.log('error es '+ error)
})

//VINCULAR API PARA RECOMENDACIONES

let recomendacionesEndpoint=`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`

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
//La página debe mostrar:
//El listado de las películas o series pertenecientes al género que seleccionó. El end point para usar es "Discover".

//El nombre del género. En caso de que no se encuentre el género o no exista, debe indicarse un mensaje de error.

//Lista de películas o series con su foto y su nombre. Al clickear en cualquiera de las series/ películas debe redirigir al detalle.

let queryString= location.search;
let item= new URLSearchParams(queryString);
let genreId=item.get('id');
console.log(genreId)

apiKey="43c74b59045ed8eefa36be7448cda7ac"
let genreEndpoint=`https://api.themoviedb.org/3/genre/` + genreId+ `?api_key=${apiKey}`
let moviesEndpoint= `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`

fetch(genreEndpoint)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data)

    if(data.name){
        document.querySelector('#nombreGenero').innerHTML= "Conoce lo mas buscado en: " + data.name
    }
})
.catch(function(e){
    console.log('el error es: ' + e)
})

fetch(moviesEndpoint)
.then(function(res){
    return res.json()
})
.then(function(moviesData){
    console.log(moviesData)

    let generosDetails= document.querySelector('#generosDetails')
    if (moviesData.results && moviesData.results.length >0){
        generosDetails.innerHTM=""

        for (let i = 0 ; i < moviesData.results.length; i++){
            let movie= moviesData.results[i]
            let movieTitle= moviesData.results[i].title
            let movieHtml= `<article>
            <a href="detallePeliculas.html?id=${movie.id}">
            <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}">
            <h3>${movieTitle}</h3>
            </a>
            </article>`;

            generosDetails.innerHTML+= movieHtml
    }
}})
.catch(function(e){
    console.log("el error es: "+ e)
})
//VINCULAR API AL FORMULARIO DE BUSQUEDA

apiKey="43c74b59045ed8eefa36be7448cda7ac"
let queryString= location.search
let item= new URLSearchParams(queryString)

let searchItem= item.get("q")
console.log(searchItem);

let urlMovies= `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchItem}`

let urlSeries=  `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchItem}`

let resultadoLista= document.querySelector('#resultadoLista')
let textoBusqueda= document.querySelector('#textoBusqueda')
let noResultados= document.querySelector('#noResultados')
let searchTerm= document.querySelector('#searchTerm')

searchTerm.innerHTML+= searchItem

function crearResultados(movies){
    return `
    <article>
    <a href="#">
        <img src="https://image.tmdb.org/t/p/w342${movies.poster_path}" alt="${movies.title}">
        <h3>${movies.title || movies.name}</h3>
        <p>${movies.release_date || movies.first_air_date}</p>
    </a>
</article>`
}

function mostrarResultados(data){
    if (data.results.length === 0){
        noResultados.style.display="block"
}   else {
    textoBusqueda.innerHTML= `Estos son los resultados de tu busqueda para: ` + searchItem
    for (let i=0 ; i < data.results.length; i++){
        resultadoLista.innerHTML+= crearResultados(data.results[i])
    }
}}

function manejarError(e){
    console.log("El error es: "+ e)
}

fetch(urlMovies)
.then(function(res){
    return res.json();
})
.then(mostrarResultados)
.catch(manejarError)

fetch(urlSeries)
.then(function(res){
    return res.json();
})
.then(mostrarResultados)
.catch(manejarError)

//lista de resultados que coincidan con el término buscado. Al clickear en cualquiera de los resultados deberá redirigir a su detalle 
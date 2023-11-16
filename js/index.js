//INTEGRAR LA API AL HOME 

let apiKey="43c74b59045ed8eefa36be7448cda7ac"
let urlPopularMovies=`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

fetch(urlPopularMovies)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    let popoularMovies= data.results.slice(0,5);
    let popolarMoviesContainer= document.querySelector(".sectionPelisPopulares")
    for (let i=0; i< popoularMovies.length; i++){
        let movie= popoularMovies[i]
        let title= movie.title
        let releaseDate= movie.release_date;
        let posterPath= movie.poster_path;

        let movieCard= `<section>
        <a href"detallePeliculas.html">
        <img src="https://image.tmdb.org/t/p/w342${posterPath}">
        <h2>${title}</h2>
        <p>${releaseDate}</p>
        </a>
        </section>`;
        popolarMoviesContainer.innerHTML += movieCard
    }
})
.catch(function(e){
    console.log("error "+ e)
})

let urlTopRated= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`

fetch(urlTopRated)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    let popoularMovies= data.results.slice(0,5);
    let popolarMoviesContainer= document.querySelector(".sectionTopRated")
    for (let i=0; i< popoularMovies.length; i++){
        let movie= popoularMovies[i]
        let title= movie.title
        let releaseDate= movie.release_date;
        let posterPath= movie.poster_path;

        let movieCard= `<section>
        <a href"detallePeliculas.html">
        <img src="https://image.tmdb.org/t/p/w342${posterPath}">
        <h2>${title}</h2>
        <p>${releaseDate}</p>
        </a>
        </section>`;
        popolarMoviesContainer.innerHTML += movieCard
    }
})
.catch(function(e){
    console.log("error "+ e)
})

let urlProximamente= `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`

fetch(urlProximamente)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    let popoularMovies= data.results.slice(0,5);
    let popolarMoviesContainer= document.querySelector(".sectionProximamente")
    for (let i=0; i< popoularMovies.length; i++){
        let movie= popoularMovies[i]
        let title= movie.title
        let releaseDate= movie.release_date;
        let posterPath= movie.poster_path;

        let movieCard= `<section>
        <a href"detallePeliculas.html">
        <img src="https://image.tmdb.org/t/p/w342${posterPath}">
        <h2>${title}</h2>
        <p>${releaseDate}</p>
        </a>
        </section>`;
        popolarMoviesContainer.innerHTML += movieCard
    }
})
.catch(function(e){
    console.log("error "+ e)
})

//INTEGRAR LA API PARA EL FORUMARIO DE BUSQUEDA

let searchForm= document.querySelector('.form')
let searchInput= document.querySelector('#searchInput')

searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    let searchTerm= searchInput.value.trim();
    let contentType= document.querySelector('#contentType')
    if (searchTerm){
        if (contentType === 'movie'){
            let endpointMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
        } else if (contentType === 'tv'){
             let endpointSeries = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchTerm}`;
        }
        window.location.href = `resultados.html?q=${searchTerm}`;

    }

});

//Al hacer click sobre cualquiera de los elementos debe redirigir a la página de detalle 

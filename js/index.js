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

        let movieCard= `<article>
        <a href"detallePeliculas.html">
        <img src="https://image.tmdb.org/t/p/w342${posterPath}">
        <h2>${title}</h2>
        <p>${releaseDate}</p>
        </a>
        </article>`;
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

        let movieCard= `<article>
        <a href"detallePeliculas.html">
        <img src="https://image.tmdb.org/t/p/w342${posterPath}">
        <h2>${title}</h2>
        <p>${releaseDate}</p>
        </a>
        </article>`;
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

        let movieCard= `<article>
        <a href"detallePeliculas.html">
        <img src="https://image.tmdb.org/t/p/w342${posterPath}">
        <h2>${title}</h2>
        <p>${releaseDate}</p>
        </a>
        </article>`;
        popolarMoviesContainer.innerHTML += movieCard
    }
})
.catch(function(e){
    console.log("error "+ e)
})

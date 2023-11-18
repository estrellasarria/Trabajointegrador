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
        let movieId= movie.id
        console.log(movieId)

        let movieCard= `<section>
        <a href="detallePeliculas.html?id=${movieId}">
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

let tvPopular= `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`
console.log(tvPopular)

fetch(tvPopular)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    let tvSeries= data.results.slice(0,5);
    let tvSeriesContainer= document.querySelector(".sectionSeries")
    for (let i=0; i< tvSeries.length; i++){
        let serie= tvSeries[i]
        let title= serie.name
        let aire= serie.first_air_date;
        let posterPath= serie.poster_path;
        let serieId= serie.id
        console.log(serieId)

        let serieCard= `<section>
        <a href="detalleSeries.html?id=${serieId}">
        <img src="https://image.tmdb.org/t/p/w342${posterPath}">
        <h2>${title}</h2>
        <p>${aire}</p>
        </a>
        </section>`;
       tvSeriesContainer.innerHTML += serieCard
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
        let movieId= movie.id
        console.log(movieId)

        let movieCard= `<section>
        <a href="detallePeliculas.html?id=${movieId}">
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


//Al hacer click sobre cualquiera de los elementos debe redirigir a la página de detalle 

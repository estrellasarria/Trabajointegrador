//INTEGRAR LA API AL HOME 

let url="https://api.themoviedb.org/3/movie/popular?api_key=${43c74b59045ed8eefa36be7448cda7ac}"

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    let popoularMovies= data.results;
    let popolarMoviesContainer= document.querySelector(".sectionHome")
    for (let i=0; i< popoularMovies.length; i++){
        let movie= popoularMovies[i]
        let title= movie.title
        let releaseDate= movie.release_date;
        let posterPath= movie.poster_Path;

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

let apiKey= "43c74b59045ed8eefa36be7448cda7ac"
let queryString= window.location.search;
let urlParams= new URLSearchParams(queryString);
let searchTerm= urlParams.get('q')
let searchType= urlParams.get('type')

if (searchTerm && searchType){
    document.querySelector('#searchTerm').textContent= searchTerm;
    let endpoint;
    if (searchType === 'movie') {
        endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
    } else if (searchType === 'tv') {
        endpoint = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchTerm}`;
    }

    fetch(endpoint)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)

        let resultadosLista= document.querySelector('#resultadoLista')
        let noResultados= document.querySelector('#noResultados')

        if(data.results.length>0){
         for (let i=0; i < data.results.length; i++){
            let results= data.results[i]
            let resultsItem
         }   
        }
    })

}

// VINCULAR API PARA OBTENER DETALLES DE SERIES

let apiKey="43c74b59045ed8eefa36be7448cda7ac"
let detallesCointainer= document.querySelector('#detallesContainer')
let recomendacionesContainer= document.querySelector('#recomendacionesCointainer')
let detallesPeliculasEndpoint=  `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`

fetch(detallesPeliculasEndpoint)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
})
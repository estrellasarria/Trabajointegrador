// VINCULAR API EN LA SECCION DE GENEROS PELICULAS

let apiKey= "43c74b59045ed8eefa36be7448cda7ac"
let endpointGenerosPelis= `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

let generosContainer= document.querySelector("#generosContainer")

fetch(endpointGenerosPelis)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
    let generos=data.genres
    let generosHtml= ""
    for (let i=0; i< generos.length; i++){
        let gen= generos[i];
        generosHtml += `<article><a href="detallesGeneros.html?type=movie&id=${gen.id}"><button>${gen.name}</button></a></article>`
       
    }
    generosContainer.innerHTML+= generosHtml
})
.catch(function(e){
    console.log('error'+ e)
})


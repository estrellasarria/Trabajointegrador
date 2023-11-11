// VINCULAR API EN LA SECCION DE GENEROS 

let apiKey= "43c74b59045ed8eefa36be7448cda7ac"
let endpointGeneros= `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

let generosContainer= document.querySelector("#generosContainer")

fetch(endpointGeneros)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)

    let generos=data.generos
    let generosHtml= ""
    for (let i=0; i< generos.length; i++){
        let gen= generos[i];
        generosHtml += `<article><a href="detallesGeneros.html?type=movie&id=${gen.id}">${gen.name}</a></article>`
       
    }
    generosContainer.innerHTML+= generosHtml
})
.catch(function(e){
    console.log('error '+ e)
})
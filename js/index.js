//INTEGRAR LA API AL HOME 

let url="https://api.themoviedb.org/3/movie/popular?api_key=${43c74b59045ed8eefa36be7448cda7ac}"

let sectionHome= document.querySelector('.sectionHome');
let homeSection=" "

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);

        for (let i=o; i< data.results.length; i ++)
        { let character= data.results[i];
            let characterCard= ` <article> class="characterCard"
            <h2>${character.title}</h2>
            <img src="${character.image}">
            <p>${character.name}</p>
            </article>`;
            homeSection+=characterCard

        }
        sectionHome.innerHTML= homeSection;
    })
    .catch(function(e){
        console.log("error "+ e);
    })
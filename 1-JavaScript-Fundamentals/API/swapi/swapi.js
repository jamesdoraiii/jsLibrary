const swlist = document.querySelector('ul');
const baseURL = 'https://swapi.co/api/';
const peoplebtn = document.getElementById('peoplebtn');
const planetsbtn = document.getElementById('planetsbtn');
const starshipsbtn = document.getElementById('starshipsbtn');
const speciesbtn = document.getElementById('speciesbtn');

let whattofind = ''

peoplebtn.addEventListener("click",peopleswap());
planetsbtn.addEventListener("click",planetswap());
starshipsbtn.addEventListener("click",starshipsswap());
speciesbtn.addEventListener("click",speciesswap());

//-------------------------------------------------
function peopleswap(){
    whattofind = "people/";

    fetch(baseURL+whattofind)

.then(function(response){
    return(response.json());
})

.then(function(json){
    let people = json.results;
    displayData(people);
});


}

//-------------------------------------------------
function planetswap(){
    whattofind = "planets/";

    fetch(baseURL+whattofind)

.then(function(response){
    return(response.json());
})

.then(function(json){
    let people = json.results;
    displayData(people);
});
}

//-------------------------------------------------
function starshipsswap(){
    whattofind = "starships/";

    fetch(baseURL+whattofind)

.then(function(response){
    return(response.json());
})

.then(function(json){
    let people = json.results;
    displayData(people);
});
}

//-------------------------------------------------
function speciesswap(){
    whattofind = "species/";

    fetch(baseURL+whattofind)

.then(function(response){
    return(response.json());
})

.then(function(json){
    let people = json.results;
    displayData(people);
});
}
//-------------------------------------------------


function displayData(data){

    for (element of data){
        let post = document.createElement('li');
        post.innerText = `${element.name}`;
        swlist.appendChild(post);
    }
}






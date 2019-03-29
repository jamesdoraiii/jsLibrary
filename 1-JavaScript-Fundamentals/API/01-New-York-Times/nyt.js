const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const key = '1mEtGs1rGNHMU9IZZYUws4RYMAPfeGet';

let url;

//---------------------------------

//Search Form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//results navigation
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('prev');
const nav = document.querySelector('nav');

//results section
const section = document.querySelector('section');



//The line of code below makes it so that the buttons for navigating search results are not visible until you actually perform a search and have results.


nav.style.display = 'none';


let pageNumber = 0;
let displayNav = false;


//SETUP EVENT LISTENERS

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);


//Function for fetching results

function fetchResults(e) {

    e.preventDefault();

    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;

    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if (endDate.value !== '') {
        console.log(startDate.value)
        url += '&end_date=' + endDate.value;
    };

    //----------------------------
    fetch(url)

        .then(function (result) {
            console.log(result)
            return result.json();
        })

        .then(function (json) {
            displayResults(json);
        });
    //------------------------------
}

function displayResults(json) {
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }

    let articles = json.response.docs;

    if (articles.length === 10 && pageNumber === 0){
        nav.style.display = 'block';
        previousBtn.style.display = 'none';
        nextBtn.style.display = 'block'
        populate(articles);
    }
    else if (articles.length < 10 && pageNumber === 0){
        nav.style.display = 'none';
        populate(articles);
    }
    else if (articles.length < 10 && pageNumber > 0){
        nav.style.display = 'block';
        nextBtn.style.display = 'none';
        previousBtn.style.display = 'block';
        populate(articles);
    }
    else {
        nav.style.display = 'block';
        nextBtn.style.display = 'block';
        previousBtn.style.display = 'block';
        populate(articles); 
    }

};

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    
};

function previousPage(e) {
    if(pageNumber > 0){
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
};



//This is the function that creates all of the html elements in DOM it then fills these elements and places them into the html doc.
function populate(data){
        for (let i = 0; i <  data.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img')
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = data[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords: ';

            for(let j = 0; j < current.keywords.length; j++){

                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }

            if(current.multimedia.length > 0) {

                img.src = 'http://nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;

            }

            clearfix.setAttribute('class','clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
}


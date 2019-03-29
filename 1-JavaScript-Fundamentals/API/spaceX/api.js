const baseURL = 'https://api.spacexdata.com/v2/rockets';


//set up varibles for html elements!
const searchForm = document.querySelector('form');
const spaceShipsTable = document.querySelector('table');





//ad a listener onto searchForm
searchForm.addEventListener('submit', fetchspace)

function fetchspace(e) {
    e.preventDefault();

    fetch(baseURL) //a fetch goes and gets data for you

        .then(results => {
            return results.json();//Json is Java Script Object Notation, its a method that helps us format data to be readable
        })

        .then(json => {
            displayRocketPayloads(json);
        })

        
}
//e represents an event. When this is plugged into add event listener it knows that the function you give it is going to be expecting an event so that means you dont have to specify it as a parmeter.

/*
function displayRocketPayloads(rocketList) {

    for (rocket in rocketList) {
        console.log(`The Rocket ${rocketList[rocket].name} contains the payloads listed below`);
        for (payload of rocketList[rocket].payload_weights) {
            console.log(`Payload: ${payload.id}. Weight: ${payload.kg}kg`);
        }
    }
}
*/

function displayRocketPayloads(data) {

    let begin = document.createElement('tr');
    let head1 = document.createElement('th');
    let head2 = document.createElement('th');
    head1.innerText = "Ship"
    head2.innerText = "Cost $"
    spaceShipsTable.appendChild(begin);
    spaceShipsTable.appendChild(head1);
    spaceShipsTable.appendChild(head2);




    let rockets = data.forEach(r => {
        let header = document.createElement('tr');
        let rocket = document.createElement('td');
        let cost = document.createElement('td');
        
        rocket.innerText = r.name;
        cost.innerText = r.cost_per_launch;
        spaceShipsTable.appendChild(header);
        spaceShipsTable.appendChild(rocket);
        spaceShipsTable.appendChild(cost);
        
    })
    
}



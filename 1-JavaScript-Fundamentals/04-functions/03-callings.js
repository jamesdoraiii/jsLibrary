let number = 20;

function one2num(max){
    for (let i = 1; i < max+1 ;i++){
        console.log(i)
    }
}

one2num(number);


//FAT ARROW FUNCTIONS

function coffee(){
    console.log('Coffee is good')
}

let coffees = () => {
    console.log('I like Coffee');
}

coffee();//This calls either function, no difference in calling

let cats = (kitten,puppy) => { console.log(`I have ${kitten} cats and ${puppy} dogs`)}

cats(2,4);

let apples = x => console.log(`there are ${x} apples.`);
apples(10);



let mealprice = 25.56
let tippercent = .15


function tipCalculator(price,percentage){
    return(price*=percentage);
}

console.log(tipCalculator(mealprice,tippercent))


//Below is the same function as the one above but in the concise form.

let tipper = (price,percentage) => (price * percentage).toFixed(2);

let tipcalculation = tipper(mealprice,tippercent)
console.log(tipcalculation)
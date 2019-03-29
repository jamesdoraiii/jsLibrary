
//standard function setup with a for loop inside

let number = 20;

function one2num(max){
    for (let i = 1; i < max+1 ;i++){
        console.log(i)
    }
}

one2num(number);

//-------------------------------------------------------------------------------------------------------

//standard for loop

let adder = 0

for(let i = 0; i<51; i++){
    adder += i;
}

console.log(adder);

//-------------------------------------------------------------------------------------------------------

//FOR OF LOOPS WILL PRINT THE ELEMENTS IN AN ARRAY



//FOR IN LOOPS USED ON OBJECTS WILL PRINT ALL THE KEYS. FOR IN LOOPS USED ON ARRAYS WILL RETURN INDEX POSITIONS

//-------------------------------------------------------------------------------------------------------

//Here is an example of a switch case
var friend = "Autumn";

switch (friend) {
    case "Autumn":
        console.log("Hey Autumn, when are you going rock climbing?");
        break;
    
    case "Dave":
        console.log("Hey Dave, how is Cooper?");
        break;
    
    case "Alex":
        console.log("whats up alex?");
        break;

    case "Anthony":
        console.log("Hey Anthony, when are you going rock climbing?");
        break;
    
    default:
        console.log("Im sorry", friend, "I do not know you?");
}
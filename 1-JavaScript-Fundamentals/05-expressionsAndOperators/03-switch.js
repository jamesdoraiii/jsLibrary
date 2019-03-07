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
        console.log("Im sorry", friend, "I do not know you?")
}


let dessert = "brownie"
let pie = "Pie Pie, me oh my!"
let cake = "Cake is great"
let iceCream = "I scream for ice cream"

switch (dessert) {
    case "pie":
        console.log(pie);
        break;
    
    case "cake":
        console.log(cake);
        break;
    
    case "ice cream":
        console.log(iceCream);
        break;
    default:
        console.log(`We are sorry ${dessert} is not on the menu.`);

}

for(let FB = 0; FB<=100; FB++){
    switch(true){
        case(FB % 3 == 0 && FB % 5 == 0):
        console.log('Fizz Buzz');
        break;

        case(FB % 3 == 0):
        console.log('Fizz');
        break;

        case(FB % 5 == 0):
        console.log('Buzz');
        break;

        default:
        console.log(FB);

    }

    
}
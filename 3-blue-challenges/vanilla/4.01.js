

tester = {
    color: "blue",
    food: "pizza",
    city: "indianapolis",
    os: "windows"


}


function keySwapper (object, keySwap1, keySwap2){

    let newobj = object

    let key1value = newobj[keySwap1];
    let key2value = newobj[keySwap2];

    newobj[keySwap1] = key2value;
    newobj[keySwap2] = key1value;

    console.log(newobj);

}

keySwapper(tester, "os", "city");
console.log(tester);



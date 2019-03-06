let days = ["monday", "tuesday", "wednesday", "thursday"];

//console.log(days.toString());

//console.log(days.length);

//console.log(days[1]);

let soup = {
    a: "chicken noodle",
    b: "tomato",
    c: "french onion"
};


let day = "thursday";


function soupSelector(){
    
    if (day === "tuesday"){
        soupOfDay = soup.a;
    }
    

    if (day === "wednesday"){
        soupOfDay = soup.b;
    }
    

    if (day === "thursday"){
        soupOfDay = soup.c;
    }

    console.log("It is "+day+"! That means the soup of the day is",soupOfDay+"!");
};

soupSelector();









/*function isDivisible(numa,numb){
    if(numb%numa!=0){
        console.log("Number B is not divisble by number A");
    }
    else{
        console.log("Number B is divisible by number A");
    }
};

isDivisible(a,b)*/

/*
let myName = "Jimmy Dora";
let comparison = "Jimmy Dora";

function nameCheck(name1, name2) {
    if (name1 == name2) {
        console.log("Good News! The names match. Both names are", name1);
    }
    else {
        console.log("These names do not match. The two names are", name1, "and", name2);
    }
};

//nameCheck(myName,comparison);


let test = "jAMeS";

if (test[0] == test[0].toUpperCase()) {
    console.log(test[0] + test.slice(1, test.length).toLowerCase())
}
else {
    console.log(test[0].toUpperCase() + test.slice(1, test.length).toLowerCase())
}
*/

let age = 21;

let a = "you cant do anything!";
let b = "You can vote!";
let c = "You can Drink!";
let d = "You can rent a car!";


/*
if(age <= 17){
    console.log(a);
}

else if(age >= 18 && age <= 21){
    console.log(b);
}
else if(age >= 21 && age <=25){
    console.log(b,c);
}
else if(age >=  25){
    console.log(b,c,d);
}
*/

(age >= 18) ? console.log(b) : (age>= 21) ? console.log(c) : (age>= 25) ? console.log(d) : console.log("too young to ");

//should go from large to small




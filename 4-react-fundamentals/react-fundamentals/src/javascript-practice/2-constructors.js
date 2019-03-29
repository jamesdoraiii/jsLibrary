class User{
    constructor(first, last, e){
        this.f = first;
        this.l = last;
        this.email = e;
    }
}


var userOne = new User("Paul","Oakenfold", "po@elevenfifty.com")

console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}


class Car {
    constructor(model, color, horsepower){
        this.mod = model;
        this.col = color;
        this.hp = horsepower;
    }
}

var corvette = new Car("corvette", "torch red", "465hp")


console.log("-------------------------")
console.log(corvette.col);
console.log(corvette.hp);
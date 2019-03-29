class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }

    //method 1
    greet(){
        console.log('Welcome back, '+ this.name);
    }

    status(){
        console.log('Current status: ' + this.type);
    }
}

//instance of the class/new object
var anonDude = new User("Anonymous dude");


 //we can now use the instance and the . operator 
  // to access the 2 methods
anonDude.greet();
anonDude.status();

var anonLady = new User("anonymous lady");

anonLady.greet();


var tester = new User("TestPerson")

tester.greet();
tester.status();

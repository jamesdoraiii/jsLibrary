class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    greet(){
        console.log('Welcome back,' + this.name);
      }
      //Method 2
    status(){
        console.log('Current status: ' + this.type);
      }
}

class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' + this.name + "." + ' Would you like to join our program?');
    }
}

class BannedUser extends User {
    userBanned(){
        console.log("Sorry," + this.name + " Your account has been banned.")
    }
    status(){
        console.log("BANNED")
    }
    
}

var anonDude = new User("Anonymous");
//anonDude.greet();
//anonDude.status();

var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();

var bannedGuy = new BannedUser("BannedGUy");

bannedGuy.userBanned();
bannedGuy.greet();
bannedGuy.status();


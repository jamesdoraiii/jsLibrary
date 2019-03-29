let student = {
    name: "James Dora",
    studentID: 123456,
    awesome: true,

}

for (let item in student){
    console.log(item)
}

//this shoes our keys


for (item in student){
    console.log(student[item])
}

//this will show the values for our keys

let dogArray = ["lab", "border collie", "pitbull", "greyhound"];

for (let dog in dogArray){
    console.log(dog)
}

name = "jaMEs";

tester = name.split('');

for(let letter in tester){
    if(letter == 0){
        //console.log(tester[letter].toUpperCase()+name.slice(1,6))
    }
    
}

//you made this too complicated, this works kind of but its not that flexible. It wont fix any letters aside from the first one.

let capName;

for(let letter in name){
    if(letter == 0){
        capName = name[letter].toUpperCase();
    }
    else{
        capName += name[letter].toLowerCase();
    }
    
}

console.log(capName);

//This is a much more elegant solution. The code is simpler and much more adaptive. It will actually fix each letter in a name instead of just the first one. 

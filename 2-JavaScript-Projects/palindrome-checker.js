let check = "lefft"



function palindromechecker(word){
    
    let compare = word.split("").reverse().join("");

    if(compare === word){
        console.log(`Yes!, ${word} is a palindrome.`)
    }
    else{
        console.log(`No, ${word} is not a palindrome.`)
    }

}

//palindromechecker(check);



//Write a function that determines if each character in a string is unique

let check = "lefft"

function areLettersUnique (word){
    let lettercheck = word.split("");
    let checker = [];
    let areduplicates = false;

    for (letter of lettercheck){
        if (checker.includes(letter)){
            console.log(`The letter ${letter} was found more than once in "${word}"`)
            areduplicates = true;
            
        }
        else {
            checker.push(letter);
        }  
    }

    if(areduplicates == true){
        console.log(`The word "${word}" has duplicates of at least one letter.`)
    }
    else if (areduplicates == false){
        console.log(`The word "${word}" has no duplicate letters.`)
    }
}

areLettersUnique(check);
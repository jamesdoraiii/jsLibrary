let original = "education";

function pigLatinTranslation(word) {

    
    let vowelList = ["a", "e", "i", "o", "u"];
    let wordSplit = word.split("");
    
    //below will be the code that happens if the word starts with a consonant
    if (vowelList.includes(wordSplit[0]) == false) {
        wordSplit.splice(wordSplit.length, 0, wordSplit[0], "a", "y");
        wordSplit.splice(0, 1);
        let pig = wordSplit.join('');
        return (pig);

    }

    //below is what will happen if the word starts with a vowel
    else {
        wordSplit.splice(wordSplit.length, 0, "a", "y");
        let pig = wordSplit.join('');
        return (pig);
    }
}

console.log(pigLatinTranslation(original));


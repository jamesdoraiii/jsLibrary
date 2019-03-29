const stringCheck = '  Welcome to eleven fifty ';

function stringFixer(string) {

    words = string.split(" ")
    final = []

    if (typeof (string) == 'string' && string.length > 0 && string.length < 30) {

        for (word in words) {

            var testup = parseInt(word) + 1;
            var testdown = parseInt(word) - 1;

            if (words[word] === 'eleven' && words[testup] == 'fifty') {
                final.push('Eleven');
            }

            else if (words[word] === 'fifty' && words[testdown] === 'eleven') {
                final.push('Fifty');
            }

            else if (words[word] != '') {
                final.push(words[word]);
            }
        }

        returnval = final.join(' ');
        return (returnval);
    }

    else{
        console.log("Please make sure the parameter you give this function is a string that has a length greater than zero and less than 30.")
    }

}
console.log(stringFixer(stringCheck));


//for loop where if character index is a space and index plus one is a space splice it out. 
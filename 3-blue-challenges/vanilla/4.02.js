
/*
const arrOne = [10, 20, 30, 40, 50, 70];
const arrTwo = [5, 3, 2, 5, 20, 19, 20, 30];


function indexMultiply(array1, array2) {

    let returnArray = [];

    if (Array.isArray(array1) == true && Array.isArray(array2) == true) {

        if (array1.length > array2.length) {

            for (i in array2) {
                returnArray.push(array1[i] * array2[i]);
            }
        }

        if (array2.length > array1.length) {

            for (i in array1) {
                returnArray.push(array2[i] * array1[i]);
            }

        }

        if (array2.length == array1.length) {

            for (i in array1) {
                returnArray.push(array2[i] * array1[i]);
            }

        }
        
    }

    else {
        console.log("One of the values given was not an array. Please adjust this and try again.")
    }

    return (returnArray);
}

console.log(indexMultiply(arrOne, arrTwo));
*/


/*
    Date Object, Typechecking, Time based math

    Write a function that takes in two dates, and returns the number of minutes passed between them.

    Function should return an string message if it's arguments are not instances of the Date type.

    Note : There are 1440 minutes in a day and you will need the Date object.
*/

var dateOne = new Date(1996, 1, 13);
var dateTwo = new Date(2000, 1, 13);



function minuteCheck (date1, date2){

    let days;

    console.log(date1.valueOf());
    console.log(date2.valueOf());


    if (date1.valueOf() > date2.valueOf()){
        

    }

    if (date2.valueOf() > date1.valueOf()){
        

    }



}



console.log(minuteCheck(dateOne,dateTwo));



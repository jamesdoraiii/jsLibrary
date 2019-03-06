let x =12; 

function letTest() {
    let x = 33; 
    if(true){
        var x =45; 
        console.log(x);
    }
    console.log(x)
}
letTest(); 
console.log(x);

//all javascript keywords and FUNCTIONS get hoisted when a program is compiled.
//functions are hosted in their entirety wheras variable names are hoisted but there values are not. 


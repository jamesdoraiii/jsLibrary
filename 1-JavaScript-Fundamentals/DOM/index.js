/*let x = 10;
        console.log(x);*/

document.getElementById('testParagraph').style.color = 'blue';
//console.log(document.querySelectorAll('p.sampleClass')[0].innerText);
//console.log(document.querySelectorAll('p.sampleClass')[1].innerText);

//the query selector returns an array of the elements that fit the specifications you give. You can then iterate on that array.

let arr = document.querySelectorAll('p');

for (element of arr) {
    console.log(element.innerText)
}

/*
document.getElementById('clickThisButton').addEventListener('click', (details) => {
    //document.querySelectorAll('p.sampleClass')[1].innerHTML='<i>My text has changed</i>'
    //console.log(details.target);
    //document.getElementById('clickThisButton').style.backgroundColor = 'blue';
    console.log(details.target.style.backgroundColor)

    if (details.target.style.backgroundColor == 'blue') {
        details.target.style.backgroundColor = 'red'
        console.log(details.target.style.backgroundColor)
    }

    else {
        details.target.style.backgroundColor = 'blue'
        console.log(details.target.style.backgroundColor)
    }


})
*/



document.getElementById('nameInput').addEventListener('keyup',(e) =>{
    console.log(e.target.value);

    if(e.target.value == ""){
        document.getElementsByTagName('p')[1].innerText = "Nothing has been typed.";
    }
    else{
    document.getElementsByTagName('p')[1].innerText = `hey everyone say hi to ${e.target.value}`;
    }
})


/*
document.getElementById('clickThisButton').addEventListener('click', (details) => {

    console.log("We found the name",document.getElementById('nameInput').value)

})
*/








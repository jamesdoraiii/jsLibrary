/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/


let list2 = ["orange","banana","oreos"];

console.log(typeof list2); //type of can be used to discover the datatype of something in JS
console.log(list2);

let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, [["Ryan","Iesha"],"Amira"]];
console.log(typeof students);
console.log(students instanceof Array); //Since an Array is technically an object, you cannot use typeof to check if it is an array or not. Buy you can use 'instanceof' to check.


console.log(students[6][0][0]);//to index into the array that is held within the array students you place a second index behind the first.

let name1 = (students[6][0][0]);

let name2 = (students[6][1]);

console.log(`hello ${name1}, you look great`);
console.log(`hello ${name2}, you look great`);

let food = ['Pecan pie','shrimp','quesadilla','cheese cake','hotdog'];

food.push("tenderloin"); //use .push to add items to array

food.splice(4,0,"pizza"); //use .splice to remove elements from an array. identify where to start and how many to remove. then if you want you can place a new string into the place of the original item. 

food.pop(); //removes the last element of an array!


for (item of food){
    //console.log(item);
}

food.forEach(f => {
    //console.log(f);
})

food.forEach((food,number) => {
    console.log(number);
    console.log(food);
})
//be sure you look through VS code docs for the for each function. It can be used to for through an array.

//for each loops over each item in the array and in this it does a function for each one. 






//EXERCISE!!!
//****************************************************************************** */


let movies = ["Ghostbusters","Jaws","It Follows","Cabin in the Woods"];

movies.push("Die Hard");

movies.splice(1,1,"Step Brothers");

movies.forEach((movie)=>{
    console.log(movie);

})

















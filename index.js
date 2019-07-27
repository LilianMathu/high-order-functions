const people = [
    {name: "lilian", age:22, married: false, location: "Kisumu "},
    {name: "Eleanor", age:25, married: true, location: "Ngong "},
    {name: "Nyakio", age:21, married: true, location: "KIserian "},
    {name: "Liz", age:49, married: true, location: "Gategi "},
    {name: "Mathu", age:55, married: true, location: "Kiambu "},
    {name: "Tonny", age: 31, married: false, location: "Twala "},
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* forEach
  It is a better way to loop through arrays. It does not return anything

 standard for loop to compare with the forEach
 for (let i = 0; i < people.length; i++) {
      console.log(people[i]);   
 }
*/

people.forEach((person)=> {
    console.log(person.name);
})
number.forEach(function(index){
    console.log(index);
})

// filter 
// sort
// reduce 
// map 

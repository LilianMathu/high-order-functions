const people = [
    {name: "lilian", age:16, married: false, location: "Kisumu "},
    {name: "Eleanor", age:25, married: true, location: "Ngong "},
    {name: "Nyakio", age:21, married: true, location: "KIserian "},
    {name: "Liz", age:49, married: true, location: "Gategi "},
    {name: "Mathu", age:55, married: true, location: "Kiambu "},
    {name: "Tonny", age: 12, married: false, location: "Twala "},
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* forEach
  It is a better way to loop through arrays. It does not return anything

 standard for loop to compare with the forEach
 for (let i = 0; i < people.length; i++) {
      console.log(people[i]);   
 }
*/

// people.forEach((person)=> {
//     console.log(person.name);
// })
// number.forEach(function(index){
//     console.log(index);
// })

// filter 
// standard for loop
// let num = [];

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] >= 5){
//         num.push(numbers[i]);
//     }
// }

// filter long syntax
// const num = numbers.filter(num=> {
//     if(num <=5){
//         return true;
//     }
// });

// //shorter syntax
// const num = numbers.filter(great=> great>=5);

// console.log(num);
// // sort

// filter married people
// const married = people.filter(couple=> (couple.married ===true && couple.age === 25));

// console.log(married);


// map 
// create an array of people's names

// const peoplesNames = people.map(person => `${person.name} : ${person.age}`);

// console.log(peoplesNames);



//sort()
//sort age

const sortAge = people.sort((a, b)=> a.age -b.age);
console.log(sortAge);
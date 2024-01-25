// let fruits = [1,"banana","orange"];
// console.log(typeof(fruits));
// console.log(fruits[0]);

//funtion in array 

let fruits=["apple","banana","orange","grape"];
console.log(fruits[0]);
console.log(fruits[1]);
// adding element in array at last

fruits.push("kiwi");
console.log(fruits);
//adding element in array at begining
fruits.unshift("mango");
console.log(fruits);
//remove the last element 
let removedLast =fruits.pop();
console.log(fruits);
//removingFirst first element 
let removedFirst=fruits.shift();
console.log(fruits);
//fing the index of element
let indexOfOrange=fruits.indexOf("orange");
console.log(indexOfOrange);
//iterating using a for loop
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//slicing an array
let citrus=fruits.slice(1,3);
console.log(citrus);
//splicing an array(modifying original array)
let removed=fruits.splice(1,2,"pear","melon");
console.log(removed);
//concatenating arrays
let moreFruits=["grapeFruit","pineapple"];
let allFruits=fruits.concat(moreFruits);
console.log(allFruits);
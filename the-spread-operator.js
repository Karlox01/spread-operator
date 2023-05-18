/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log('second array', arr2);
console.log('first array', arr1); // We now have a problem as when we pushed 4 into second array it automatically pushed into first as well.

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3]; // If you put ... before the arr3 This will exclude arr3 from any changes made to arr4 later on.

arr4.push(7);
console.log('Third Array', arr3);
console.log('Fourth Array', arr4);

// Copying an object

let obj1 = { a: 1, b: 2, c: 3};
let obj2 = { ...obj1, d : 4};
let obj3 = { ...obj1, b : 5 }; // This overwrites the b from 2 > 5.
console.log('First Object:', obj1);
console.log('Second Object:', obj2);
console.log('Second Object:', obj3);


// Copying only part of an array/object

let arr5 = [...arr1, { ...obj1}, ...arr3, 'x', 'y', 'z'];
console.log(arr5);

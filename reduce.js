// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr); // takes two parameters rather than one acc( accumulator ) curr( Current value)
console.log(sum) // sum of 0 1 2 3 4 
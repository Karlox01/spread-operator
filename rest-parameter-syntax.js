

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log('Sum :', sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6); // Applying this will only produce a result for the three first paramethers as the functions was originally built to do.
console.log('Sum2 :', sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log(sum3)

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let[john, mary, joe] = ages;
console.log(john, mary, joe); // This method does not utilize destructing as we have to declare each variable.
console.log(john)



// Destructuring objects
let jobs = { 
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant',
};
let { mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets
let languages = ['english', 'french', 'german', 'spanish', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, , marySecondary] = languages // This would assign the first two values to Marry meaning english and french, instead if we input two comas in the bggining this will ensure english and french are skipped.
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'spanish',
}
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ['apple', 'banana', 'orange', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others); // to log fruites without [ ] type ...others

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegeterian',
    andrea: 'steak',
};

let { brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
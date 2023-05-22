// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4, 5, 10, 2];
// let sum = nums.reduce((acc, curr) => acc + curr, 0); // takes two parameters rather than one acc( accumulator ) curr( Current value) and specify to start from 0
// console.log(sum) // sum of 0 1 2 3 4 

// for example the above is below just simplified to understand easier.
let sum = nums.reduce((acc, curr) => {
    console.log(
        'Accumulator :', acc,
        'Current value :', curr,
        'Total :', acc + curr
    );
    return acc + curr;
}, 0); // Using 0 as a base value, We can also use something else entirely.
console.log(sum)

const teamMembers = [
    {
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5,
    },
    {
        name: 'Ariel',
        profession: 'Developer',
        yrsExperience: 7,
    },
    {
        name: 'Michael',
        profession: 'Designer',
        yrsExperience: 1,
    },
    {
        name: 'Kelly',
        profession: 'Designer',
        yrsExperience: 3,
    },
    {
        name: 'Hobdso',
        profession: 'Manager',
        yrsExperience: 2,
    },
    {
        name: 'Hllloo',
        profession: 'Manager',
        yrsExperience: 1,
    },
    {
        name: 'Hoso',
        profession: 'Manager',
        yrsExperience: 6,
    },
    {
        name: 'Hes',
        profession: 'Manager',
        yrsExperience: 31,
    },
    {
        name: 'ChatGPT',
        profession: 'Manager',
        yrsExperience: 32,
    },
    {
        name: 'Hobsoo',
        profession: 'Manager',
        yrsExperience: 13,
    },
];

const totalExperience = teamMembers.reduce((total, member) => total + member.yrsExperience, 0); // Always specify the initial value otherwise it might not work.
console.log(totalExperience)


// Grouping by a property , and totaling it too
// {Developer: 12, Designer: 4} <-- This is what we want.

let experienceByProfession = teamMembers.reduce((total, member) => { // This highlights how many years of experience different professions have, combined.
    let key = member.profession;
    if (!total[key]) {
        total[key] = member.yrsExperience;
    } else {
        total[key] += member.yrsExperience;
    }
    return total;
}, {});
console.log(experienceByProfession);

const groupedMembers = teamMembers.reduce((total, member) => { // This filters out people based on their professions.
    if (!total[member.profession]) {
        total[member.profession] = [];
    }
    total[member.profession].push(member.name);
    return total;
}, {});

console.log(groupedMembers);

const managers = teamMembers.filter(member => member.profession === 'Manager'); // Filters out only manager profession

console.log(managers);


const sortedManagers = managers.sort((a, b) => b.yrsExperience - a.yrsExperience); // Sorts based on the top three manager experiences;

const topThreeManagers = sortedManagers.slice(0, 3);

console.log(topThreeManagers);
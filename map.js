// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results)


// Using map()
const multByTwo = function (num) {
    return num * 2
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 2});
console.log(simplified);


// Simplified w/ map() + arrow function.
const simplyArrow = nums.map(num => num * 2);
console.log(simplyArrow);


// With objects

const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'JavaScript',
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML',
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skill: 'CSS',
    },
];

// const studentsWithIds = students.map(student => [student.name, student.skill, student.id]); // putting student.id instead of student.skill would give them id.
// console.log(studentsWithIds);

// const studentsWithIds = students.map(student => ({...student, age: 12}));
// console.log(studentsWithIds);

const studentsWithIds = students.map((student) => {
    if (student.id === 1) {
      return { ...student, ageGroup: '20-25' };
    } else if (student.id === 2) {
      return { ...student, ageGroup: '25-30' };
    } else if (student.id === 3) {
      return { ...student, ageGroup: '30-35' };
    }
  });
  
  console.log(studentsWithIds);

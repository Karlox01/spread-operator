// // Simple filtering
// const people = [
//     {
//         name: 'Michael',
//         age: 23,
//     },
//     {
//         name: 'Lianna',
//         age: 16,
//     },
//     {
//         name: 'Paul',
//         age: 18,
//     },
// ];

// const oldEnough = people.filter(person => person.age >= 21)
// console.log(oldEnough)

// const paul = people.filter(person => person.name == 'Paul')[0]; // Filter method always returns an array , Even if its only 1 element containing only 1 object, appending [0] at the end logs only element
// console.log(paul);

/////////////////////////////////////////////////

const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 5 },
            { name: 'css', yrsExperience: 3 },
        ]
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 0 },
            { name: 'html', yrsExperience: 4 },
            { name: 'css', yrsExperience: 2 },
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 1 },
            { name: 'css', yrsExperience: 5 },
        ]
    },
];

const hasStrongSkills = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
    return strongSkills.length > 0;
}; // This function now filters the candidates based on their experience.


const candidates = students.filter(hasStrongSkills) // All we've done is take what was inside the parentheses and assigned it to a variable. This makes function cleaner.
console.log(candidates);

const names = candidates.map(student => student.name)
console.log(names)

const getTotalExperience = skills => {
    let totalExperience = 0;
    skills.forEach(skill => {
      totalExperience += skill.yrsExperience;
    });
    return totalExperience;
  };

const namesWithExperience = candidates.map(student => `${student.name} (${getTotalExperience(student.skills)} years of experience)`);
console.log(namesWithExperience);
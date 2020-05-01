

// Array of users and objects
const users = [
    {name: 'Manfrinne', technologies: ['HTML', 'CSS']},
    {name: 'Jasmine', technologies: ['JavaScript', 'CSS']},
    {name: 'Tuane', technologies: ['HTML', 'Node.js']}
]

// Add repetition structure
for (let user of users) {
    console.log(`${user.name} trabalha com ${user.technologies.join(', ')}.`)
}






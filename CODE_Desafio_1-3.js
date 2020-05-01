

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

// Function that checks technology
function checkTECH (user) {
    for (let technology of user.technologies) {
        if (technology == 'CSS') return true 
    }
    return false
} 

// Check if user works with technology
for (let i = 0; i < users.length; i++) {
    const userWorkTECH = checkTECH(users[i])

    if (userWorkTECH) {
        console.log(`O usuário ${users[i].name} trabalha com CSS.`)
    } 
}





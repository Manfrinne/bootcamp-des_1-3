

const users = [
    {
        name: 'Salvio',
        revenue: [115.3, 48.7, 98.3, 14.5],
        outgoing: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        revenue: [24.6, 214.3, 45.3],
        outgoing: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        revenue: [9.8, 120.3, 340.2, 45.3],
        outgoing: [450.2, 29.9]
    },
];


function sumNumbers (numbers) {
    let sum = 0

    for (let number of numbers) {
        sum = sum + number
    }

    return sum
}

function calculateBalance (revenue, outgoing) {
    const sumRevenue = sumNumbers(revenue)
    const sumOutgoing = sumNumbers(outgoing)

    return sumRevenue - sumOutgoing
}

for (let user of users) {
    const balance = calculateBalance (user.revenue, user.outgoing)

    if (balance > 0) {
        console.log(`O usuário ${user.name} possui o saldo POSITIVO de ${balance.toFixed(2)}.`)
    } else {
        console.log(`O usuário ${user.name} possui o saldo NEGATIVO de ${balance.toFixed(2)}.`)
    }
}


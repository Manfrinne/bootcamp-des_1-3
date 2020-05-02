
const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {

    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }

    return user.balance
}

function getHigherTransactionByType (type) {
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
        } 
    }

    return (`highest ${type} transaction: ${higherValue}.`) 
}

console.log(createTransaction({type: 'credit', value: 105}))
console.log(createTransaction({type: 'credit', value: 250}))

console.log(createTransaction({type: 'debit', value: 100}))
console.log(createTransaction({type: 'debit', value: 70}))

console.log(getHigherTransactionByType('debit'))
console.log(getHigherTransactionByType('credit'))



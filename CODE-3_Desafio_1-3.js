
// Programa de transações bancárias

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

// Add Transactions
function createTransaction(transaction) {

    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }

    return (`transaction: ${transaction.type}, balance: ${user.balance}.`)
};

// Functions report
function getHigherTransactionByType (type) {
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
        } 
    }

    return (`Highest ${type} transaction: ${higherValue}.`) 
};

function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    return (`Average Transactions: ${sum / user.transactions.length}.`)
};

function getTransactionsCount () {
    let count = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            count.credit++
        } else {
            count.debit++
        }
    }

    return count
}

// Call functions
console.log("")
console.log(createTransaction({type: 'credit', value: 50}));
console.log(createTransaction({type: 'credit', value: 120}));

console.log("")
console.log(createTransaction({type: 'debit', value: 80}));
console.log(createTransaction({type: 'debit', value: 30}));

console.log("")
console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));

console.log("")
console.log(getAverageTransactionValue());

console.log("")
console.log(getTransactionsCount());



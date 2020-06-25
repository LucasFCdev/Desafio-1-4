const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(transaction){
    user.transactions.push(transaction)

    if (transaction.type === "credit"){
        user.balance = user.balance + transaction.value
    }
    else{
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type){
    let hihgValue = 0
    let positionTransaction = 0
    
    for(let start of user.transactions){
        if(start.type === type && start.value > hihgValue){
            hihgValue = start.value
            positionTransaction = start
        }
    }

    return positionTransaction
}

function getAverageTransactionValue(){
    let allValueTransaction = 0
    let averageQuantity = 0
    for (let transaction of user.transactions ){
        allValueTransaction = allValueTransaction + transaction.value
        averageQuantity++
    }

    return allValueTransaction/averageQuantity
}

function getTransactionsValue(){
    totaly = {
        credit : 0,
        debit: 0
    }    
    for(let transaction of user.transactions){
        if(transaction.type === "credit"){
            totaly.credit++
        }
        else{
            totaly.debit++
        }
    }
    return totaly
    
}

createTransaction({type: "credit", value: 50})
createTransaction({type: "credit", value: 120})
createTransaction({type: "debit", value: 80})
createTransaction({type: "debit", value: 30})

console.log(user.balance)

console.log(getHigherTransactionByType("credit"))
console.log(getHigherTransactionByType("debit"))

console.log(getAverageTransactionValue())

console.log(getTransactionsValue())


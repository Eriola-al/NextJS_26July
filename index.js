

const withdraw = (person, amount) => {
    return amount > person.balance ? console.log("Withdrawal cannot be processed due to insufficient funds.")
        :
        console.log(`Please withdraw your money. Current balance is ${person.balance -= amount}.`)
}

const myPerson = {
    balance: 30000
}

withdraw(myPerson, 500000)
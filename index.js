const withdraw = (person, amount) => {
    if (amount > person.balance) {
        console.log("Withdrawal cannot be processed due to insufficient funds.")
    } else {
        person.balance -= amount;
        console.log(`Please withdraw your money. Current balance is ${person.balance}.`)
    }
}

const myPerson = {
    balance: 30000
}

withdraw(myPerson, 500000)
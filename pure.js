function removeLastNumber(arr) {
    const clone = [...arr] 
    clone.pop()
    return clone
}

function raiseSalaries(arr, num) {
    const newSalaries = []
    for (person of arr) {
        const salInc = (num/100) * person.salary
        const newSal = Math.ceil(person.salary + salInc)
        newSalaries.push({name: person.name, salary: newSal})
    }
    return newSalaries
}

function updateTasks(person, ...tasks) {
    const updatedPerson = {...person}
    for (task of tasks) {
        updatedPerson.tasks.push(task)
    }
    return updatedPerson
}

function cloneObject(target, source) {
    for (attribute in source) {
        target[attribute] = source[attribute]
    }
    return target
}

function calculateConfectioneryCosts(arr) {
    const arrUpdated = arr.map(person => {
        const spent = parseInt(person.yearlyCumulativeSpend.slice(1))
        const costOfOneSweet = parseInt(person.purchaseToday.costPerItem.slice(1))
        const qty = person.purchaseToday.amountBought
        const newSpend = costOfOneSweet * qty + spent
        const newObj = {name: person.name, yearlyCumulativeSpend: `£${newSpend}`}
        return newObj
    })
    console.log(arrUpdated)
    return arrUpdated
}

module.exports = { removeLastNumber, raiseSalaries, updateTasks, cloneObject, calculateConfectioneryCosts }
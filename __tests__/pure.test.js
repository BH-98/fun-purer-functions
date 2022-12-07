const { removeLastNumber, raiseSalaries, updateTasks, cloneObject, calculateConfectioneryCosts } = require("../pure.js")

// describe("", () => {
//     test("", () => {
//         expect().toBe()
//     })
// })

describe("removeLastNumber()", () => {
    test("Return an array", () => {
        expect(Array.isArray(removeLastNumber([1,2,3]))).toBe(true)
    })
    test("Return an array with the last number removed", () => {
        expect(removeLastNumber([1,2,3])).toEqual([1,2])
    })
    test("Does not mutate the original array", () => {
        const input = [1,2,3]
        const inputClone = [...input]
        removeLastNumber(input)
        expect(input).toEqual(inputClone)
    })
    test("Return a new array", () => {
        const input = [1,2,3] 
        expect(removeLastNumber(input)).not.toBe(input)
    })
})

describe("raiseSalaries", () => {
    test("Return an array", () => {
        const input = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        expect(Array.isArray(raiseSalaries(input, 10))).toBe(true)
    })
    test("Return an array with the salaries increased by the given percent", () => {
        const input = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
          const output = [{ name: 'Alice', salary: 3300 },
          { name: 'Bob', salary: 2200 }, 
          { name: 'Vel', salary: 4950 }
         ]
        expect(raiseSalaries(input, 10)).toEqual(output)
    })
    test("Does not change the input array", () => {
        const input = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        const inputCopy = [...input]
        raiseSalaries(input)
        expect(input).toEqual(inputCopy)
    })
    test("Returns a new array", () => {
        const input = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        expect(raiseSalaries(input)).not.toBe(input)
    })
})

describe("updateTasks", () => {
    test("Returns an object", () => {
        const input = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        expect(typeof updateTasks(input, "read books",
        "tidy room")).toBe("object")
    })
    test("Returns an object with the new task when only one", () => {
        const input = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        const result = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery', 'read books'] }
        expect(updateTasks(input, "read books")).toEqual(result)
    })
    test("Returns an object with the new tasks when more than one", () => {
        const input = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        const result = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room'] }
        expect(updateTasks(input, "read books", 'tidy room')).toEqual(result)
    })
    test("Does not change the input object", () => {
        const input = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        const inputCopy = {...input}
        updateTasks(input, "read books", 'tidy room')
        expect(input).toEqual(inputCopy)
    })
    test("Returns a new object", () => {
        const input = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        expect(updateTasks(input, "read books", 'tidy room')).not.toBe(input)
    })  
    
})

describe("cloneObject", () => {
    test("return an object", () => {
        const inputTar = {name: "Brandon", age: 24}
        const inputSource = {hometown: "Blackpool"}
        expect(typeof cloneObject(inputTar, inputSource)).toBe("object")
    })
    test("returns an object with the combined objects", () => {
        const inputTar = {name: "Brandon", age: 24}
        const inputSource = {hometown: "Blackpool"}
        const expectedResult = {name: "Brandon", age: 24, hometown: "Blackpool"}
        expect(cloneObject(inputTar, inputSource)).toEqual(expectedResult)
    })
    test("adds the source keys into the target", () => {
        const inputTar = {name: "Brandon", age: 24}
        const inputSource = {hometown: "Blackpool"}
        const expectedResult = {name: "Brandon", age: 24, hometown: "Blackpool"}
        expect(cloneObject(inputTar, inputSource)).toBe(inputTar)
    })
})

describe("calculateConfectioneryCosts", () => {
    test("Returns an array", () => {
        const input = []
        expect(Array.isArray(calculateConfectioneryCosts(input))).toBe(true)
    })
    test("returns an array of objects with the updated yearly spend", () => {
        const input = [
            {
              name: "Beyonce Bowls",
              yearlyCumulativeSpend: "£44",
              purchaseToday: {
                item: "White mice",
                costPerItem: "£3",
                amountBought: 17,
              }
            }
          ]
          const result = [ 
            {
                name: 'Beyonce Bowls',
                yearlyCumulativeSpend: "£95"
            }       
            ]
          expect(calculateConfectioneryCosts(input)).toEqual(result)
    })
    test("Returns a new array", () => {
        const input = [
            {
              name: "Beyonce Bowls",
              yearlyCumulativeSpend: "£44",
              purchaseToday: {
                item: "White mice",
                costPerItem: "£3",
                amountBought: 17,
              }
            }
          ]
        expect(calculateConfectioneryCosts(input)).not.toBe(input)
    })
    test("Does not mutate the original array", () => {
        const input = [
            {
              name: "Beyonce Bowls",
              yearlyCumulativeSpend: "£44",
              purchaseToday: {
                item: "White mice",
                costPerItem: "£3",
                amountBought: 17,
              }
            }
          ]
        const inputCopy = [...input]
        calculateConfectioneryCosts(input)
        expect(input).toEqual(inputCopy)
    })
})





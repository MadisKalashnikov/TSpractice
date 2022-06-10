const add1 = (n1:number, n2:number) => {
    return n1 + n2 + ' hello'
}
const add2 = (n1:number, n2:number) => {
    return n1 + n2
}
const printResult = (num: number): void => { // if function doesnt return a value : void
    console.log("result " + num)
}

const addAndHandle = (n1: number, n2: number, cb: (a: number) => void) => { // function that takes in a callback function
    const result = n1 + n2
    cb(result)
}

printResult(add2(5, 6))

let combineValues: (a: number, b: number) => number // function type that takes in two numbers and returns a number
// combineValues = add1
combineValues = add2
// combineValues = printResult

addAndHandle(5, 10, (a) => {
    console.log(a)
})
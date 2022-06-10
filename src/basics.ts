const add = (n1:number, n2:number, showResult:boolean, phrase:string) => {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("incorrect input")
    }
    const result = n1 + n2
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result
    }
}

let number1:number = 5
// number1 = "string" type string not assignable to type number
const number2 = 2.8;
const printRes = true
const resultPhrase = "result is: "
add(number1, number2, printRes, resultPhrase)
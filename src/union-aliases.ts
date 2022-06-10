// type aliases
type NrStr = number | string
type Conversion = "as-string" | "as-number"
const combine = (
    input1: NrStr,
    input2: NrStr,
    resultConversion: Conversion
     ) => {
    let result
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
    // if (resultConversion === "as-number") {
    //     return +result
    // } else {
    //     return result.toString()
    // }
 } 
 console.log(combine(45, "mats", "as-string"))
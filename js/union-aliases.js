"use strict";
const combine = (input1, input2, resultConversion) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === "as-number") {
    //     return +result
    // } else {
    //     return result.toString()
    // }
};
console.log(combine(45, "mats", "as-string"));

"use strict";
const add1 = (n1, n2) => {
    return n1 + n2 + ' hello';
};
const add2 = (n1, n2) => {
    return n1 + n2;
};
const printResult = (num) => {
    console.log("result " + num);
};
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
printResult(add2(5, 6));
let combineValues; // function type that takes in two numbers and returns a number
// combineValues = add1
combineValues = add2;
// combineValues = printResult
addAndHandle(5, 10, (a) => {
    console.log(a);
});

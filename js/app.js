"use strict";
let userInput; // can do type checking compared to any
let username;
userInput = 5;
userInput = "mats";
// username = userInput // cant assign 
if (typeof userInput === "string") { // checks type of userinput
    username = userInput; // can assign userinput into username since its type is checked
}
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
generateError("an error occurred", 65);
const error = generateError("an error", 78);
console.log(error); // doesnt log anything since it never returns anything

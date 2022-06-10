
// const person: { // takes only object that contain specific key values
//     name: string, // string
//     age: number, // number
//     hobbies: string[] // string array
//     role: [number, string] // tuple
// } = {
//     name: "madis",
//     age: 30,
//     hobbies: ["sports", "track"],
//     role: [2, "admin"]
// }
enum role { Admin, author, read } // enum, admin is index 0, etc
// can assing different values { Admin="admin", author=500, read="tree" }
const person = {
    name: "madis",
    age: 30,
    hobbies: ["sports", "track"],
    role: role.author
};
console.log(role)
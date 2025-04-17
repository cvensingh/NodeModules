const {log} = require ("console");


// console.log("Hello shivendra Singh !")
// console.log(global);
// const generateRandomNumber = require("./utils");
// console.log (`Random Number: ${generateRandomNumber}`);


const fs = require ("fs")

//const filecontents = fs.readFileSync("./file.txt");
console.log("first");


const filecontents = fs.readFileSync("./file.txt","utf-8");
console.log(filecontents);

// console.log("this is my first node js file")

//core module
// const data=require("fs") //file system
// data.writeFileSync("abc.txt","hellow how are you")

// const readData=data.readFileSync("abc.txt","utf-8")
// console.log(readData)

// const data=require("os")
// console.log(data.platform())

//local module
// function sum(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// module.exports={
//     sum,sub
// }

//third party module
const data=require(chalk)
console.log(data.green("hellow how are you"))
console.log(data.blue("hellow how are you"))

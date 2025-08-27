const data=require("fs")
data.writeFileSync("hello.txt","Hellow Nodejs")



const readData=data.readFileSync("hello.txt","utf-8")
console.log(readData)
data.appendFileSync("hello.txt","Practice makes perfect") 

const newD=data.readFileSync("hello.txt","utf-8")
console.log(newD)


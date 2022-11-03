//let a=true;

/*
setTimeout(function(){
    a=false;
},10000);

while(a){
    console.log("hello");
}
*/

/*
let ctr=0;
setInterval(function(){
    if(a){
        console.log("hello",(++ctr));
    }
},1000);

setTimeout(function(){
    a=false;
},10079);
*/

/*
const p=new Promise((function(resolve,reject){

    let randomNum=Math.floor(Math.random()*10);
    console.log(randomNum);
    setTimeout(()=>{
        if(randomNum%2==0){
            resolve(randomNum);
        }
        else{
            reject();
        }
    },2000);
    
}))

p.then((data)=>{
    console.log("resolve");
    return "abc";
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("reject");
})
*/

/*
async function abc(){
    console.log("hello");
    return "abc";
}

let temp=abc();
console.log(temp);

function abc(){
    return new Promise((resolve,reject)=>{
        console.log("hello");
        resolve("abc");
    })
}

temp=abc();
console.log(temp);
*/

/*
const fs = require("fs");

function check() {
    let readFilePromise = fs.promises.readFile("q1.txt", "utf-8")

    readFilePromise.then((data)=>{
        console.log(data);
        return data;
    })
}
async function checkASYNC() {
    let data = await fs.promises.readFile("q1.txt", "utf-8");
    console.log(data);
}

check();
checkASYNC();
*/
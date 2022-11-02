/*
function print(val){
    console.log(val);
}

function add(n1,n2,print){
    let sum=n1+n2;
    print(sum);
}

add(2,3,print)
*/

const fs=require("fs");

let count = 0;

function print(err,data){
    if(!err){
        count += 1;
        if(count < 6){
            var pr=fs.readFile("q"+count+".txt",'utf-8',print);            
        }
        console.log(pr);
    }
}

// Synchronous

// Asynchronous

// for(let i=1;i<=5;i++) {
//     fs.readFile("q"+i+".txt",'utf-8',callback);
// }
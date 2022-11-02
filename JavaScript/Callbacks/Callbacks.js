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



// Asynchronous

// function callback(err,data){
//     if(!err) console.log(data);
// }

// for(let i=1;i<=5;i++) {
//     fs.readFile("q"+i+".txt",'utf-8',callback);
// }

// Synchronous

let count = 0;
function print(err,data){
    count += 1;
    if(count<6){
        if(!err){
            console.log(data);
        }
        else{
            console.log(err);
        }
    }
    fs.readFile("q"+(count+1)+".txt",'utf-8',print);            
}
fs.readFile("q1.txt",'utf-8',print);
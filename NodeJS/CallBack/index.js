const fs = require("fs");

// // console.log(fs);

// Through Recursive CallBack

// let count=0;
// function cb(err,data){
//     count++;
//     if(count<=3){
//         if(!err){
//             console.log(data);
//         }
//         else{
//             console.log(err);
//         }
//         fs.readFile('q'+(count+1)+'.html','utf-8',cb);
//     }
// }

// fs.readFile('q1.html','utf-8',cb)


// Through Loop

// function cb(err,data){
//     if(!err){
//         console.log(data);
//     }
//     else{
//         console.log(err);
//     }
// }

// for(let i=1;i<=3;i++){
//     fs.readFile('q'+i+'.html','utf-8',cb);
// }
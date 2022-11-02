let a=true;

/*
setTimeout(function(){
    a=false;
},10000);

while(a){
    console.log("hello");
}
*/

let ctr=0;
setInterval(function(){
    if(a){
        console.log("hello",(++ctr));
    }
},1000);

setTimeout(function(){
    a=false;
},10079);
// global scope

// let a=24;

// console.log(a);


// module scope

export const moduleVar="exported variable";


// function scope

// let,const -> block level scope
// var -> function scope

// function print(){
//     let a=2;
//     console.log(a);

//     newVar="var";
//     console.log(newVar);
//     var newVar;

    // if(true){
    //     let b=3;
    //     const c=4;
    //     var d=5;
    //     var d=7;
    //     console.log(b,c);
    // }
    // console.log(b,c);
    // console.log(d);
// }

// print();

// console.log(a);

// function declaration

// print();

// function print(){
//     console.log("hello world");
// }

// function expression

// print();
// const print=function(){

// }

// arrow function

// let print = () => console.log("hello world");

// print();

// error handling

// try{
//     console.log("try ctach start");
//     setTimeout(()=>{
//         sdffdsf;
//     },1000);
//     // ahdhasd;

//     console.log("try block ends");

// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);

//     // console.log("error aagya, abe error theek kar");
// }

// setTimeout(()=>{
//     try {
//         gagagg;
//     } catch (err) {
//         console.log("error aagya");
//     }
// },1000)

// const error=new Error("isme error message aayega");

// throw error;

// let json="{name : 'john'}";
// try{
//     let arr=JSON.parse(json);
//     console.log("mene dediya error ;)");
// }
// catch(err){
//     console.log("JSON valid nhi h yaar :(");
// }

// let json='{"name" : "john"}';

// try{
//     let arr=JSON.parse(json);
//     if(!arr.age) throw new Error("age nhi h beta");
// }
// catch(err){
//     console.log(err.message);
// }
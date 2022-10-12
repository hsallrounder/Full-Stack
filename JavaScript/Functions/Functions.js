/*
let message2="I'm 20 years old"

function abc(a,b){
    let message2="I'm 25 years old";
    let message='My name is '

    console.log(message + a + b + message2);
}

console.log(message2);

abc('himanshu','sharma');

// console.log(message);

console.log(message2);
*/


/* 
function sum(a,b){
    return;
}
 */
// console.log(sum()==undefined)
// console.log(sum(11,34));


// sayHi();  //Uncaught ReferenceError: Cannot access 'sayHi' before initialization

/*
let sayHi=function(){
    console.log('hello world');
}
sayHi();
*/

/*
let sum = (a,b) => {
    return a+b;
}
*/
/*
let sum = (a,b) => a+b;

console.log(sum(10,1));
*/

/*
let num=255;

console.log(num.toString(2));
*/

/*
let num2=12.47756;

console.log(Math.round(num2*100)/100);

console.log(num2.toFixed(3));
*/

// console.log(Math.pow(2,3));

// console.log(parseInt('100px23'));

// console.log(parseFloat('12.45em53'));

/*
let str='I\'m a\nstring';

console.log(str);

str='This is a String';

console.log(str.length);

console.log(str[-1]);
console.log(str[3]);

console.log(str.at(-1));
console.log(str.charAt(3));

console.log(str.indexOf('is'));
*/

let str=' this is a string and is an example';
/*
let cur=0,prev=0;
while(true){
    cur=str.indexOf('is',prev+1);
    if(prev!=cur && cur>=0) console.log(cur);
    else break;
    prev=cur;
}
*/

console.log(str.substring(3));
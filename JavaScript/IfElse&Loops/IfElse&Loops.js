/*
let age=prompt('enter your age?','');

if(age<13) alert('you are a child')
if(age<18) alert('you are a teenager')
alert((age>=60) ? 'you are a senior citizen':'you are an adult')
*/

/*
let i=0;
while(i<3){
    alert(i++);
}

for(let i=0; i<3; i++) {
    // ---code---;
}
*/

let sum=0;
while(true) {
    let val=prompt('enter value',0);
    if(!val) break;
    sum+=+val;
}
alert(sum);
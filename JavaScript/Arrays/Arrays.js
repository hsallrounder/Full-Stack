// let arr=new Array(5);
// console.log(arr);

// let arr=[1,2,3,4,5,6,'apples','mangoes',true,function(){alert('hello world')}];

// console.log(arr2[9]());

// console.log(arr.pop())
// console.log(arr.push('false',45));
// console.log(arr.shift());
// console.log(arr.unshift('23',67));
// console.log(arr);

// let arr2=[]
// arr2[255]=1;
// console.log(arr2);
// console.log(arr2.length);

// arr=[2];
// arr2=arr;
// console.log(arr==arr2);
// console.log([2]==[2]);

/*
let arr=[[1,2,3],[4,5,6],[7,8,9]];

let sum=0;

let narr=[];

// 1. print index
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(i,j);
        sum+=arr[i][j];
        narr.push(arr[i][j])
    }
}

// 2. sum
console.log("sum = ",sum);


// 3. array flatten
console.log(narr);
*/

// let arr=['mango','apples','banana'];

// delete arr[2];
// arr.splice(2,0,'grapes');
// console.log(arr);

// arr.forEach(alert)

/*
let str=" This is a dev class ";

let res="",temp="";
for(let i=0;i<str.length;i++){
    if(str.at(i)!=' '){
        temp=str.at(i)+temp;
    }
    else {
        res+=" "+temp;
        temp="";
    }
}
if(temp.length!=0) res+=+" "+temp;
console.log(res);
*/

/*
let str='background-color-Red';

let strarr=str.split('-');

let res="";
strarr.forEach(e => {
    if(e.at(0)>='a'){
        res+=(e.charAt(0).toUpperCase()+e.substring(1));
    }
    else res+=(e.charAt(0)+e.substring(1));
});

console.log(res);
*/
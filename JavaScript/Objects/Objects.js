/*
let obj = {

    name: 'john',

    "hello1": 1,
    "hello2": 2,
    welcome: function(){
        console.log('welcome');
    },
    arr1:['maruti','swift','baleno'],
    'new car': 'audi'
}

console.log(obj.arr1);
console.log(obj["hello1"]);
console.log(Object.keys(obj));
console.log(Object.values(obj));
obj.welcome();
obj["isAdult"]=true;
console.log(obj.arr1[1]);
*/

/*
let str='aabc bbca caab ddac';
let occ={}

for(let ch of str){
    occ[ch] = ((ch in occ) ? occ[ch] : 0) +1;
}

console.log(occ);
*/

/*
let person={
    firstName:'john',
    age:24
}

//person=null;

//console.log(person.firstName); // Cannot read properties of null (reading 'name')

//let p1=Object.create(person);
//Prototypes: It is a mechanism through whihc objects can inherit properties of one another.

let p1={
    lastName:'doe',
    __proto__:person
}

let p2 = {
    isAdult: true,
    __proto__:p1
}

// p1['firstName'] = 'harry'

console.log(p1.firstName);

console.log(p2.firstName);
*/

console.log(Object.prototype.__proto__);

Array.prototype.pop = function(){
    console.log('Welcome');
}
let arr=["dsf","sdf"];
arr.pop();
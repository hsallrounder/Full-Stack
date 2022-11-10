/*
console.dir(document);

console.log(document.domain);

console.log(document.URL);

console.log(document.body);

console.log(document.head);

console.log(document.links);

console.log(document.all);

console.log(document.all[5]);

document.all[5].textContent='hello world';

console.log(document.all[12].textContent);
console.log(document.all[12].innerText);
*/

// Querying Document
/*
let header=document.getElementById('header-title');

header.style.backgroundColor='red';

// header.innerText='123';

// header.innerHTML = '<h3> This is a h3 heading</h3>';
header.innerHTML = '<h3> hello world</h3>';

console.log(header);
*/

// getElementByClassName

/*
var items = document.getElementsByClassName('list-group-item');

console.log(items);

for(let i=0;i<items.length;i++){

    // items[i].style.backgroundColor='lightgrey'

    Object.assign(items[i].style,{backgroundColor:'red',fontWeight:'bold'})
}
*/

// getElementByQuerySelector

/*
var heading=document.querySelector('.title');

heading.style.backgroundColor='green';
*/

/*
var heading=document.querySelectorAll('.title');

console.log(heading);

for(let i=0;i<heading.length;i++){
    heading[i].style.backgroundColor='green';
}
*/

/*
var ulp=document.querySelector('ul').parentNode;
console.log(ulp);
ulp.style.backgroundColor='pink';
*/

/*
var body_p=document.querySelector('body').parentNode.parentNode;
console.log(body_p);
*/

// Array.form
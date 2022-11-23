let person = {
    name: 'Akansha',
    age: 20,
    address: 'mathura'
}

console.log(person);


person = JSON.stringify(person);

console.log(person);

person = JSON.parse(person);

console.log(person);


const xhr = new XMLHttpRequest;

xhr.onload = function () {

    let data=this.response;
    let arr=JSON.parse(data);
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].name);
    }
}

xhr.onerror = function () {

}

// For API URL
// https://www.coingecko.com/en/api/documentation

const URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=3&page=1&sparkline=false";

xhr.open("GET", URL);

xhr.send();


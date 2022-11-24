const xhr = new XMLHttpRequest;

xhr.onload = function () {

    let data=JSON.parse(this.response);
    console.log(data);
}

xhr.onerror = function () {

}

// For API URL

// https://openweathermap.org/current

let APIkey; // {your key};
document.getElementById("submit").addEventListener('click',(e)=>{
    let cityname=document.getElementById('input').value;
    const URL="https://api.openweathermap.org/data/2.5/weather?q=" +cityname+ "&appid="+APIkey;    
    xhr.open("GET", URL);
    e.preventDefault();
    xhr.send();
});
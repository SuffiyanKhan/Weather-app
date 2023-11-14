
const apiKey = "6b5563965460f3f8212f268afb1d7b41";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let serachW = document.getElementById("serchsW");
let cityName = document.getElementById("cityName");
let getTemp = document.getElementById("temp");
let feel = document.getElementById("feel");
let speed = document.getElementById("speed");
let deac = document.getElementById("deac");
let dated = new Date();
let stringDated = dated.toDateString();
document.getElementById("dated").innerHTML = stringDated;
let Search = document.querySelector('#serchsW');
async function checkWeather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    cityName.innerHTML = data.name;
    getTemp.innerHTML =Math.round(data.main.temp) + "°c";
    feel.innerHTML = "Feel like "+' '+ data.main.feels_like;
    speed.innerHTML ="Speed :"+' '+ data.wind.speed;
    deac.innerHTML = data.weather[0].main;
    serachW.innerHTML = " ";
}
// apiUrl + city + `&appid=${apiKey}`
fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=karachi&appid=6b5563965460f3f8212f268afb1d7b41")
.then( Response => Response.json())
.then( data => {
    console.log(data)
    console.log(data.main.humidity)
    let temp = Math.round(data.main.temp);
    let getTemp = document.getElementById("temp");
    let cityName = document.getElementById("cityName");
    let feel = document.getElementById("feel");
    let deac = document.getElementById("deac");
    let speed = document.getElementById("speed");
    let humini = document.getElementById("hum");
    let dgre = document.querySelector('#dgre')
    console.log(data.main.humidity + "%")
    getTemp.innerHTML = temp + "°c";
    cityName.innerHTML = data.name;
    feel.innerHTML = "Feel like "+' '+ data.main.feels_like;
    deac.innerHTML = data.weather[0].main;
    speed.innerHTML ="Speed :"+' '+ data.wind.speed;
    // dgre.textContent="Degree :" +' '+ data.wind.deg;
    // humini.textContent = data.main.humidity
    setInterval(()=>{
        let temp = Math.round(data.main.temp);
        let getTemp = document.getElementById("temp");
        let cityName = document.getElementById("cityName");
        let feel = document.getElementById("feel");
        let deac = document.getElementById("deac");
        let speed = document.getElementById("speed");
        let humini = document.getElementById("huminidy");
        getTemp.innerHTML = temp + "°c";
        cityName.innerHTML = data.name;
        feel.innerHTML = "Feel like "+' '+ data.main.feels_like;
        deac.innerHTML = data.weather[0].main;
        speed.innerHTML ="Speed :"+' '+ data.wind.speed;
    },25000);
    serachW.innerHTML = " ";
})
.catch((error)=>{
    const errorCode = error.code;
    const errorMessage = errorCode.slice(5).toUpperCase();
    const errMessage = errorMessage.replace(/-/g, " ");
    alert(errMessage)   
})
function serach(){
    checkWeather(serachW.value)
    cityName.innerHTML = serachW.value
    serachW.innerHTML =" ";

}
Search.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        checkWeather(serachW.value)
    // cityName.innerHTML = serachW.value
    serachW.innerHTML =" ";
    }
})
document.querySelector('#closePopup').addEventListener('click',()=>{
    document.querySelector('.popup').style.display ='none'
    document.querySelector('#sidebar').style.display ='block'
})
document.querySelector('#sidebar').addEventListener('click',()=>{
    document.querySelector('.popup').style.display ='block'
    document.querySelector('#sidebar').style.display ='none'
})
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey ='58e6c61c82c4d495c305e5763c078ac1';
const searchbar = document.querySelector(".search_section input");
const searchbtn = document.querySelector(".search_section button");
const weatherimg = document.querySelector(".weather_icon img");
const weatherblock = document.querySelector(".section");

async function  checkWeather(city){
    try{
        const response = await fetch(apiurl+city+`&appid=${apikey}`);
        if(!response){
            console.log("error")
        }
        const data = await response.json();
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temperature").innerHTML= `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML= `${data.main.humidity}%`;;
        document.querySelector(".windspeed").innerHTML= `${data.wind.speed}km/h`;
        if(data.weather[0].main=="Rain"){
            weatherimg.src ="images/rain.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherimg.src ="images/clear.png";
        }
        else if(data.weather[0].main=="Clouds"){
            weatherimg.src= "images/clouds.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherimg.src= "images/snow.png";
        }
        else if(data.weather[0].main =="Mist"){
            weatherimg.src="image/mist.png";
        }
        else if(data.weather[0].main=="Drizzle.png"){
            weatherimg.src="image/drizzle.png";
        }

document.querySelector(".section").style.display="block";
    }
    catch(error) {
        console.log(error);
    }
  

}
searchbtn.addEventListener('click', ()=>{
    checkWeather(searchbar.value);
})




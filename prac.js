const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "02e2f3faf4450bf53c0f62cd764d97d9";

const searchbox =document.querySelector(".search input");
const searchbtn =document.querySelector(".search button");
const weathericon =document.querySelector(".weather-icon");

const getweather = async(city)=>{
    console.log("getting data  ...");
    let response = await fetch(URL + city + `&appid=${apikey}`);

    if(response.status == 404){
      document.querySelector(".error").style.display ="block";
      document.querySelector(".weather").style.display="none";
    }else
    {
        let data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "clouds")
        {
            weathericon.src="images/clouds.png";
    
        }
        else if(data.weather[0].main == "Rain")
        {
            weathericon.src="images/rain.png";
    
        }
        else if(data.weather[0].main == "Mist")
        {
            weathericon.src="images/mist.png";
    
        }
        else if(data.weather[0].main == "Clear")
        {
            weathericon.src="images/clear.png";
    
        }
        else if(data.weather[0].main == "Snow")
        {
            weathericon.src="images/snow.png";
    
        }
        
      document.querySelector(".weather").style.display="block";
      document.querySelector(".error").style.display="none";
    };}
    

searchbtn.addEventListener("click", ()=>{
    getweather(searchbox.value);
})


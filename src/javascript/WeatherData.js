// Api key is free tier
let apiKey = "10b9d3fdb8bd7573f3137c7ef6e31701";

async function getWeatherData(location,units){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`,{mode: 'cors'})
        const weatherData = await response.json()
        
        const temp = weatherData.main.temp;
        const windSpeed = weatherData.wind.speed;
        const icon = weatherData.weather[0].icon;
        const description = weatherData.weather[0].description;
        return { temp, windSpeed, icon, description}
    } catch (error) {
        console.log(error)
        return "Location not found! Please try again"
    }



    

   
}

export default getWeatherData
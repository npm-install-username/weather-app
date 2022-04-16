// Api key is free tier
let apiKey = "10b9d3fdb8bd7573f3137c7ef6e31701";

async function getWeatherData(location,units){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`,{mode: 'cors'})
        const weatherData = await response.json()
        console.log(weatherData)
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

async function getNextDaysWeather(location, units){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=${units}`,{mode: 'cors'})
        
        const data = await response.json()
        console.log(data)
        const day1 = data.list[0]
        const day2 = data.list[8]
        const day3 = data.list[17]
        
        return {day1, day2, day3}
        
    } catch (error) {
        console.log(error)
        return "Location not found! Please try again"
    }

}


export { getWeatherData, getNextDaysWeather}
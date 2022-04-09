// Api key is free tier
let apiKey = "10b9d3fdb8bd7573f3137c7ef6e31701";

async function getWeatherData(location){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,{mode: 'cors'})
    const weatherData = await response.json();
    console.log(weatherData)
}

export default getWeatherData
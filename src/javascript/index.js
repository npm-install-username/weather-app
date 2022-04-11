import './UI'
import displayTodaysWeather from './UI'
import '../sass/styles.scss';
import getWeatherData from './WeatherData'

let searchBtn = document.getElementById("search-bar-btn")

searchBtn.addEventListener('click',()=>{
    let location = document.getElementById('search-bar').value
    document.getElementById('search-bar').value = ''
    
    getWeatherData(location,'metric').then((data)=>{
        console.log(data)
        displayTodaysWeather(location,data)
    })
})




// Index handles events

import './UI'
import displayTodaysWeather from './UI'
import '../sass/styles.scss';
import getWeatherData from './WeatherData'

// variable init
let tempUnit = "metric"

let searchBtn = document.getElementById("search-bar-btn")

searchBtn.addEventListener('click',()=>{
    let location = document.getElementById('search-bar').value
    document.getElementById('search-bar').value = ''
    
    getWeatherData(location,tempUnit).then((data)=>{
        console.log(data)
        displayTodaysWeather(location,data,tempUnit)
    })
})


let tempSwitch = document.getElementById('tempSwitchDiv')
let checkedTemp = document.getElementById('toggle-on')
tempSwitch.addEventListener('click',()=>{
    if(checkedTemp.checked){
        tempUnit = "metric"
    } else{
        tempUnit = "imperial"
    }
})



// Index handles events

import './UI'
import {displayTodaysWeather, displayNextDaysWeather} from './UI'
import '../sass/styles.scss';
import {getWeatherData, getNextDaysWeather} from './WeatherData'

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
    getNextDaysWeather(location,tempUnit).then((data)=>{
        console.log(data)
        displayNextDaysWeather(data,tempUnit)
        
    })
})




let tempSwitch = document.getElementsByClassName('toggle')
tempSwitch = Array.from(tempSwitch)



tempSwitch.forEach(element => {
    element.addEventListener('click',()=>{
        
        if(element.checked){
            if(element.id == 'toggle-on'){
                tempUnit = "metric"
                console.log(tempUnit)
                
            } else{
                tempUnit = "imperial"
                console.log(tempUnit)
                
            }
        }
        let location= document.getElementById("location")
        if(location){
            location = location.innerText
            getWeatherData(location,tempUnit).then((data)=>{
                displayTodaysWeather(location,data,tempUnit)
            })
            getNextDaysWeather(location,tempUnit).then((data)=>{
                console.log(data)
                displayNextDaysWeather(data,tempUnit)
                
            })
        }
        return tempUnit
    })
});
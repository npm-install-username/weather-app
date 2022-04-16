// Index handles events

import './UI'
import {displayTodaysWeather, displayNextDaysWeather} from './UI'
import '../sass/styles.scss';
import {getWeatherData, getNextDaysWeather} from './WeatherData'

// variable init
let tempUnit = "metric"

function searchFunc(e){
    let location = document.getElementById('search-bar').value
    document.getElementById('search-bar').value = ''
    
    getWeatherData(location,tempUnit).then((data)=>{
        displayTodaysWeather(location,data,tempUnit)
    })
    getNextDaysWeather(location,tempUnit).then((data)=>{
        displayNextDaysWeather(data,tempUnit)
        
    })
    e.preventDefault();
}


let form = document.getElementById('form')
form.addEventListener('submit', searchFunc)



let tempSwitch = document.getElementsByClassName('toggle')
tempSwitch = Array.from(tempSwitch)



tempSwitch.forEach(element => {
    element.addEventListener('click',()=>{
        
        if(element.checked){
            if(element.id == 'toggle-on'){
                if(tempUnit == "metric"){
                    return
                }
                tempUnit = "metric"
                
                
            } else{
                if(tempUnit == "imperial"){
                    return
                }
                tempUnit = "imperial"
                
                
            }
        }
        let location= document.getElementById("location")
        if(location){
            location = location.innerText
            getWeatherData(location,tempUnit).then((data)=>{
                displayTodaysWeather(location,data,tempUnit)
            })
            getNextDaysWeather(location,tempUnit).then((data)=>{
                displayNextDaysWeather(data,tempUnit)
            })
        }
        return tempUnit
    })
});
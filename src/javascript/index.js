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

        setTimeout(()=>{
            displayTodaysWeather(location,data,tempUnit)
        },3000)

    })
    getNextDaysWeather(location,tempUnit).then((data)=>{
        setTimeout(()=>{
            displayNextDaysWeather(data,tempUnit)
        },3000)
        
        
    })
    e.preventDefault();
}

function loading(){
    if(document.getElementById('today-weather').innerHTML.length > 0){
        document.getElementById('today-weather').innerHTML='Loading...'
    } else{
        document.getElementById('today-weather').innerHTML='Loading...'
    }
    
    for (let index = 2; index < 5; index++) {
        if(document.getElementById(`day${index}`).innerHTML.length > 0){
            console.log(document.getElementById(`day${index}`))
            document.getElementById(`day${index}`).innerHTML=''
        }
    }
}

let form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    loading()
    searchFunc(e)
    

})



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
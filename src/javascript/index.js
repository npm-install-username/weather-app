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



// THIS EVENT LISTENER CURRENTLY RUNS TWICE EVERY CLICK
// NEED TO FIX
let tempSwitch = document.getElementsByClassName('toggle')
tempSwitch = Array.from(tempSwitch)
let checkedTemp = document.getElementById('toggle-on')


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
        }
        return tempUnit
    })
});

// tempSwitch.addEventListener('click',()=>{
//     if(checkedTemp.checked){
//         tempUnit = "metric"
//     } else{
//         tempUnit = "imperial"
//     }

//     let location= document.getElementById("location")
//     if(location){
//         location = location.innerText
//         console.log(location)
//         getWeatherData(location,tempUnit).then((data)=>{
//             console.log(data)
//             displayTodaysWeather(location,data,tempUnit)
//         })
//     }
// })



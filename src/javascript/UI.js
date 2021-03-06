import changeBackground from './Background'


// Create main containers
let container = document.createElement('div')
container.className="container"
document.body.appendChild(container)
let content = document.createElement('div')
content.id='content'
content.classList.add('content-01')
container.appendChild(content)

// Create app container
let appContainer = document.createElement('div')
appContainer.id = 'app-container'
content.appendChild(appContainer)


// Create search bar components (search bar and button)
let searchForm = document.createElement('form')
searchForm.id = "form";

appContainer.appendChild(searchForm)
let searchBar = document.createElement('input')
searchBar.type = "text"
searchBar.id = "search-bar"
searchBar.name = "search-bar"
searchBar.placeholder = "Enter a country or city..."
searchForm.appendChild(searchBar)
let searchBtn = document.createElement('button')
searchBtn.innerText = "Search"
searchBtn.id = "search-bar-btn"
searchForm.appendChild(searchBtn)

// Weather Display section
let display = document.createElement('div')
display.id = 'display'
appContainer.appendChild(display)
let todayWeather = document.createElement('div')
todayWeather.id = 'today-weather'
todayWeather.className = 'display-box'
let nextDaysWeather = document.createElement('div')
nextDaysWeather.id = 'next-days-weather'
nextDaysWeather.className = 'display-box'
display.appendChild(todayWeather)
display.appendChild(nextDaysWeather)

// next days sub section
let day2 = document.createElement('div')
day2.id ="day2"
day2.className = "next-days-display"
let day3 = document.createElement('div')
day3.id ="day3"
day3.className = "next-days-display"
let day4 = document.createElement('div')
day4.id ="day4"
day4.className = "next-days-display"
nextDaysWeather.appendChild(day2)
nextDaysWeather.appendChild(day3)
nextDaysWeather.appendChild(day4)

// Temperature switch toggle units
// Init temperature units
let tempUnit = "metric"
let tempSwitch = document.createElement('div')
tempSwitch.id = 'tempSwitchDiv'
tempSwitch.innerHTML= "<input id='toggle-on' class='toggle toggle-left' name='toggle' value='false' type='radio' checked><label for='toggle-on' class='btn'>\xB0C</label><input id='toggle-off' class='toggle toggle-right' name='toggle' value='true' type='radio'><label for='toggle-off' class='btn'>\xB0F</label>"
appContainer.appendChild(tempSwitch)
let checkedTemp = document.getElementById('toggle-on')
tempSwitch.addEventListener('click',()=>{
    if(checkedTemp.checked){
        tempUnit = "metric"
    } else{
        tempUnit = "imperial"
    }
})



// Today's weather display
function displayTodaysWeather(location,data,units) {
    // Clears div prior to displaying new data
    todayWeather.innerHTML = ''
    if (typeof data === 'string'){
        let noDataFoundMessage = document.createElement('h4')
        noDataFoundMessage.innerText = data.toUpperCase()
        todayWeather.appendChild(noDataFoundMessage)
        return
    }

    changeBackground(data)

    // Location
    let todayWeatherLocation = document.createElement('h2')
    todayWeatherLocation.id = "location"
    todayWeatherLocation.innerText = location.toUpperCase()
    todayWeatherLocation.style.fontStyle='italic'
    
    // Weather temp and windspeed
    let todayWeatherTemp = document.createElement('h1')
    let todayWeatherWindSpeed = document.createElement('h5')
    if(units == "metric"){
        todayWeatherTemp.innerText = Math.round(data.temp) + '\xB0' + "C"
        todayWeatherWindSpeed.innerText = "Wind speed: " + Math.round(data.windSpeed) +" km/h"
    } else{
        todayWeatherTemp.innerText = Math.round(data.temp) + '\xB0' + "F"
        todayWeatherWindSpeed.innerText = "Wind speed: " + Math.round(data.windSpeed) +" mph"
    }

    // Weather desctription
    let todayWeatherDesc = document.createElement('h5')
    todayWeatherDesc.innerText = data.description.toUpperCase()
    
    // Weather icon
    let todayWeatherIcon = document.createElement('img')
    let todayWeatherIconDiv = document.createElement('div')
    todayWeatherIconDiv.className = "weather-icon-div"
    todayWeatherIcon.className = `weather-icon-${data.icon.slice(0,-1)}`

    // Creatinng sub container to allow div to be centered
    let todayWeatherContainer = document.createElement('div')
    todayWeatherContainer.className = "today-weather-container"
    // Order of appending DOM elements
    todayWeather.appendChild(todayWeatherContainer)
    todayWeatherContainer.appendChild(todayWeatherLocation)
    todayWeatherContainer.appendChild(todayWeatherTemp)
    todayWeatherContainer.appendChild(todayWeatherDesc)
    todayWeatherIconDiv.appendChild(todayWeatherIcon)
    todayWeatherContainer.appendChild(todayWeatherWindSpeed)
    todayWeatherContainer.appendChild(todayWeatherIconDiv)

}

function displayNextDaysWeather(data, units){

    if (typeof data === 'string'){
        for (let index = 2; index < 5; index++) {
            const element = document.getElementById(`day${index}`)
            element.innerHTML=''
            
        } 
        return
    }
    
    for (const day in data) {
        
        const dayBox = document.getElementById(day)
        // Clears div prior to displaying new data
        dayBox.innerHTML = ''

        
        
        let weatherTemp = document.createElement('h5')
        if(units == "metric"){
            weatherTemp.innerText = Math.round(data[day].main.temp) + '\xB0' + "C"
    
        } else{
            weatherTemp.innerText = Math.round(data[day].main.temp) + '\xB0' + "F"
        }
        
        // Weather icon
        let nextDaysIcon = document.createElement('img')
        let nextDaysIconDiv = document.createElement('div')
        nextDaysIconDiv.className = "weather-icon-div-small"
        console.log(data[day])
        nextDaysIcon.className = `weather-icon-${data[day].weather[0].icon.slice(0,-1)}`
       
        
        // appending elements to DOM
        dayBox.appendChild(weatherTemp)
        dayBox.appendChild(nextDaysIconDiv)
        nextDaysIconDiv.appendChild(nextDaysIcon)

        
        
    }
}


export { displayTodaysWeather, displayNextDaysWeather}
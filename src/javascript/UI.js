import changeBackground from './Background'

// Create main containers
let container = document.createElement('div')
container.className="container"
document.body.appendChild(container)
let content = document.createElement('div')
content.id="content"
container.appendChild(content)

// Create app container
let appContainer = document.createElement('div')
appContainer.id = 'app-container'
content.appendChild(appContainer)


// Create search bar components (search bar and button)
let searchBarDiv = document.createElement('div')
searchBarDiv.id = "search-bar-div"
appContainer.appendChild(searchBarDiv)
let searchBar = document.createElement('input')
searchBar.type = "text"
searchBar.id = "search-bar"
searchBar.name = "search-bar"
searchBar.placeholder = "Enter a country or city..."
searchBarDiv.appendChild(searchBar)
let searchBtn = document.createElement('button')
searchBtn.innerText = "Search"
searchBtn.id = "search-bar-btn"
searchBarDiv.appendChild(searchBtn)

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

// Today's weather display
function displayTodaysWeather(location,data) {
    // Clears div prior to displaying new data
    todayWeather.innerHTML = ''
    if (typeof data === 'string'){
        let noDataFoundMessage = document.createElement('h4')
        noDataFoundMessage.innerText = data.toUpperCase()
        todayWeather.appendChild(noDataFoundMessage)
        return
    }

    changeBackground(data)

    let todayWeatherLocation = document.createElement('h2')
    todayWeatherLocation.innerText = location.toUpperCase()
    todayWeather.appendChild(todayWeatherLocation)

    let todayWeatherTemp = document.createElement('h4')
    todayWeatherTemp.innerText = data.temp + '\xB0' + "C"
    todayWeather.appendChild(todayWeatherTemp)



    let todayWeatherDesc = document.createElement('h5')
    todayWeatherDesc.innerText = data.description
    todayWeather.appendChild(todayWeatherDesc)

    let todayWeatherIcon = document.createElement('img')
    todayWeatherIcon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`
    todayWeather.appendChild(todayWeatherIcon)


    let todayWeatherWindSpeed = document.createElement('h5')
    todayWeatherWindSpeed.innerText = "Wind speed: " + data.windSpeed +" km/h"
    todayWeather.appendChild(todayWeatherWindSpeed)

}

export default displayTodaysWeather
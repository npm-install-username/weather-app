/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/javascript/Background.js":
/*!**************************************!*\
  !*** ./src/javascript/Background.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function changeBackground(data){
    let iconCode = data.icon
    let imageCode = iconCode.slice(0,-1)
    
    let contentClassIndex = 'content-' + imageCode;
    document.getElementById('content').className= contentClassIndex ;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeBackground);

/***/ }),

/***/ "./src/javascript/UI.js":
/*!******************************!*\
  !*** ./src/javascript/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayNextDaysWeather": () => (/* binding */ displayNextDaysWeather),
/* harmony export */   "displayTodaysWeather": () => (/* binding */ displayTodaysWeather)
/* harmony export */ });
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Background */ "./src/javascript/Background.js");



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

    (0,_Background__WEBPACK_IMPORTED_MODULE_0__["default"])(data)

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




/***/ }),

/***/ "./src/javascript/WeatherData.js":
/*!***************************************!*\
  !*** ./src/javascript/WeatherData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextDaysWeather": () => (/* binding */ getNextDaysWeather),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
// Api key is free tier
let apiKey = "10b9d3fdb8bd7573f3137c7ef6e31701";

async function getWeatherData(location,units){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`,{mode: 'cors'})
        const weatherData = await response.json()
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
        
        const day2 = data.list[0]
       
        const day3 = data.list[8]
        const day4 = data.list[17]
        
        return {day2, day3, day4}
        
    } catch (error) {
        console.log(error)
        return "Location not found! Please try again"
    }

}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/javascript/UI.js");
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/styles.scss */ "./src/sass/styles.scss");
/* harmony import */ var _WeatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherData */ "./src/javascript/WeatherData.js");
// Index handles events






// variable init
let tempUnit = "metric"

// Set title of webpage as I have no idea how to do it with webpack
document.title="Weather app"

function searchFunc(e){
    let location = document.getElementById('search-bar').value
    document.getElementById('search-bar').value = ''
    
    ;(0,_WeatherData__WEBPACK_IMPORTED_MODULE_2__.getWeatherData)(location,tempUnit).then((data)=>{

        
        ;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.displayTodaysWeather)(location,data,tempUnit)
        

    })
    ;(0,_WeatherData__WEBPACK_IMPORTED_MODULE_2__.getNextDaysWeather)(location,tempUnit).then((data)=>{
        
        ;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.displayNextDaysWeather)(data,tempUnit)
        
        
        
    })
    e.preventDefault();
}

function loading(){
    if(document.getElementById('today-weather').innerHTML.length > 0){
        document.getElementById('today-weather').innerHTML= `<div class="preloader" style="opacity: 1; ">
        <svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve" style="opacity: 1; margin-left: 0px; margin-top: 0px;">
          <g>
            <path fill="none" d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"></path>
            <path fill="none" d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"></path>
            <path fill="none" d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"></path>
            <path fill="none" d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"></path>
                <path fill="none" d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"></path>
                <path fill="none" d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"></path>
                <path fill="none" d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"></path>
                <path fill="none" d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"></path>
                <path fill="none" d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"></path>
                <path fill="none" d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"></path>
                <path fill="none" d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"></path>
                <path fill="none" d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"></path>
                <path fill="none" d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"></path>
            </g>
        </svg>
      
        <svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve">
          <path fill="none" d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path>
        </svg>
      
        <div class="rain">
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
        </div>
        
        <div class="text">
          LOOKING OUTSIDE FOR YOU... ONE SEC
        </div>`
    } else{
        document.getElementById('today-weather').innerHTML=`<div class="preloader" style="opacity: 1; ">
        <svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve" style="opacity: 1; margin-left: 0px; margin-top: 0px;">
          <g>
            <path fill="none" d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"></path>
            <path fill="none" d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"></path>
            <path fill="none" d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"></path>
            <path fill="none" d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"></path>
                <path fill="none" d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"></path>
                <path fill="none" d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"></path>
                <path fill="none" d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"></path>
                <path fill="none" d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"></path>
                <path fill="none" d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"></path>
                <path fill="none" d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"></path>
                <path fill="none" d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"></path>
                <path fill="none" d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"></path>
                <path fill="none" d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"></path>
            </g>
        </svg>
      
        <svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve">
          <path fill="none" d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path>
        </svg>
      
        <div class="rain">
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
        </div>
        
        <div class="text">
          LOOKING OUTSIDE FOR YOU... ONE SEC
        </div>`
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
            ;(0,_WeatherData__WEBPACK_IMPORTED_MODULE_2__.getWeatherData)(location,tempUnit).then((data)=>{
                ;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.displayTodaysWeather)(location,data,tempUnit)
            })
            ;(0,_WeatherData__WEBPACK_IMPORTED_MODULE_2__.getNextDaysWeather)(location,tempUnit).then((data)=>{
                ;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.displayNextDaysWeather)(data,tempUnit)
            })
        }
        return tempUnit
    })
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ1I0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxzQkFBc0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkMsMERBQTBELE1BQU07QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsc0NBQXNDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsU0FBUyxTQUFTLE9BQU8sU0FBUyxNQUFNLEdBQUcsYUFBYTtBQUNsSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixTQUFTLFNBQVMsT0FBTyxTQUFTLE1BQU0sR0FBRyxhQUFhO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNhO0FBQ29EO0FBQ3BDO0FBQ21DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFjO0FBQ2xCO0FBQ0E7QUFDQSxRQUFRLDBEQUFvQjtBQUM1QjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksaUVBQWtCO0FBQ3RCO0FBQ0EsUUFBUSw0REFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUc7QUFDdkcsMlBBQTJQLGtCQUFrQixnQkFBZ0I7QUFDN1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0dBQXNHO0FBQ3RHLDJQQUEyUCxrQkFBa0IsZ0JBQWdCO0FBQzdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DLHlDQUF5QyxNQUFNO0FBQy9DLHNEQUFzRCxNQUFNO0FBQzVELDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFjO0FBQzFCLGdCQUFnQiwwREFBb0I7QUFDcEMsYUFBYTtBQUNiLFlBQVksaUVBQWtCO0FBQzlCLGdCQUFnQiw0REFBc0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2Fzcy9zdHlsZXMuc2Nzcz81NzFkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2phdmFzY3JpcHQvQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qYXZhc2NyaXB0L1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2phdmFzY3JpcHQvV2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmQoZGF0YSl7XHJcbiAgICBsZXQgaWNvbkNvZGUgPSBkYXRhLmljb25cclxuICAgIGxldCBpbWFnZUNvZGUgPSBpY29uQ29kZS5zbGljZSgwLC0xKVxyXG4gICAgXHJcbiAgICBsZXQgY29udGVudENsYXNzSW5kZXggPSAnY29udGVudC0nICsgaW1hZ2VDb2RlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5jbGFzc05hbWU9IGNvbnRlbnRDbGFzc0luZGV4IDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlQmFja2dyb3VuZCIsImltcG9ydCBjaGFuZ2VCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZCdcclxuXHJcblxyXG4vLyBDcmVhdGUgbWFpbiBjb250YWluZXJzXHJcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb250YWluZXIuY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbmxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29udGVudC5pZD0nY29udGVudCdcclxuY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LTAxJylcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpXHJcblxyXG4vLyBDcmVhdGUgYXBwIGNvbnRhaW5lclxyXG5sZXQgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuYXBwQ29udGFpbmVyLmlkID0gJ2FwcC1jb250YWluZXInXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYXBwQ29udGFpbmVyKVxyXG5cclxuXHJcbi8vIENyZWF0ZSBzZWFyY2ggYmFyIGNvbXBvbmVudHMgKHNlYXJjaCBiYXIgYW5kIGJ1dHRvbilcclxubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuc2VhcmNoRm9ybS5pZCA9IFwiZm9ybVwiO1xyXG5cclxuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pXHJcbmxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbnNlYXJjaEJhci50eXBlID0gXCJ0ZXh0XCJcclxuc2VhcmNoQmFyLmlkID0gXCJzZWFyY2gtYmFyXCJcclxuc2VhcmNoQmFyLm5hbWUgPSBcInNlYXJjaC1iYXJcIlxyXG5zZWFyY2hCYXIucGxhY2Vob2xkZXIgPSBcIkVudGVyIGEgY291bnRyeSBvciBjaXR5Li4uXCJcclxuc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hCYXIpXHJcbmxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5zZWFyY2hCdG4uaW5uZXJUZXh0ID0gXCJTZWFyY2hcIlxyXG5zZWFyY2hCdG4uaWQgPSBcInNlYXJjaC1iYXItYnRuXCJcclxuc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hCdG4pXHJcblxyXG4vLyBXZWF0aGVyIERpc3BsYXkgc2VjdGlvblxyXG5sZXQgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmRpc3BsYXkuaWQgPSAnZGlzcGxheSdcclxuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXkpXHJcbmxldCB0b2RheVdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50b2RheVdlYXRoZXIuaWQgPSAndG9kYXktd2VhdGhlcidcclxudG9kYXlXZWF0aGVyLmNsYXNzTmFtZSA9ICdkaXNwbGF5LWJveCdcclxubGV0IG5leHREYXlzV2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbm5leHREYXlzV2VhdGhlci5pZCA9ICduZXh0LWRheXMtd2VhdGhlcidcclxubmV4dERheXNXZWF0aGVyLmNsYXNzTmFtZSA9ICdkaXNwbGF5LWJveCdcclxuZGlzcGxheS5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXIpXHJcbmRpc3BsYXkuYXBwZW5kQ2hpbGQobmV4dERheXNXZWF0aGVyKVxyXG5cclxuLy8gbmV4dCBkYXlzIHN1YiBzZWN0aW9uXHJcbmxldCBkYXkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuZGF5Mi5pZCA9XCJkYXkyXCJcclxuZGF5Mi5jbGFzc05hbWUgPSBcIm5leHQtZGF5cy1kaXNwbGF5XCJcclxubGV0IGRheTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5kYXkzLmlkID1cImRheTNcIlxyXG5kYXkzLmNsYXNzTmFtZSA9IFwibmV4dC1kYXlzLWRpc3BsYXlcIlxyXG5sZXQgZGF5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmRheTQuaWQgPVwiZGF5NFwiXHJcbmRheTQuY2xhc3NOYW1lID0gXCJuZXh0LWRheXMtZGlzcGxheVwiXHJcbm5leHREYXlzV2VhdGhlci5hcHBlbmRDaGlsZChkYXkyKVxyXG5uZXh0RGF5c1dlYXRoZXIuYXBwZW5kQ2hpbGQoZGF5MylcclxubmV4dERheXNXZWF0aGVyLmFwcGVuZENoaWxkKGRheTQpXHJcblxyXG4vLyBUZW1wZXJhdHVyZSBzd2l0Y2ggdG9nZ2xlIHVuaXRzXHJcbi8vIEluaXQgdGVtcGVyYXR1cmUgdW5pdHNcclxubGV0IHRlbXBVbml0ID0gXCJtZXRyaWNcIlxyXG5sZXQgdGVtcFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRlbXBTd2l0Y2guaWQgPSAndGVtcFN3aXRjaERpdidcclxudGVtcFN3aXRjaC5pbm5lckhUTUw9IFwiPGlucHV0IGlkPSd0b2dnbGUtb24nIGNsYXNzPSd0b2dnbGUgdG9nZ2xlLWxlZnQnIG5hbWU9J3RvZ2dsZScgdmFsdWU9J2ZhbHNlJyB0eXBlPSdyYWRpbycgY2hlY2tlZD48bGFiZWwgZm9yPSd0b2dnbGUtb24nIGNsYXNzPSdidG4nPlxceEIwQzwvbGFiZWw+PGlucHV0IGlkPSd0b2dnbGUtb2ZmJyBjbGFzcz0ndG9nZ2xlIHRvZ2dsZS1yaWdodCcgbmFtZT0ndG9nZ2xlJyB2YWx1ZT0ndHJ1ZScgdHlwZT0ncmFkaW8nPjxsYWJlbCBmb3I9J3RvZ2dsZS1vZmYnIGNsYXNzPSdidG4nPlxceEIwRjwvbGFiZWw+XCJcclxuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBTd2l0Y2gpXHJcbmxldCBjaGVja2VkVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtb24nKVxyXG50ZW1wU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgaWYoY2hlY2tlZFRlbXAuY2hlY2tlZCl7XHJcbiAgICAgICAgdGVtcFVuaXQgPSBcIm1ldHJpY1wiXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgdGVtcFVuaXQgPSBcImltcGVyaWFsXCJcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxuLy8gVG9kYXkncyB3ZWF0aGVyIGRpc3BsYXlcclxuZnVuY3Rpb24gZGlzcGxheVRvZGF5c1dlYXRoZXIobG9jYXRpb24sZGF0YSx1bml0cykge1xyXG4gICAgLy8gQ2xlYXJzIGRpdiBwcmlvciB0byBkaXNwbGF5aW5nIG5ldyBkYXRhXHJcbiAgICB0b2RheVdlYXRoZXIuaW5uZXJIVE1MID0gJydcclxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpe1xyXG4gICAgICAgIGxldCBub0RhdGFGb3VuZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXHJcbiAgICAgICAgbm9EYXRhRm91bmRNZXNzYWdlLmlubmVyVGV4dCA9IGRhdGEudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZChub0RhdGFGb3VuZE1lc3NhZ2UpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQmFja2dyb3VuZChkYXRhKVxyXG5cclxuICAgIC8vIExvY2F0aW9uXHJcbiAgICBsZXQgdG9kYXlXZWF0aGVyTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICB0b2RheVdlYXRoZXJMb2NhdGlvbi5pZCA9IFwibG9jYXRpb25cIlxyXG4gICAgdG9kYXlXZWF0aGVyTG9jYXRpb24uaW5uZXJUZXh0ID0gbG9jYXRpb24udG9VcHBlckNhc2UoKVxyXG4gICAgdG9kYXlXZWF0aGVyTG9jYXRpb24uc3R5bGUuZm9udFN0eWxlPSdpdGFsaWMnXHJcbiAgICBcclxuICAgIC8vIFdlYXRoZXIgdGVtcCBhbmQgd2luZHNwZWVkXHJcbiAgICBsZXQgdG9kYXlXZWF0aGVyVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGxldCB0b2RheVdlYXRoZXJXaW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpXHJcbiAgICBpZih1bml0cyA9PSBcIm1ldHJpY1wiKXtcclxuICAgICAgICB0b2RheVdlYXRoZXJUZW1wLmlubmVyVGV4dCA9IE1hdGgucm91bmQoZGF0YS50ZW1wKSArICdcXHhCMCcgKyBcIkNcIlxyXG4gICAgICAgIHRvZGF5V2VhdGhlcldpbmRTcGVlZC5pbm5lclRleHQgPSBcIldpbmQgc3BlZWQ6IFwiICsgTWF0aC5yb3VuZChkYXRhLndpbmRTcGVlZCkgK1wiIGttL2hcIlxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIHRvZGF5V2VhdGhlclRlbXAuaW5uZXJUZXh0ID0gTWF0aC5yb3VuZChkYXRhLnRlbXApICsgJ1xceEIwJyArIFwiRlwiXHJcbiAgICAgICAgdG9kYXlXZWF0aGVyV2luZFNwZWVkLmlubmVyVGV4dCA9IFwiV2luZCBzcGVlZDogXCIgKyBNYXRoLnJvdW5kKGRhdGEud2luZFNwZWVkKSArXCIgbXBoXCJcclxuICAgIH1cclxuXHJcbiAgICAvLyBXZWF0aGVyIGRlc2N0cmlwdGlvblxyXG4gICAgbGV0IHRvZGF5V2VhdGhlckRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpXHJcbiAgICB0b2RheVdlYXRoZXJEZXNjLmlubmVyVGV4dCA9IGRhdGEuZGVzY3JpcHRpb24udG9VcHBlckNhc2UoKVxyXG4gICAgXHJcbiAgICAvLyBXZWF0aGVyIGljb25cclxuICAgIGxldCB0b2RheVdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGxldCB0b2RheVdlYXRoZXJJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRvZGF5V2VhdGhlckljb25EaXYuY2xhc3NOYW1lID0gXCJ3ZWF0aGVyLWljb24tZGl2XCJcclxuICAgIHRvZGF5V2VhdGhlckljb24uY2xhc3NOYW1lID0gYHdlYXRoZXItaWNvbi0ke2RhdGEuaWNvbi5zbGljZSgwLC0xKX1gXHJcblxyXG4gICAgLy8gQ3JlYXRpbm5nIHN1YiBjb250YWluZXIgdG8gYWxsb3cgZGl2IHRvIGJlIGNlbnRlcmVkXHJcbiAgICBsZXQgdG9kYXlXZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRvZGF5V2VhdGhlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRvZGF5LXdlYXRoZXItY29udGFpbmVyXCJcclxuICAgIC8vIE9yZGVyIG9mIGFwcGVuZGluZyBET00gZWxlbWVudHNcclxuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJDb250YWluZXIpXHJcbiAgICB0b2RheVdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVyTG9jYXRpb24pXHJcbiAgICB0b2RheVdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVyVGVtcClcclxuICAgIHRvZGF5V2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJEZXNjKVxyXG4gICAgdG9kYXlXZWF0aGVySWNvbkRpdi5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJJY29uKVxyXG4gICAgdG9kYXlXZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5V2VhdGhlcldpbmRTcGVlZClcclxuICAgIHRvZGF5V2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJJY29uRGl2KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5leHREYXlzV2VhdGhlcihkYXRhLCB1bml0cyl7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAyOyBpbmRleCA8IDU7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkYXkke2luZGV4fWApXHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MPScnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZvciAoY29uc3QgZGF5IGluIGRhdGEpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkYXlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXkpXHJcbiAgICAgICAgLy8gQ2xlYXJzIGRpdiBwcmlvciB0byBkaXNwbGF5aW5nIG5ldyBkYXRhXHJcbiAgICAgICAgZGF5Qm94LmlubmVySFRNTCA9ICcnXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB3ZWF0aGVyVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JylcclxuICAgICAgICBpZih1bml0cyA9PSBcIm1ldHJpY1wiKXtcclxuICAgICAgICAgICAgd2VhdGhlclRlbXAuaW5uZXJUZXh0ID0gTWF0aC5yb3VuZChkYXRhW2RheV0ubWFpbi50ZW1wKSArICdcXHhCMCcgKyBcIkNcIlxyXG4gICAgXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICB3ZWF0aGVyVGVtcC5pbm5lclRleHQgPSBNYXRoLnJvdW5kKGRhdGFbZGF5XS5tYWluLnRlbXApICsgJ1xceEIwJyArIFwiRlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFdlYXRoZXIgaWNvblxyXG4gICAgICAgIGxldCBuZXh0RGF5c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGxldCBuZXh0RGF5c0ljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG5leHREYXlzSWNvbkRpdi5jbGFzc05hbWUgPSBcIndlYXRoZXItaWNvbi1kaXYtc21hbGxcIlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFbZGF5XSlcclxuICAgICAgICBuZXh0RGF5c0ljb24uY2xhc3NOYW1lID0gYHdlYXRoZXItaWNvbi0ke2RhdGFbZGF5XS53ZWF0aGVyWzBdLmljb24uc2xpY2UoMCwtMSl9YFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYXBwZW5kaW5nIGVsZW1lbnRzIHRvIERPTVxyXG4gICAgICAgIGRheUJveC5hcHBlbmRDaGlsZCh3ZWF0aGVyVGVtcClcclxuICAgICAgICBkYXlCb3guYXBwZW5kQ2hpbGQobmV4dERheXNJY29uRGl2KVxyXG4gICAgICAgIG5leHREYXlzSWNvbkRpdi5hcHBlbmRDaGlsZChuZXh0RGF5c0ljb24pXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgZGlzcGxheVRvZGF5c1dlYXRoZXIsIGRpc3BsYXlOZXh0RGF5c1dlYXRoZXJ9IiwiLy8gQXBpIGtleSBpcyBmcmVlIHRpZXJcclxubGV0IGFwaUtleSA9IFwiMTBiOWQzZmRiOGJkNzU3M2YzMTM3YzdlZjZlMzE3MDFcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLHVuaXRzKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9JHt1bml0c31gLHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcDtcclxuICAgICAgICBjb25zdCB3aW5kU3BlZWQgPSB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb247XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHJldHVybiB7IHRlbXAsIHdpbmRTcGVlZCwgaWNvbiwgZGVzY3JpcHRpb259XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIHJldHVybiBcIkxvY2F0aW9uIG5vdCBmb3VuZCEgUGxlYXNlIHRyeSBhZ2FpblwiXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXROZXh0RGF5c1dlYXRoZXIobG9jYXRpb24sIHVuaXRzKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPSR7dW5pdHN9YCx7bW9kZTogJ2NvcnMnfSlcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF5MiA9IGRhdGEubGlzdFswXVxyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF5MyA9IGRhdGEubGlzdFs4XVxyXG4gICAgICAgIGNvbnN0IGRheTQgPSBkYXRhLmxpc3RbMTddXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtkYXkyLCBkYXkzLCBkYXk0fVxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICByZXR1cm4gXCJMb2NhdGlvbiBub3QgZm91bmQhIFBsZWFzZSB0cnkgYWdhaW5cIlxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhLCBnZXROZXh0RGF5c1dlYXRoZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBJbmRleCBoYW5kbGVzIGV2ZW50c1xyXG5cclxuaW1wb3J0ICcuL1VJJ1xyXG5pbXBvcnQge2Rpc3BsYXlUb2RheXNXZWF0aGVyLCBkaXNwbGF5TmV4dERheXNXZWF0aGVyfSBmcm9tICcuL1VJJ1xyXG5pbXBvcnQgJy4uL3Nhc3Mvc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQge2dldFdlYXRoZXJEYXRhLCBnZXROZXh0RGF5c1dlYXRoZXJ9IGZyb20gJy4vV2VhdGhlckRhdGEnXHJcblxyXG4vLyB2YXJpYWJsZSBpbml0XHJcbmxldCB0ZW1wVW5pdCA9IFwibWV0cmljXCJcclxuXHJcbi8vIFNldCB0aXRsZSBvZiB3ZWJwYWdlIGFzIEkgaGF2ZSBubyBpZGVhIGhvdyB0byBkbyBpdCB3aXRoIHdlYnBhY2tcclxuZG9jdW1lbnQudGl0bGU9XCJXZWF0aGVyIGFwcFwiXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hGdW5jKGUpe1xyXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKS52YWx1ZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKS52YWx1ZSA9ICcnXHJcbiAgICBcclxuICAgIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLHRlbXBVbml0KS50aGVuKChkYXRhKT0+e1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5VG9kYXlzV2VhdGhlcihsb2NhdGlvbixkYXRhLHRlbXBVbml0KVxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcbiAgICBnZXROZXh0RGF5c1dlYXRoZXIobG9jYXRpb24sdGVtcFVuaXQpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheU5leHREYXlzV2VhdGhlcihkYXRhLHRlbXBVbml0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGluZygpe1xyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXdlYXRoZXInKS5pbm5lckhUTUwubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXdlYXRoZXInKS5pbm5lckhUTUw9IGA8ZGl2IGNsYXNzPVwicHJlbG9hZGVyXCIgc3R5bGU9XCJvcGFjaXR5OiAxOyBcIj5cclxuICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cInN1blwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTBweFwiIGhlaWdodD1cIjEwcHhcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDEwIDEwXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBzdHlsZT1cIm9wYWNpdHk6IDE7IG1hcmdpbi1sZWZ0OiAwcHg7IG1hcmdpbi10b3A6IDBweDtcIj5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNNi45NDIsMy44NzZjLTAuNC0wLjY5Mi0xLjE0Ni0xLjEyMy0xLjk0Ni0xLjEyM2MtMC4zOTIsMC0wLjc3OSwwLjEwNC0xLjEyMSwwLjMwMWMtMS4wNzIsMC42MTktMS40NCwxLjk5NC0wLjgyMSwzLjA2N0MzLjQ1NCw2LjgxNSw0LjIsNy4yNDUsNSw3LjI0NWMwLjM5MiwwLDAuNzc5LTAuMTA0LDEuMTIxLTAuMzAxQzYuNjQsNi42NDQsNy4wMTMsNi4xNTksNy4xNjcsNS41ODFDNy4zMjEsNSw3LjI0Myw0LjM5Niw2Ljk0MiwzLjg3NnogTTYuODgsNS41MDVDNi43NDUsNi4wMDcsNi40MjMsNi40MjcsNS45NzMsNi42ODhDNS42NzYsNi44NTgsNS4zNCw2Ljk0OCw1LDYuOTQ4Yy0wLjY5NSwwLTEuMzQzLTAuMzczLTEuNjktMC45NzVDMi43NzQsNS4wNDMsMy4wOTMsMy44NDksNC4wMjQsMy4zMTJDNC4zMiwzLjE0LDQuNjU2LDMuMDUsNC45OTYsMy4wNWMwLjY5NSwwLDEuMzQyLDAuMzc0LDEuNjksMC45NzVDNi45NDYsNC40NzYsNy4wMTUsNSw2Ljg4LDUuNTA1elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTguNzU5LDIuODI4QzguNzE4LDIuNzU3LDguNjI2LDIuNzMyLDguNTU2LDIuNzc0TDcuMzQ1LDMuNDczYy0wLjA3LDAuMDQxLTAuMDk0LDAuMTMyLTAuMDUzLDAuMjAyQzcuMzE5LDMuNzIzLDcuMzY4LDMuNzUsNy40MTksMy43NWMwLjAyNSwwLDAuMDUzLTAuMDA3LDAuMDc0LTAuMDJsMS4yMTEtMC42OTlDOC43NzQsMi45ODksOC44LDIuODk5LDguNzU5LDIuODI4elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTEuMjM4LDcuMTcxYzAuMDI3LDAuMDQ3LDAuMDc3LDAuMDc0LDAuMTI4LDAuMDc0YzAuMDI1LDAsMC4wNTEtMC4wMDgsMC4wNzQtMC4wMmwxLjIxMS0wLjY5OWMwLjA3MS0wLjA0MSwwLjA5NS0wLjEzMywwLjA1NC0wLjIwM1MyLjU3NCw2LjIyOCwyLjUwMyw2LjI2OWwtMS4yMSwwLjY5OUMxLjIyMSw3LjAwOSwxLjE5Nyw3LjEwMSwxLjIzOCw3LjE3MXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk02LjM5NiwyLjcyNmMwLjA1MiwwLDAuMTAyLTAuMDI2LDAuMTMtMC4wNzVsMC4zNDktMC42MDVDNi45MTUsMS45NzYsNi44OSwxLjg4NSw2LjgxOSwxLjg0NGMtMC4wNy0wLjA0Mi0wLjE2Mi0wLjAxNy0wLjIwMiwwLjA1NEw2LjI2OSwyLjUwM0M2LjIyOCwyLjU3NCw2LjI1MSwyLjY2Niw2LjMyMiwyLjcwNkM2LjM0NiwyLjcxOSw2LjM3MSwyLjcyNiw2LjM5NiwyLjcyNnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMy40NzIsNy4zNDdMMy4xMjMsNy45NTJjLTAuMDQxLDAuMDctMC4wMTcsMC4xNjIsMC4wNTQsMC4yMDNDMy4yLDguMTY5LDMuMjI2LDguMTc1LDMuMjUsOC4xNzVjMC4wNTIsMCwwLjEwMi0wLjAyNywwLjEyOS0wLjA3NGwwLjM0OS0wLjYwNWMwLjA0MS0wLjA3LDAuMDE3LTAuMTYtMC4wNTQtMC4yMDNDMy42MDMsNy4yNTEsMy41MTMsNy4yNzYsMy40NzIsNy4zNDd6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTMuNjAxLDIuNzI2YzAuMDI1LDAsMC4wNTEtMC4wMDcsMC4wNzQtMC4wMkMzLjc0NiwyLjY2NiwzLjc3LDIuNTc0LDMuNzI5LDIuNTAzbC0wLjM1LTAuNjA0QzMuMzM4LDEuODI4LDMuMjQ4LDEuODA0LDMuMTc3LDEuODQ0QzMuMTA2LDEuODg2LDMuMDgyLDEuOTc2LDMuMTIzLDIuMDQ3bDAuMzUsMC42MDRDMy41LDIuNywzLjU0OSwyLjcyNiwzLjYwMSwyLjcyNnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNNi4zMjEsNy4yOTJjLTAuMDcsMC4wNDMtMC4wOTQsMC4xMzMtMC4wNTQsMC4yMDNsMC4zNTEsMC42MDVjMC4wMjYsMC4wNDcsMC4wNzYsMC4wNzQsMC4xMjcsMC4wNzRjMC4wMjUsMCwwLjA1MS0wLjAwNiwwLjA3NC0wLjAyYzAuMDcyLTAuMDQxLDAuMDk2LTAuMTMzLDAuMDU1LTAuMjAzbC0wLjM1LTAuNjA1QzYuNDgzLDcuMjc2LDYuMzkzLDcuMjUzLDYuMzIxLDcuMjkyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0yLjIwMiw1LjE0NmMwLjA4MiwwLDAuMTQ5LTAuMDY1LDAuMTQ5LTAuMTQ3UzIuMjg0LDQuODUxLDIuMjAyLDQuODUxSDEuNTAzYy0wLjA4MiwwLTAuMTQ4LDAuMDY2LTAuMTQ4LDAuMTQ4czAuMDY2LDAuMTQ3LDAuMTQ4LDAuMTQ3SDIuMjAyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk04LjQ5Myw0Ljg1MUg3Ljc5NGMtMC4wODIsMC0wLjE0OCwwLjA2Ni0wLjE0OCwwLjE0OHMwLjA2NiwwLjE0NywwLjE0OCwwLjE0N2wwLDBoMC42OTljMC4wODIsMCwwLjE0OC0wLjA2NSwwLjE0OC0wLjE0N1M4LjU3NSw0Ljg1MSw4LjQ5Myw0Ljg1MUw4LjQ5Myw0Ljg1MXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNNS4xNDYsMi4yMDNWMC44MDVjMC0wLjA4Mi0wLjA2Ni0wLjE0OC0wLjE0OC0wLjE0OGMtMC4wODIsMC0wLjE0OCwwLjA2Ni0wLjE0OCwwLjE0OHYxLjM5OGMwLDAuMDgyLDAuMDY2LDAuMTQ5LDAuMTQ4LDAuMTQ5QzUuMDgsMi4zNTIsNS4xNDYsMi4yODUsNS4xNDYsMi4yMDN6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTQuODUsNy43OTZ2MS4zOTZjMCwwLjA4MiwwLjA2NiwwLjE1LDAuMTQ4LDAuMTVjMC4wODIsMCwwLjE0OC0wLjA2OCwwLjE0OC0wLjE1VjcuNzk2YzAtMC4wODItMC4wNjYtMC4xNDgtMC4xNDgtMC4xNDhDNC45MTcsNy42NDcsNC44NSw3LjcxNCw0Ljg1LDcuNzk2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0yLjY1MSwzLjQ3M0wxLjQ0LDIuNzc0QzEuMzY5LDIuNzMyLDEuMjc5LDIuNzU3LDEuMjM4LDIuODI4QzEuMTk3LDIuODk5LDEuMjIxLDIuOTg5LDEuMjkyLDMuMDMxbDEuMjEsMC42OTljMC4wMjMsMC4wMTMsMC4wNDksMC4wMiwwLjA3NCwwLjAyYzAuMDUxLDAsMC4xMDEtMC4wMjYsMC4xMjktMC4wNzVDMi43NDcsMy42MDQsMi43MjIsMy41MTQsMi42NTEsMy40NzN6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTguNzA0LDYuOTY4TDcuNDkzLDYuMjY5Yy0wLjA3LTAuMDQxLTAuMTYyLTAuMDE2LTAuMjAxLDAuMDU1Yy0wLjA0MSwwLjA3LTAuMDE4LDAuMTYyLDAuMDUzLDAuMjAzbDEuMjExLDAuNjk5YzAuMDIzLDAuMDEyLDAuMDQ5LDAuMDIsMC4wNzQsMC4wMmMwLjA1MSwwLDAuMTAyLTAuMDI3LDAuMTI5LTAuMDc0QzguOCw3LjEwMSw4Ljc3Niw3LjAwOSw4LjcwNCw2Ljk2OHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgXHJcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJjbG91ZFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTBweFwiIGhlaWdodD1cIjEwcHhcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDEwIDEwXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk04LjUyOCw1LjYyNEg4LjI0N2MtMC4wODUsMC0wLjE1Ni0wLjA2OC0wLjE1Ni0wLjE1NGMwLTAuNjk0LTAuNTYzLTEuMjU3LTEuMjU3LTEuMjU3Yy0wLjA5OCwwLTAuMTk3LDAuMDEzLTAuMywwLjAzOEM2LjQ5Myw0LjI1OSw2LjQ1LDQuMjUyLDYuNDE1LDQuMjI5QzYuMzgsNC4yMDgsNi4zNTYsNC4xNzIsNi4zNDgsNC4xMzFDNi4xMTcsMy4wMzIsNS4xMzUsMi4yMzUsNC4wMSwyLjIzNWMtMS4yNTIsMC0yLjI5NywwLjk3OS0yLjM3OSwyLjIzYy0wLjAwNCwwLjA1Ni0wLjAzOSwwLjEwOC0wLjA5MywwLjEzQzEuMDc2LDQuNzkzLDAuNzc2LDUuMjQ5LDAuNzc2LDUuNzUyYzAsMC42OTMsMC41NjQsMS4yNTcsMS4yNTcsMS4yNTdoNi40OTVjMC4zODMsMCwwLjY5NS0wLjMxLDAuNjk1LTAuNjkyUzguOTExLDUuNjI0LDguNTI4LDUuNjI0elwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJhaW5cIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcFwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgTE9PS0lORyBPVVRTSURFIEZPUiBZT1UuLi4gT05FIFNFQ1xyXG4gICAgICAgIDwvZGl2PmBcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktd2VhdGhlcicpLmlubmVySFRNTD1gPGRpdiBjbGFzcz1cInByZWxvYWRlclwiIHN0eWxlPVwib3BhY2l0eTogMTsgXCI+XHJcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJzdW5cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjEwcHhcIiBoZWlnaHQ9XCIxMHB4XCIgdmlld0JveD1cIjAgMCAxMCAxMFwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAxMCAxMFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgc3R5bGU9XCJvcGFjaXR5OiAxOyBtYXJnaW4tbGVmdDogMHB4OyBtYXJnaW4tdG9wOiAwcHg7XCI+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTYuOTQyLDMuODc2Yy0wLjQtMC42OTItMS4xNDYtMS4xMjMtMS45NDYtMS4xMjNjLTAuMzkyLDAtMC43NzksMC4xMDQtMS4xMjEsMC4zMDFjLTEuMDcyLDAuNjE5LTEuNDQsMS45OTQtMC44MjEsMy4wNjdDMy40NTQsNi44MTUsNC4yLDcuMjQ1LDUsNy4yNDVjMC4zOTIsMCwwLjc3OS0wLjEwNCwxLjEyMS0wLjMwMUM2LjY0LDYuNjQ0LDcuMDEzLDYuMTU5LDcuMTY3LDUuNTgxQzcuMzIxLDUsNy4yNDMsNC4zOTYsNi45NDIsMy44NzZ6IE02Ljg4LDUuNTA1QzYuNzQ1LDYuMDA3LDYuNDIzLDYuNDI3LDUuOTczLDYuNjg4QzUuNjc2LDYuODU4LDUuMzQsNi45NDgsNSw2Ljk0OGMtMC42OTUsMC0xLjM0My0wLjM3My0xLjY5LTAuOTc1QzIuNzc0LDUuMDQzLDMuMDkzLDMuODQ5LDQuMDI0LDMuMzEyQzQuMzIsMy4xNCw0LjY1NiwzLjA1LDQuOTk2LDMuMDVjMC42OTUsMCwxLjM0MiwwLjM3NCwxLjY5LDAuOTc1QzYuOTQ2LDQuNDc2LDcuMDE1LDUsNi44OCw1LjUwNXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk04Ljc1OSwyLjgyOEM4LjcxOCwyLjc1Nyw4LjYyNiwyLjczMiw4LjU1NiwyLjc3NEw3LjM0NSwzLjQ3M2MtMC4wNywwLjA0MS0wLjA5NCwwLjEzMi0wLjA1MywwLjIwMkM3LjMxOSwzLjcyMyw3LjM2OCwzLjc1LDcuNDE5LDMuNzVjMC4wMjUsMCwwLjA1My0wLjAwNywwLjA3NC0wLjAybDEuMjExLTAuNjk5QzguNzc0LDIuOTg5LDguOCwyLjg5OSw4Ljc1OSwyLjgyOHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0xLjIzOCw3LjE3MWMwLjAyNywwLjA0NywwLjA3NywwLjA3NCwwLjEyOCwwLjA3NGMwLjAyNSwwLDAuMDUxLTAuMDA4LDAuMDc0LTAuMDJsMS4yMTEtMC42OTljMC4wNzEtMC4wNDEsMC4wOTUtMC4xMzMsMC4wNTQtMC4yMDNTMi41NzQsNi4yMjgsMi41MDMsNi4yNjlsLTEuMjEsMC42OTlDMS4yMjEsNy4wMDksMS4xOTcsNy4xMDEsMS4yMzgsNy4xNzF6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNNi4zOTYsMi43MjZjMC4wNTIsMCwwLjEwMi0wLjAyNiwwLjEzLTAuMDc1bDAuMzQ5LTAuNjA1QzYuOTE1LDEuOTc2LDYuODksMS44ODUsNi44MTksMS44NDRjLTAuMDctMC4wNDItMC4xNjItMC4wMTctMC4yMDIsMC4wNTRMNi4yNjksMi41MDNDNi4yMjgsMi41NzQsNi4yNTEsMi42NjYsNi4zMjIsMi43MDZDNi4zNDYsMi43MTksNi4zNzEsMi43MjYsNi4zOTYsMi43MjZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTMuNDcyLDcuMzQ3TDMuMTIzLDcuOTUyYy0wLjA0MSwwLjA3LTAuMDE3LDAuMTYyLDAuMDU0LDAuMjAzQzMuMiw4LjE2OSwzLjIyNiw4LjE3NSwzLjI1LDguMTc1YzAuMDUyLDAsMC4xMDItMC4wMjcsMC4xMjktMC4wNzRsMC4zNDktMC42MDVjMC4wNDEtMC4wNywwLjAxNy0wLjE2LTAuMDU0LTAuMjAzQzMuNjAzLDcuMjUxLDMuNTEzLDcuMjc2LDMuNDcyLDcuMzQ3elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0zLjYwMSwyLjcyNmMwLjAyNSwwLDAuMDUxLTAuMDA3LDAuMDc0LTAuMDJDMy43NDYsMi42NjYsMy43NywyLjU3NCwzLjcyOSwyLjUwM2wtMC4zNS0wLjYwNEMzLjMzOCwxLjgyOCwzLjI0OCwxLjgwNCwzLjE3NywxLjg0NEMzLjEwNiwxLjg4NiwzLjA4MiwxLjk3NiwzLjEyMywyLjA0N2wwLjM1LDAuNjA0QzMuNSwyLjcsMy41NDksMi43MjYsMy42MDEsMi43MjZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTYuMzIxLDcuMjkyYy0wLjA3LDAuMDQzLTAuMDk0LDAuMTMzLTAuMDU0LDAuMjAzbDAuMzUxLDAuNjA1YzAuMDI2LDAuMDQ3LDAuMDc2LDAuMDc0LDAuMTI3LDAuMDc0YzAuMDI1LDAsMC4wNTEtMC4wMDYsMC4wNzQtMC4wMmMwLjA3Mi0wLjA0MSwwLjA5Ni0wLjEzMywwLjA1NS0wLjIwM2wtMC4zNS0wLjYwNUM2LjQ4Myw3LjI3Niw2LjM5Myw3LjI1Myw2LjMyMSw3LjI5MnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMi4yMDIsNS4xNDZjMC4wODIsMCwwLjE0OS0wLjA2NSwwLjE0OS0wLjE0N1MyLjI4NCw0Ljg1MSwyLjIwMiw0Ljg1MUgxLjUwM2MtMC4wODIsMC0wLjE0OCwwLjA2Ni0wLjE0OCwwLjE0OHMwLjA2NiwwLjE0NywwLjE0OCwwLjE0N0gyLjIwMnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNOC40OTMsNC44NTFINy43OTRjLTAuMDgyLDAtMC4xNDgsMC4wNjYtMC4xNDgsMC4xNDhzMC4wNjYsMC4xNDcsMC4xNDgsMC4xNDdsMCwwaDAuNjk5YzAuMDgyLDAsMC4xNDgtMC4wNjUsMC4xNDgtMC4xNDdTOC41NzUsNC44NTEsOC40OTMsNC44NTFMOC40OTMsNC44NTF6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTUuMTQ2LDIuMjAzVjAuODA1YzAtMC4wODItMC4wNjYtMC4xNDgtMC4xNDgtMC4xNDhjLTAuMDgyLDAtMC4xNDgsMC4wNjYtMC4xNDgsMC4xNDh2MS4zOThjMCwwLjA4MiwwLjA2NiwwLjE0OSwwLjE0OCwwLjE0OUM1LjA4LDIuMzUyLDUuMTQ2LDIuMjg1LDUuMTQ2LDIuMjAzelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk00Ljg1LDcuNzk2djEuMzk2YzAsMC4wODIsMC4wNjYsMC4xNSwwLjE0OCwwLjE1YzAuMDgyLDAsMC4xNDgtMC4wNjgsMC4xNDgtMC4xNVY3Ljc5NmMwLTAuMDgyLTAuMDY2LTAuMTQ4LTAuMTQ4LTAuMTQ4QzQuOTE3LDcuNjQ3LDQuODUsNy43MTQsNC44NSw3Ljc5NnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMi42NTEsMy40NzNMMS40NCwyLjc3NEMxLjM2OSwyLjczMiwxLjI3OSwyLjc1NywxLjIzOCwyLjgyOEMxLjE5NywyLjg5OSwxLjIyMSwyLjk4OSwxLjI5MiwzLjAzMWwxLjIxLDAuNjk5YzAuMDIzLDAuMDEzLDAuMDQ5LDAuMDIsMC4wNzQsMC4wMmMwLjA1MSwwLDAuMTAxLTAuMDI2LDAuMTI5LTAuMDc1QzIuNzQ3LDMuNjA0LDIuNzIyLDMuNTE0LDIuNjUxLDMuNDczelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk04LjcwNCw2Ljk2OEw3LjQ5Myw2LjI2OWMtMC4wNy0wLjA0MS0wLjE2Mi0wLjAxNi0wLjIwMSwwLjA1NWMtMC4wNDEsMC4wNy0wLjAxOCwwLjE2MiwwLjA1MywwLjIwM2wxLjIxMSwwLjY5OWMwLjAyMywwLjAxMiwwLjA0OSwwLjAyLDAuMDc0LDAuMDJjMC4wNTEsMCwwLjEwMi0wLjAyNywwLjEyOS0wLjA3NEM4LjgsNy4xMDEsOC43NzYsNy4wMDksOC43MDQsNi45Njh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIFxyXG4gICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiY2xvdWRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjEwcHhcIiBoZWlnaHQ9XCIxMHB4XCIgdmlld0JveD1cIjAgMCAxMCAxMFwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAxMCAxMFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNOC41MjgsNS42MjRIOC4yNDdjLTAuMDg1LDAtMC4xNTYtMC4wNjgtMC4xNTYtMC4xNTRjMC0wLjY5NC0wLjU2My0xLjI1Ny0xLjI1Ny0xLjI1N2MtMC4wOTgsMC0wLjE5NywwLjAxMy0wLjMsMC4wMzhDNi40OTMsNC4yNTksNi40NSw0LjI1Miw2LjQxNSw0LjIyOUM2LjM4LDQuMjA4LDYuMzU2LDQuMTcyLDYuMzQ4LDQuMTMxQzYuMTE3LDMuMDMyLDUuMTM1LDIuMjM1LDQuMDEsMi4yMzVjLTEuMjUyLDAtMi4yOTcsMC45NzktMi4zNzksMi4yM2MtMC4wMDQsMC4wNTYtMC4wMzksMC4xMDgtMC4wOTMsMC4xM0MxLjA3Niw0Ljc5MywwLjc3Niw1LjI0OSwwLjc3Niw1Ljc1MmMwLDAuNjkzLDAuNTY0LDEuMjU3LDEuMjU3LDEuMjU3aDYuNDk1YzAuMzgzLDAsMC42OTUtMC4zMSwwLjY5NS0wLjY5MlM4LjkxMSw1LjYyNCw4LjUyOCw1LjYyNHpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYWluXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3BcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgIExPT0tJTkcgT1VUU0lERSBGT1IgWU9VLi4uIE9ORSBTRUNcclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZvciAobGV0IGluZGV4ID0gMjsgaW5kZXggPCA1OyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRheSR7aW5kZXh9YCkuaW5uZXJIVE1MLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF5JHtpbmRleH1gKSlcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRheSR7aW5kZXh9YCkuaW5uZXJIVE1MPScnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcclxuICAgIGxvYWRpbmcoKVxyXG4gICAgc2VhcmNoRnVuYyhlKVxyXG4gICAgXHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5sZXQgdGVtcFN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZScpXHJcbnRlbXBTd2l0Y2ggPSBBcnJheS5mcm9tKHRlbXBTd2l0Y2gpXHJcblxyXG5cclxuXHJcbnRlbXBTd2l0Y2guZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZWxlbWVudC5jaGVja2VkKXtcclxuICAgICAgICAgICAgaWYoZWxlbWVudC5pZCA9PSAndG9nZ2xlLW9uJyl7XHJcbiAgICAgICAgICAgICAgICBpZih0ZW1wVW5pdCA9PSBcIm1ldHJpY1wiKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRlbXBVbml0ID0gXCJtZXRyaWNcIlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgaWYodGVtcFVuaXQgPT0gXCJpbXBlcmlhbFwiKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRlbXBVbml0ID0gXCJpbXBlcmlhbFwiXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhdGlvbj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKVxyXG4gICAgICAgIGlmKGxvY2F0aW9uKXtcclxuICAgICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbi5pbm5lclRleHRcclxuICAgICAgICAgICAgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sdGVtcFVuaXQpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9kYXlzV2VhdGhlcihsb2NhdGlvbixkYXRhLHRlbXBVbml0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBnZXROZXh0RGF5c1dlYXRoZXIobG9jYXRpb24sdGVtcFVuaXQpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmV4dERheXNXZWF0aGVyKGRhdGEsdGVtcFVuaXQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wVW5pdFxyXG4gICAgfSlcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
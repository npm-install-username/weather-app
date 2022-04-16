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

    let todayWeatherLocation = document.createElement('h2')
    todayWeatherLocation.id = "location"
    todayWeatherLocation.innerText = location.toUpperCase()
    todayWeather.appendChild(todayWeatherLocation)

    let todayWeatherTemp = document.createElement('h4')
    let todayWeatherWindSpeed = document.createElement('h5')
    if(units == "metric"){
        todayWeatherTemp.innerText = data.temp + '\xB0' + "C"
        todayWeatherWindSpeed.innerText = "Wind speed: " + data.windSpeed +" km/h"
    } else{
        todayWeatherTemp.innerText = data.temp + '\xB0' + "F"
        todayWeatherWindSpeed.innerText = "Wind speed: " + data.windSpeed +" mph"
    }
    
    todayWeather.appendChild(todayWeatherTemp)



    let todayWeatherDesc = document.createElement('h5')
    todayWeatherDesc.innerText = data.description
    todayWeather.appendChild(todayWeatherDesc)

    let todayWeatherIcon = document.createElement('img')
    let todayWeatherIconDiv = document.createElement('div')
    todayWeatherIconDiv.id = "weather-icon-div"
    todayWeather.appendChild(todayWeatherIconDiv)
    todayWeatherIconDiv.appendChild(todayWeatherIcon)
    todayWeatherIcon.className = `weather-icon-${data.icon.slice(0,-1)}`
    //todayWeatherIcon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`
    // todayWeather.appendChild(todayWeatherIcon)
    todayWeather.appendChild(todayWeatherWindSpeed)

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
            weatherTemp.innerText = data[day].main.temp + '\xB0' + "C"
    
        } else{
            weatherTemp.innerText = data[day].main.temp + '\xB0' + "F"
        }
        dayBox.appendChild(weatherTemp)
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUN0QixRQUFRLDREQUFzQjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBYztBQUMxQixnQkFBZ0IsMERBQW9CO0FBQ3BDLGFBQWE7QUFDYixZQUFZLGlFQUFrQjtBQUM5QixnQkFBZ0IsNERBQXNCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Nhc3Mvc3R5bGVzLnNjc3M/NTcxZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qYXZhc2NyaXB0L0JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvamF2YXNjcmlwdC9VSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qYXZhc2NyaXB0L1dlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJmdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kKGRhdGEpe1xyXG4gICAgbGV0IGljb25Db2RlID0gZGF0YS5pY29uXHJcbiAgICBsZXQgaW1hZ2VDb2RlID0gaWNvbkNvZGUuc2xpY2UoMCwtMSlcclxuICAgIFxyXG4gICAgbGV0IGNvbnRlbnRDbGFzc0luZGV4ID0gJ2NvbnRlbnQtJyArIGltYWdlQ29kZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuY2xhc3NOYW1lPSBjb250ZW50Q2xhc3NJbmRleCA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYW5nZUJhY2tncm91bmQiLCJpbXBvcnQgY2hhbmdlQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQnXHJcblxyXG5cclxuLy8gQ3JlYXRlIG1haW4gY29udGFpbmVyc1xyXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29udGFpbmVyLmNsYXNzTmFtZT1cImNvbnRhaW5lclwiXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnRlbnQuaWQ9J2NvbnRlbnQnXHJcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC0wMScpXHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxyXG5cclxuLy8gQ3JlYXRlIGFwcCBjb250YWluZXJcclxubGV0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmFwcENvbnRhaW5lci5pZCA9ICdhcHAtY29udGFpbmVyJ1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGFwcENvbnRhaW5lcilcclxuXHJcblxyXG4vLyBDcmVhdGUgc2VhcmNoIGJhciBjb21wb25lbnRzIChzZWFyY2ggYmFyIGFuZCBidXR0b24pXHJcbmxldCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbnNlYXJjaEZvcm0uaWQgPSBcImZvcm1cIjtcclxuXHJcbmFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKVxyXG5sZXQgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5zZWFyY2hCYXIudHlwZSA9IFwidGV4dFwiXHJcbnNlYXJjaEJhci5pZCA9IFwic2VhcmNoLWJhclwiXHJcbnNlYXJjaEJhci5uYW1lID0gXCJzZWFyY2gtYmFyXCJcclxuc2VhcmNoQmFyLnBsYWNlaG9sZGVyID0gXCJFbnRlciBhIGNvdW50cnkgb3IgY2l0eS4uLlwiXHJcbnNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKVxyXG5sZXQgc2VhcmNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuc2VhcmNoQnRuLmlubmVyVGV4dCA9IFwiU2VhcmNoXCJcclxuc2VhcmNoQnRuLmlkID0gXCJzZWFyY2gtYmFyLWJ0blwiXHJcbnNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKVxyXG5cclxuLy8gV2VhdGhlciBEaXNwbGF5IHNlY3Rpb25cclxubGV0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5kaXNwbGF5LmlkID0gJ2Rpc3BsYXknXHJcbmFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5KVxyXG5sZXQgdG9kYXlXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxudG9kYXlXZWF0aGVyLmlkID0gJ3RvZGF5LXdlYXRoZXInXHJcbnRvZGF5V2VhdGhlci5jbGFzc05hbWUgPSAnZGlzcGxheS1ib3gnXHJcbmxldCBuZXh0RGF5c1dlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5uZXh0RGF5c1dlYXRoZXIuaWQgPSAnbmV4dC1kYXlzLXdlYXRoZXInXHJcbm5leHREYXlzV2VhdGhlci5jbGFzc05hbWUgPSAnZGlzcGxheS1ib3gnXHJcbmRpc3BsYXkuYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVyKVxyXG5kaXNwbGF5LmFwcGVuZENoaWxkKG5leHREYXlzV2VhdGhlcilcclxuXHJcbi8vIG5leHQgZGF5cyBzdWIgc2VjdGlvblxyXG5sZXQgZGF5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmRheTIuaWQgPVwiZGF5MlwiXHJcbmRheTIuY2xhc3NOYW1lID0gXCJuZXh0LWRheXMtZGlzcGxheVwiXHJcbmxldCBkYXkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuZGF5My5pZCA9XCJkYXkzXCJcclxuZGF5My5jbGFzc05hbWUgPSBcIm5leHQtZGF5cy1kaXNwbGF5XCJcclxubGV0IGRheTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5kYXk0LmlkID1cImRheTRcIlxyXG5kYXk0LmNsYXNzTmFtZSA9IFwibmV4dC1kYXlzLWRpc3BsYXlcIlxyXG5uZXh0RGF5c1dlYXRoZXIuYXBwZW5kQ2hpbGQoZGF5MilcclxubmV4dERheXNXZWF0aGVyLmFwcGVuZENoaWxkKGRheTMpXHJcbm5leHREYXlzV2VhdGhlci5hcHBlbmRDaGlsZChkYXk0KVxyXG5cclxuLy8gVGVtcGVyYXR1cmUgc3dpdGNoIHRvZ2dsZSB1bml0c1xyXG4vLyBJbml0IHRlbXBlcmF0dXJlIHVuaXRzXHJcbmxldCB0ZW1wVW5pdCA9IFwibWV0cmljXCJcclxubGV0IHRlbXBTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50ZW1wU3dpdGNoLmlkID0gJ3RlbXBTd2l0Y2hEaXYnXHJcbnRlbXBTd2l0Y2guaW5uZXJIVE1MPSBcIjxpbnB1dCBpZD0ndG9nZ2xlLW9uJyBjbGFzcz0ndG9nZ2xlIHRvZ2dsZS1sZWZ0JyBuYW1lPSd0b2dnbGUnIHZhbHVlPSdmYWxzZScgdHlwZT0ncmFkaW8nIGNoZWNrZWQ+PGxhYmVsIGZvcj0ndG9nZ2xlLW9uJyBjbGFzcz0nYnRuJz5cXHhCMEM8L2xhYmVsPjxpbnB1dCBpZD0ndG9nZ2xlLW9mZicgY2xhc3M9J3RvZ2dsZSB0b2dnbGUtcmlnaHQnIG5hbWU9J3RvZ2dsZScgdmFsdWU9J3RydWUnIHR5cGU9J3JhZGlvJz48bGFiZWwgZm9yPSd0b2dnbGUtb2ZmJyBjbGFzcz0nYnRuJz5cXHhCMEY8L2xhYmVsPlwiXHJcbmFwcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wU3dpdGNoKVxyXG5sZXQgY2hlY2tlZFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLW9uJylcclxudGVtcFN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgIGlmKGNoZWNrZWRUZW1wLmNoZWNrZWQpe1xyXG4gICAgICAgIHRlbXBVbml0ID0gXCJtZXRyaWNcIlxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIHRlbXBVbml0ID0gXCJpbXBlcmlhbFwiXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbi8vIFRvZGF5J3Mgd2VhdGhlciBkaXNwbGF5XHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RheXNXZWF0aGVyKGxvY2F0aW9uLGRhdGEsdW5pdHMpIHtcclxuICAgIC8vIENsZWFycyBkaXYgcHJpb3IgdG8gZGlzcGxheWluZyBuZXcgZGF0YVxyXG4gICAgdG9kYXlXZWF0aGVyLmlubmVySFRNTCA9ICcnXHJcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKXtcclxuICAgICAgICBsZXQgbm9EYXRhRm91bmRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxyXG4gICAgICAgIG5vRGF0YUZvdW5kTWVzc2FnZS5pbm5lclRleHQgPSBkYXRhLnRvVXBwZXJDYXNlKClcclxuICAgICAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQobm9EYXRhRm91bmRNZXNzYWdlKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJhY2tncm91bmQoZGF0YSlcclxuXHJcbiAgICBsZXQgdG9kYXlXZWF0aGVyTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICB0b2RheVdlYXRoZXJMb2NhdGlvbi5pZCA9IFwibG9jYXRpb25cIlxyXG4gICAgdG9kYXlXZWF0aGVyTG9jYXRpb24uaW5uZXJUZXh0ID0gbG9jYXRpb24udG9VcHBlckNhc2UoKVxyXG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKHRvZGF5V2VhdGhlckxvY2F0aW9uKVxyXG5cclxuICAgIGxldCB0b2RheVdlYXRoZXJUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxyXG4gICAgbGV0IHRvZGF5V2VhdGhlcldpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JylcclxuICAgIGlmKHVuaXRzID09IFwibWV0cmljXCIpe1xyXG4gICAgICAgIHRvZGF5V2VhdGhlclRlbXAuaW5uZXJUZXh0ID0gZGF0YS50ZW1wICsgJ1xceEIwJyArIFwiQ1wiXHJcbiAgICAgICAgdG9kYXlXZWF0aGVyV2luZFNwZWVkLmlubmVyVGV4dCA9IFwiV2luZCBzcGVlZDogXCIgKyBkYXRhLndpbmRTcGVlZCArXCIga20vaFwiXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgdG9kYXlXZWF0aGVyVGVtcC5pbm5lclRleHQgPSBkYXRhLnRlbXAgKyAnXFx4QjAnICsgXCJGXCJcclxuICAgICAgICB0b2RheVdlYXRoZXJXaW5kU3BlZWQuaW5uZXJUZXh0ID0gXCJXaW5kIHNwZWVkOiBcIiArIGRhdGEud2luZFNwZWVkICtcIiBtcGhcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVyVGVtcClcclxuXHJcblxyXG5cclxuICAgIGxldCB0b2RheVdlYXRoZXJEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKVxyXG4gICAgdG9kYXlXZWF0aGVyRGVzYy5pbm5lclRleHQgPSBkYXRhLmRlc2NyaXB0aW9uXHJcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVyRGVzYylcclxuXHJcbiAgICBsZXQgdG9kYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBsZXQgdG9kYXlXZWF0aGVySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0b2RheVdlYXRoZXJJY29uRGl2LmlkID0gXCJ3ZWF0aGVyLWljb24tZGl2XCJcclxuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJJY29uRGl2KVxyXG4gICAgdG9kYXlXZWF0aGVySWNvbkRpdi5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJJY29uKVxyXG4gICAgdG9kYXlXZWF0aGVySWNvbi5jbGFzc05hbWUgPSBgd2VhdGhlci1pY29uLSR7ZGF0YS5pY29uLnNsaWNlKDAsLTEpfWBcclxuICAgIC8vdG9kYXlXZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmljb259QDJ4LnBuZ2BcclxuICAgIC8vIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJJY29uKVxyXG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKHRvZGF5V2VhdGhlcldpbmRTcGVlZClcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlOZXh0RGF5c1dlYXRoZXIoZGF0YSwgdW5pdHMpe1xyXG5cclxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpe1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMjsgaW5kZXggPCA1OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF5JHtpbmRleH1gKVxyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTD0nJ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IGRheSBpbiBkYXRhKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF5Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF5KVxyXG4gICAgICAgIC8vIENsZWFycyBkaXYgcHJpb3IgdG8gZGlzcGxheWluZyBuZXcgZGF0YVxyXG4gICAgICAgIGRheUJveC5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgd2VhdGhlclRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpXHJcbiAgICAgICAgaWYodW5pdHMgPT0gXCJtZXRyaWNcIil7XHJcbiAgICAgICAgICAgIHdlYXRoZXJUZW1wLmlubmVyVGV4dCA9IGRhdGFbZGF5XS5tYWluLnRlbXAgKyAnXFx4QjAnICsgXCJDXCJcclxuICAgIFxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgd2VhdGhlclRlbXAuaW5uZXJUZXh0ID0gZGF0YVtkYXldLm1haW4udGVtcCArICdcXHhCMCcgKyBcIkZcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXlCb3guYXBwZW5kQ2hpbGQod2VhdGhlclRlbXApXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlUb2RheXNXZWF0aGVyLCBkaXNwbGF5TmV4dERheXNXZWF0aGVyfSIsIi8vIEFwaSBrZXkgaXMgZnJlZSB0aWVyXHJcbmxldCBhcGlLZXkgPSBcIjEwYjlkM2ZkYjhiZDc1NzNmMzEzN2M3ZWY2ZTMxNzAxXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbix1bml0cyl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPSR7dW5pdHN9YCx7bW9kZTogJ2NvcnMnfSlcclxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXA7XHJcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkID0gd2VhdGhlckRhdGEud2luZC5zcGVlZDtcclxuICAgICAgICBjb25zdCBpY29uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5pY29uO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICByZXR1cm4geyB0ZW1wLCB3aW5kU3BlZWQsIGljb24sIGRlc2NyaXB0aW9ufVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICByZXR1cm4gXCJMb2NhdGlvbiBub3QgZm91bmQhIFBsZWFzZSB0cnkgYWdhaW5cIlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TmV4dERheXNXZWF0aGVyKGxvY2F0aW9uLCB1bml0cyl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz0ke3VuaXRzfWAse21vZGU6ICdjb3JzJ30pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRheTIgPSBkYXRhLmxpc3RbMF1cclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRheTMgPSBkYXRhLmxpc3RbOF1cclxuICAgICAgICBjb25zdCBkYXk0ID0gZGF0YS5saXN0WzE3XVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7ZGF5MiwgZGF5MywgZGF5NH1cclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIFwiTG9jYXRpb24gbm90IGZvdW5kISBQbGVhc2UgdHJ5IGFnYWluXCJcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0TmV4dERheXNXZWF0aGVyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gSW5kZXggaGFuZGxlcyBldmVudHNcclxuXHJcbmltcG9ydCAnLi9VSSdcclxuaW1wb3J0IHtkaXNwbGF5VG9kYXlzV2VhdGhlciwgZGlzcGxheU5leHREYXlzV2VhdGhlcn0gZnJvbSAnLi9VSSdcclxuaW1wb3J0ICcuLi9zYXNzL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IHtnZXRXZWF0aGVyRGF0YSwgZ2V0TmV4dERheXNXZWF0aGVyfSBmcm9tICcuL1dlYXRoZXJEYXRhJ1xyXG5cclxuLy8gdmFyaWFibGUgaW5pdFxyXG5sZXQgdGVtcFVuaXQgPSBcIm1ldHJpY1wiXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hGdW5jKGUpe1xyXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKS52YWx1ZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKS52YWx1ZSA9ICcnXHJcbiAgICBcclxuICAgIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLHRlbXBVbml0KS50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIGRpc3BsYXlUb2RheXNXZWF0aGVyKGxvY2F0aW9uLGRhdGEsdGVtcFVuaXQpXHJcbiAgICB9KVxyXG4gICAgZ2V0TmV4dERheXNXZWF0aGVyKGxvY2F0aW9uLHRlbXBVbml0KS50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIGRpc3BsYXlOZXh0RGF5c1dlYXRoZXIoZGF0YSx0ZW1wVW5pdClcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcblxyXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzZWFyY2hGdW5jKVxyXG5cclxuXHJcblxyXG5sZXQgdGVtcFN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZScpXHJcbnRlbXBTd2l0Y2ggPSBBcnJheS5mcm9tKHRlbXBTd2l0Y2gpXHJcblxyXG5cclxuXHJcbnRlbXBTd2l0Y2guZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZWxlbWVudC5jaGVja2VkKXtcclxuICAgICAgICAgICAgaWYoZWxlbWVudC5pZCA9PSAndG9nZ2xlLW9uJyl7XHJcbiAgICAgICAgICAgICAgICBpZih0ZW1wVW5pdCA9PSBcIm1ldHJpY1wiKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRlbXBVbml0ID0gXCJtZXRyaWNcIlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgaWYodGVtcFVuaXQgPT0gXCJpbXBlcmlhbFwiKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRlbXBVbml0ID0gXCJpbXBlcmlhbFwiXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhdGlvbj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKVxyXG4gICAgICAgIGlmKGxvY2F0aW9uKXtcclxuICAgICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbi5pbm5lclRleHRcclxuICAgICAgICAgICAgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sdGVtcFVuaXQpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9kYXlzV2VhdGhlcihsb2NhdGlvbixkYXRhLHRlbXBVbml0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBnZXROZXh0RGF5c1dlYXRoZXIobG9jYXRpb24sdGVtcFVuaXQpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmV4dERheXNXZWF0aGVyKGRhdGEsdGVtcFVuaXQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wVW5pdFxyXG4gICAgfSlcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
    console.log(imageCode);
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
    todayWeatherIcon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`
    todayWeather.appendChild(todayWeatherIcon)
    todayWeather.appendChild(todayWeatherWindSpeed)

}

function displayNextDaysWeather(data, units){
    // nextDaysWeather.innerHTML = ''
    // if (typeof data === 'string'){

    //     return
    // }
    console.log(units)
    console.log(data)
    for (let index = 0; index < data.length; index++) {
        let currentDay = `day${index}`
        console.log(currentDay)
       
        // const day = data[index];
        // const dayBox = document.getElementById(`day${index+1}`)
        // let weatherTemp = document.createElement('h5')
        // if(units == "metric"){
        //     weatherTemp.innerText = day.main.temp + '\xB0' + "C"
        //     console.log(weatherTemp.innerText.value)
        // } else{
        //     weatherTemp.innerText = day.main.temp + '\xB0' + "F"
        // }
        // dayBox.appendChild(weatherTemp)
        
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
        console.log(weatherData)
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
        console.log(data)
        const day1 = data.list[0]
        console.log(day1)
        const day2 = data.list[8]
        const day3 = data.list[17]
        
        return {day1, day2, day3}
        
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

let searchBtn = document.getElementById("search-bar-btn")
searchBtn.addEventListener('click',()=>{
    let location = document.getElementById('search-bar').value
    document.getElementById('search-bar').value = ''
    
    ;(0,_WeatherData__WEBPACK_IMPORTED_MODULE_2__.getWeatherData)(location,tempUnit).then((data)=>{
        console.log(data)
        ;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.displayTodaysWeather)(location,data,tempUnit)
    })
    ;(0,_WeatherData__WEBPACK_IMPORTED_MODULE_2__.getNextDaysWeather)(location,tempUnit).then((data)=>{
        console.log(data)
        ;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.displayNextDaysWeather)(data,tempUnit)
        
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
            ;(0,_WeatherData__WEBPACK_IMPORTED_MODULE_2__.getWeatherData)(location,tempUnit).then((data)=>{
                ;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.displayTodaysWeather)(location,data,tempUnit)
            })
        }
        return tempUnit
    })
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQWM7QUFDMUIsZ0JBQWdCLDBEQUFvQjtBQUNwQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zYXNzL3N0eWxlcy5zY3NzPzU3MWQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvamF2YXNjcmlwdC9CYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2phdmFzY3JpcHQvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvamF2YXNjcmlwdC9XZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2phdmFzY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZChkYXRhKXtcclxuICAgIGxldCBpY29uQ29kZSA9IGRhdGEuaWNvblxyXG4gICAgbGV0IGltYWdlQ29kZSA9IGljb25Db2RlLnNsaWNlKDAsLTEpXHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZUNvZGUpO1xyXG4gICAgbGV0IGNvbnRlbnRDbGFzc0luZGV4ID0gJ2NvbnRlbnQtJyArIGltYWdlQ29kZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuY2xhc3NOYW1lPSBjb250ZW50Q2xhc3NJbmRleCA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYW5nZUJhY2tncm91bmQiLCJpbXBvcnQgY2hhbmdlQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQnXHJcblxyXG5cclxuLy8gQ3JlYXRlIG1haW4gY29udGFpbmVyc1xyXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29udGFpbmVyLmNsYXNzTmFtZT1cImNvbnRhaW5lclwiXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnRlbnQuaWQ9J2NvbnRlbnQnXHJcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC0wMScpXHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxyXG5cclxuLy8gQ3JlYXRlIGFwcCBjb250YWluZXJcclxubGV0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmFwcENvbnRhaW5lci5pZCA9ICdhcHAtY29udGFpbmVyJ1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGFwcENvbnRhaW5lcilcclxuXHJcblxyXG4vLyBDcmVhdGUgc2VhcmNoIGJhciBjb21wb25lbnRzIChzZWFyY2ggYmFyIGFuZCBidXR0b24pXHJcbmxldCBzZWFyY2hCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5zZWFyY2hCYXJEaXYuaWQgPSBcInNlYXJjaC1iYXItZGl2XCJcclxuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJhckRpdilcclxubGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcclxuc2VhcmNoQmFyLnR5cGUgPSBcInRleHRcIlxyXG5zZWFyY2hCYXIuaWQgPSBcInNlYXJjaC1iYXJcIlxyXG5zZWFyY2hCYXIubmFtZSA9IFwic2VhcmNoLWJhclwiXHJcbnNlYXJjaEJhci5wbGFjZWhvbGRlciA9IFwiRW50ZXIgYSBjb3VudHJ5IG9yIGNpdHkuLi5cIlxyXG5zZWFyY2hCYXJEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKVxyXG5sZXQgc2VhcmNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuc2VhcmNoQnRuLmlubmVyVGV4dCA9IFwiU2VhcmNoXCJcclxuc2VhcmNoQnRuLmlkID0gXCJzZWFyY2gtYmFyLWJ0blwiXHJcbnNlYXJjaEJhckRpdi5hcHBlbmRDaGlsZChzZWFyY2hCdG4pXHJcblxyXG4vLyBXZWF0aGVyIERpc3BsYXkgc2VjdGlvblxyXG5sZXQgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmRpc3BsYXkuaWQgPSAnZGlzcGxheSdcclxuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXkpXHJcbmxldCB0b2RheVdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50b2RheVdlYXRoZXIuaWQgPSAndG9kYXktd2VhdGhlcidcclxudG9kYXlXZWF0aGVyLmNsYXNzTmFtZSA9ICdkaXNwbGF5LWJveCdcclxubGV0IG5leHREYXlzV2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbm5leHREYXlzV2VhdGhlci5pZCA9ICduZXh0LWRheXMtd2VhdGhlcidcclxubmV4dERheXNXZWF0aGVyLmNsYXNzTmFtZSA9ICdkaXNwbGF5LWJveCdcclxuZGlzcGxheS5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXIpXHJcbmRpc3BsYXkuYXBwZW5kQ2hpbGQobmV4dERheXNXZWF0aGVyKVxyXG5cclxuLy8gbmV4dCBkYXlzIHN1YiBzZWN0aW9uXHJcbmxldCBkYXkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuZGF5Mi5pZCA9XCJkYXkyXCJcclxuZGF5Mi5jbGFzc05hbWUgPSBcIm5leHQtZGF5cy1kaXNwbGF5XCJcclxubGV0IGRheTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5kYXkzLmlkID1cImRheTNcIlxyXG5kYXkzLmNsYXNzTmFtZSA9IFwibmV4dC1kYXlzLWRpc3BsYXlcIlxyXG5sZXQgZGF5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmRheTQuaWQgPVwiZGF5NFwiXHJcbmRheTQuY2xhc3NOYW1lID0gXCJuZXh0LWRheXMtZGlzcGxheVwiXHJcbm5leHREYXlzV2VhdGhlci5hcHBlbmRDaGlsZChkYXkyKVxyXG5uZXh0RGF5c1dlYXRoZXIuYXBwZW5kQ2hpbGQoZGF5MylcclxubmV4dERheXNXZWF0aGVyLmFwcGVuZENoaWxkKGRheTQpXHJcblxyXG4vLyBUZW1wZXJhdHVyZSBzd2l0Y2ggdG9nZ2xlIHVuaXRzXHJcbi8vIEluaXQgdGVtcGVyYXR1cmUgdW5pdHNcclxubGV0IHRlbXBVbml0ID0gXCJtZXRyaWNcIlxyXG5sZXQgdGVtcFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRlbXBTd2l0Y2guaWQgPSAndGVtcFN3aXRjaERpdidcclxudGVtcFN3aXRjaC5pbm5lckhUTUw9IFwiPGlucHV0IGlkPSd0b2dnbGUtb24nIGNsYXNzPSd0b2dnbGUgdG9nZ2xlLWxlZnQnIG5hbWU9J3RvZ2dsZScgdmFsdWU9J2ZhbHNlJyB0eXBlPSdyYWRpbycgY2hlY2tlZD48bGFiZWwgZm9yPSd0b2dnbGUtb24nIGNsYXNzPSdidG4nPlxceEIwQzwvbGFiZWw+PGlucHV0IGlkPSd0b2dnbGUtb2ZmJyBjbGFzcz0ndG9nZ2xlIHRvZ2dsZS1yaWdodCcgbmFtZT0ndG9nZ2xlJyB2YWx1ZT0ndHJ1ZScgdHlwZT0ncmFkaW8nPjxsYWJlbCBmb3I9J3RvZ2dsZS1vZmYnIGNsYXNzPSdidG4nPlxceEIwRjwvbGFiZWw+XCJcclxuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBTd2l0Y2gpXHJcbmxldCBjaGVja2VkVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtb24nKVxyXG50ZW1wU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgaWYoY2hlY2tlZFRlbXAuY2hlY2tlZCl7XHJcbiAgICAgICAgdGVtcFVuaXQgPSBcIm1ldHJpY1wiXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgdGVtcFVuaXQgPSBcImltcGVyaWFsXCJcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxuLy8gVG9kYXkncyB3ZWF0aGVyIGRpc3BsYXlcclxuZnVuY3Rpb24gZGlzcGxheVRvZGF5c1dlYXRoZXIobG9jYXRpb24sZGF0YSx1bml0cykge1xyXG4gICAgLy8gQ2xlYXJzIGRpdiBwcmlvciB0byBkaXNwbGF5aW5nIG5ldyBkYXRhXHJcbiAgICB0b2RheVdlYXRoZXIuaW5uZXJIVE1MID0gJydcclxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpe1xyXG4gICAgICAgIGxldCBub0RhdGFGb3VuZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXHJcbiAgICAgICAgbm9EYXRhRm91bmRNZXNzYWdlLmlubmVyVGV4dCA9IGRhdGEudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZChub0RhdGFGb3VuZE1lc3NhZ2UpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQmFja2dyb3VuZChkYXRhKVxyXG5cclxuICAgIGxldCB0b2RheVdlYXRoZXJMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIHRvZGF5V2VhdGhlckxvY2F0aW9uLmlkID0gXCJsb2NhdGlvblwiXHJcbiAgICB0b2RheVdlYXRoZXJMb2NhdGlvbi5pbm5lclRleHQgPSBsb2NhdGlvbi50b1VwcGVyQ2FzZSgpXHJcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVyTG9jYXRpb24pXHJcblxyXG4gICAgbGV0IHRvZGF5V2VhdGhlclRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXHJcbiAgICBsZXQgdG9kYXlXZWF0aGVyV2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKVxyXG4gICAgaWYodW5pdHMgPT0gXCJtZXRyaWNcIil7XHJcbiAgICAgICAgdG9kYXlXZWF0aGVyVGVtcC5pbm5lclRleHQgPSBkYXRhLnRlbXAgKyAnXFx4QjAnICsgXCJDXCJcclxuICAgICAgICB0b2RheVdlYXRoZXJXaW5kU3BlZWQuaW5uZXJUZXh0ID0gXCJXaW5kIHNwZWVkOiBcIiArIGRhdGEud2luZFNwZWVkICtcIiBrbS9oXCJcclxuICAgIH0gZWxzZXtcclxuICAgICAgICB0b2RheVdlYXRoZXJUZW1wLmlubmVyVGV4dCA9IGRhdGEudGVtcCArICdcXHhCMCcgKyBcIkZcIlxyXG4gICAgICAgIHRvZGF5V2VhdGhlcldpbmRTcGVlZC5pbm5lclRleHQgPSBcIldpbmQgc3BlZWQ6IFwiICsgZGF0YS53aW5kU3BlZWQgK1wiIG1waFwiXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJUZW1wKVxyXG5cclxuXHJcblxyXG4gICAgbGV0IHRvZGF5V2VhdGhlckRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpXHJcbiAgICB0b2RheVdlYXRoZXJEZXNjLmlubmVyVGV4dCA9IGRhdGEuZGVzY3JpcHRpb25cclxuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJEZXNjKVxyXG5cclxuICAgIGxldCB0b2RheVdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIHRvZGF5V2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5pY29ufUAyeC5wbmdgXHJcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQodG9kYXlXZWF0aGVySWNvbilcclxuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZCh0b2RheVdlYXRoZXJXaW5kU3BlZWQpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TmV4dERheXNXZWF0aGVyKGRhdGEsIHVuaXRzKXtcclxuICAgIC8vIG5leHREYXlzV2VhdGhlci5pbm5lckhUTUwgPSAnJ1xyXG4gICAgLy8gaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyl7XHJcblxyXG4gICAgLy8gICAgIHJldHVyblxyXG4gICAgLy8gfVxyXG4gICAgY29uc29sZS5sb2codW5pdHMpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREYXkgPSBgZGF5JHtpbmRleH1gXHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudERheSlcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnN0IGRheSA9IGRhdGFbaW5kZXhdO1xyXG4gICAgICAgIC8vIGNvbnN0IGRheUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkYXkke2luZGV4KzF9YClcclxuICAgICAgICAvLyBsZXQgd2VhdGhlclRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpXHJcbiAgICAgICAgLy8gaWYodW5pdHMgPT0gXCJtZXRyaWNcIil7XHJcbiAgICAgICAgLy8gICAgIHdlYXRoZXJUZW1wLmlubmVyVGV4dCA9IGRheS5tYWluLnRlbXAgKyAnXFx4QjAnICsgXCJDXCJcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cod2VhdGhlclRlbXAuaW5uZXJUZXh0LnZhbHVlKVxyXG4gICAgICAgIC8vIH0gZWxzZXtcclxuICAgICAgICAvLyAgICAgd2VhdGhlclRlbXAuaW5uZXJUZXh0ID0gZGF5Lm1haW4udGVtcCArICdcXHhCMCcgKyBcIkZcIlxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBkYXlCb3guYXBwZW5kQ2hpbGQod2VhdGhlclRlbXApXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgZGlzcGxheVRvZGF5c1dlYXRoZXIsIGRpc3BsYXlOZXh0RGF5c1dlYXRoZXJ9IiwiLy8gQXBpIGtleSBpcyBmcmVlIHRpZXJcclxubGV0IGFwaUtleSA9IFwiMTBiOWQzZmRiOGJkNzU3M2YzMTM3YzdlZjZlMzE3MDFcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLHVuaXRzKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9JHt1bml0c31gLHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcDtcclxuICAgICAgICBjb25zdCB3aW5kU3BlZWQgPSB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb247XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHJldHVybiB7IHRlbXAsIHdpbmRTcGVlZCwgaWNvbiwgZGVzY3JpcHRpb259XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIHJldHVybiBcIkxvY2F0aW9uIG5vdCBmb3VuZCEgUGxlYXNlIHRyeSBhZ2FpblwiXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXROZXh0RGF5c1dlYXRoZXIobG9jYXRpb24sIHVuaXRzKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPSR7dW5pdHN9YCx7bW9kZTogJ2NvcnMnfSlcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBjb25zdCBkYXkxID0gZGF0YS5saXN0WzBdXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF5MSlcclxuICAgICAgICBjb25zdCBkYXkyID0gZGF0YS5saXN0WzhdXHJcbiAgICAgICAgY29uc3QgZGF5MyA9IGRhdGEubGlzdFsxN11cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge2RheTEsIGRheTIsIGRheTN9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIHJldHVybiBcIkxvY2F0aW9uIG5vdCBmb3VuZCEgUGxlYXNlIHRyeSBhZ2FpblwiXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgZ2V0V2VhdGhlckRhdGEsIGdldE5leHREYXlzV2VhdGhlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEluZGV4IGhhbmRsZXMgZXZlbnRzXHJcblxyXG5pbXBvcnQgJy4vVUknXHJcbmltcG9ydCB7ZGlzcGxheVRvZGF5c1dlYXRoZXIsIGRpc3BsYXlOZXh0RGF5c1dlYXRoZXJ9IGZyb20gJy4vVUknXHJcbmltcG9ydCAnLi4vc2Fzcy9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCB7Z2V0V2VhdGhlckRhdGEsIGdldE5leHREYXlzV2VhdGhlcn0gZnJvbSAnLi9XZWF0aGVyRGF0YSdcclxuXHJcbi8vIHZhcmlhYmxlIGluaXRcclxubGV0IHRlbXBVbml0ID0gXCJtZXRyaWNcIlxyXG5cclxubGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJhci1idG5cIilcclxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKS52YWx1ZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXInKS52YWx1ZSA9ICcnXHJcbiAgICBcclxuICAgIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLHRlbXBVbml0KS50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgZGlzcGxheVRvZGF5c1dlYXRoZXIobG9jYXRpb24sZGF0YSx0ZW1wVW5pdClcclxuICAgIH0pXHJcbiAgICBnZXROZXh0RGF5c1dlYXRoZXIobG9jYXRpb24sdGVtcFVuaXQpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBkaXNwbGF5TmV4dERheXNXZWF0aGVyKGRhdGEsdGVtcFVuaXQpXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxubGV0IHRlbXBTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2dnbGUnKVxyXG50ZW1wU3dpdGNoID0gQXJyYXkuZnJvbSh0ZW1wU3dpdGNoKVxyXG5cclxuXHJcblxyXG50ZW1wU3dpdGNoLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGVsZW1lbnQuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT0gJ3RvZ2dsZS1vbicpe1xyXG4gICAgICAgICAgICAgICAgdGVtcFVuaXQgPSBcIm1ldHJpY1wiXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wVW5pdClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0ZW1wVW5pdCA9IFwiaW1wZXJpYWxcIlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVtcFVuaXQpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYXRpb249IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIilcclxuICAgICAgICBpZihsb2NhdGlvbil7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24uaW5uZXJUZXh0XHJcbiAgICAgICAgICAgIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLHRlbXBVbml0KS50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZGF5c1dlYXRoZXIobG9jYXRpb24sZGF0YSx0ZW1wVW5pdClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBVbml0XHJcbiAgICB9KVxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
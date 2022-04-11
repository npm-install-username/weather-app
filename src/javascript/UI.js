import './Background'

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


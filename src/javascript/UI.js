import './Background'
let container = document.createElement('div')
container.className="container"
document.body.appendChild(container)
let content = document.createElement('div')
content.id="content"
container.appendChild(content)

let appContainer = document.createElement('div')
appContainer.id = 'app-container'
content.appendChild(appContainer)

let searchBarDiv = document.createElement('div')
searchBarDiv.id = "search-bar-div"
let searchBar = document.createElement('input')
searchBar.type = "text"
searchBar.id = "search-bar"
searchBar.name = "search-bar"
searchBar.placeholder = "Enter a country or city..."
appContainer.appendChild(searchBar)



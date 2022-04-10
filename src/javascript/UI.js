import './Background'
let container = document.createElement('div')
container.className="container"
let content = document.createElement('div')
content.id="content"

let appContainer = document.createElement('div')
appContainer.id = 'app-container'
document.body.appendChild(container)
container.appendChild(content)
content.appendChild(appContainer)

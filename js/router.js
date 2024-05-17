export class Router {
  routes = {}

  add(routename, page) {
    this.routes[routename] = page
  }

  Route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }

  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname] || this.routes["/error"]
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}

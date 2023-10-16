window.addEventListener("load", function () {
    let root = this.document.querySelector("#root")
    let button = this.document.querySelector("button")

    function get(url, resultCallback) {
        let request = new XMLHttpRequest()
    
        request.open("GET", url)
        request.onload = function(){
            //console.log(request.responseText)
            let list = JSON.parse(request.responseText)
            resultCallback(list)
        }
        request.send()
    }
    
    button.onclick = function () {
        get(`http://localhost:8080/api/menus`, function (list) { 
            console.log(list)
        })
    }

    let template = `<img src = "image/8.png">`
    root.insertAdjacentHTML("beforeend", template)

    // root.firstChild.style.width = "160px"
    // root.firstChild.style.height = "240px"

    root.firstElementChild.classList.add("opacity:0")

    setTimeout(function () {

        root.firstElementChild.classList.remove("opacity:0")

        root.firstElementChild.ontransitionend = function () {
            root.firstElementChild.style.width = "200px"
        }
        
    }, 500)

})
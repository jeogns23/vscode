window.addEventListener("load", function () {
    let root = this.document.querySelector("#root")
    let template = `<img src = "image/8.png">`

    root.insertAdjacentHTML("beforeend", template)

    // root.firstChild.style.width = "160px"
    // root.firstChild.style.height = "240px"

    root.firstElementChild.classList.add("opacity:0")

    this.setTimeout(function () {

        root.firstElementChild.classList.remove("opacity:0")
        
    }, 500);

})
window.addEventListener("load", function () {
    let root = this.document.querySelector("#root")
    let template = `<img src = "image/8.png">`

    root.insertAdjacentHTML("beforeend", template)

    // root.firstChild.style.width = "160px"
    // root.firstChild.style.height = "240px"

    root.firstElementChild.classList.add("opacity:0")

    setTimeout(function () {

        root.firstElementChild.classList.remove("opacity:0")

        root.firstElementChild.ontransitionend = function () {
            root.firstElementChild.style.width = "200px";
        }
        
    }, 500);

})
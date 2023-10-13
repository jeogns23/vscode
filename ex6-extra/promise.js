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
            root.firstElementChild.style.width = "200px";
        }
        
    }, 500);

})

//비동기 방식을 동기방식처럼 보이게 해서 함수의 중첩을 줄여주는 기능(중첩x, 함수들의 수직관계): promise
//비동기 함수의 return = callback, 새로운 대안 반환방법 => promise(동기형 반환 가능)
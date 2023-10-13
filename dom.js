window.addEventListener("load", function () {
    let section = this.document.querySelector("#s5")
    let btnPrev = section.querySelector(".btn-prev")
    let btnNext = section.querySelector(".btn-next")
    let lis = section.querySelectorAll("li")

    
    let offsetIndex = 0
    btnNext.onclick = function (e) {
        e.preventDefault()

        offsetIndex++
        let size = lis.length
        
        lis[(0 + offsetIndex) % size].className = "card-1th"
        // lis[(0+offsetIndex)%size].style.left = "0px"
        // lis[(0+offsetIndex)%size].style.width = "100px"
        // lis[(0+offsetIndex)%size].style.height = "150px"

        lis[(1+offsetIndex)%size].className = "card-2th"
        // lis[(1+offsetIndex)%size].style.left = "calc(50% - 60px)"
        // lis[(1+offsetIndex)%size].style.width = "120px"
        // lis[(1+offsetIndex)%size].style.height = "180px"

        lis[(2+offsetIndex)%size].className = "card-3th"
        // lis[(2+offsetIndex)%size].style.left = "calc(100% - 100px)"
        // lis[(2+offsetIndex)%size].style.width = "100px"
        // lis[(2+offsetIndex)%size].style.height = "150px"

        console.log("다음버튼 클릭")
    }

    btnPrev.onclick = function (e) {
        e.preventDefault()

        offsetIndex--
        let size = lis.length
        
        lis[(2 + offsetIndex) % size].className = "card-1th"

        lis[(1 + offsetIndex)%size].className = "card-2th"

        lis[(0 + offsetIndex)%size].className = "card-3th"

        console.log("이전버튼 클릭")
    }

})

window.addEventListener("load", function () {
    let section = this.document.querySelector("#s4")
    let styleInput = section.querySelector(".style-input")
    let widthInput = section.querySelector(".width-input")
    let radiusInput = section.querySelector(".radius-input")
    let colorInput = section.querySelector(".color-input")
    
    let item = section.querySelector(".item")
    let outputDiv = section.querySelector(".output")

    // styleInput.onchange; //상태의 체인지
    // styleInput.onInput; //value의 값이 바뀔때
    // styleInput.onmousedown;

    styleInput.oninput = function (e) {
        // e.preventDefault()
        // console.log(styleInput.value)
        item.style.borderStyle = styleInput.value
        outputDiv.innerText = item.style.cssText
    }

    widthInput.oninput = function (e) {
        // e.preventDefault()
        // console.log(widthInput.value)
        item.style.borderWidth = widthInput.value + "px"
        outputDiv.innerText = item.style.cssText
    }

    radiusInput.oninput = function (e) {
        // e.preventDefault()
        // console.log(widthInput.value)
        item.style.borderRadius = radiusInput.value + "px"
        outputDiv.innerText = item.style.cssText
    }

    colorInput.oninput = function (e) {
        // e.preventDefault()
        // console.log(widthInput.value)
        item.style.borderColor = colorInput.value
        outputDiv.innerText = item.style.cssText
    }

})
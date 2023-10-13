import Boy from '../item/boy(newlect).js'
import Bg from '../item/background.js'

export default class GameCanvas {
    #obj
    #ctx
    #boy
    #bg
    constructor() {
        /** @type {HTMLCanvasElement} */
        this.#obj = document.querySelector("#canvas")
        this.#obj.focus()
        this.#ctx = canvas.getContext("2d")
        this.#boy = new Boy(295, 290) //x, y
        let width = canvas.width / 2
        let height = canvas.height / 2
        this.#bg = new Bg(width, height)
        //보이객체가 모서리에 닿았을때를 알려주는 콜백함수
        this.#boy.onOutOfBounds = function (e) {
            switch (e.border) {
                case "west": {
                    this.#bg.scrollBy("right")
                    break
                }
                case "east": {
                    this.#bg.scrollBy("left")
                    break
                }
                case "north": {
                    this.#bg.scrollBy("down")
                    break
                }
                case "south": {
                    this.#bg.scrollBy("up")
                    break
                }
            }
        }.bind(this)

        this.#bg.onMapOfBounds = function (e) {
            switch (e.bound) {
                case "left" : {
                    this.#boy.scrollBy("west")
                    break
                }
                case "right" : {
                    this.#boy.scrollBy("east")
                    break
                }
                case "up" : {
                    this.#boy.scrollBy("north")
                    break
                }
                case "down" : {
                    this.#boy.scrollBy("south")
                    break
                }
            }
        }.bind(this)
        //키보드가 눌리고 있을때 실행되는 이벤트
        this.#obj.onkeydown = function (e) {
            switch (e.key) {
                case "ArrowUp": {
                    this.#boy.moveTo("up")
                    break
                }
                case "ArrowDown": {
                    this.#boy.moveTo("down")
                    break
                }
                case "ArrowLeft": {
                    this.#boy.moveTo("left")
                    break
                }
                case "ArrowRight": {
                    this.#boy.moveTo("right")
                    break
                }
                // this.#boy.moveTo(100, 100)
            }
            // this.#boy.moveStop(e.key)
        }.bind(this)

        //키모드가 올라올때 실행되는 이벤트
        this.#obj.onkeyup = function (e) {
            switch (e.key) {
                case "ArrowUp": {
                    this.#boy.stopTo("up")
                    break
                }
                case "ArrowDown": {
                    this.#boy.stopTo("down")
                    break
                }
                case "ArrowLeft": {
                    this.#boy.stopTo("left")
                    break
                }
                case "ArrowRight": {
                    this.#boy.stopTo("right")
                    break
                }
                // this.#boy.moveTo(100, 100)
            }
            // this.#boy.moveStop(e.key)
        }.bind(this)
    }

    run() {
        setInterval(() => {
            this.#bg.update()
            this.#boy.update()
            // this.#ctx.clearRect(0, 0, canvas.width, canvas.height)
            this.#bg.draw(this.#ctx)
            this.#boy.draw(this.#ctx)
        }, 17)
    }

}

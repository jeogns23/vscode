import Boy from '../item/boy.js'

export default class IntroCanvas{
    #obj
    #ctx
    #boy
    constructor() {
        /** @type {HTMLCanvasElement} */
        this.#obj = document.querySelector("#canvas")
        this.#obj.focus()
        this.#ctx = canvas.getContext("2d")
        this.#boy = new Boy(300, 200) //x, y
    
        this.#obj.onkeydown = function () {
            console.log("key down");
        }.bind(this)
    }

    run() {
        setInterval(() => {
            this.#boy.update()

            this.#ctx.clearRect(0, 0, canvas.width, canvas.height)

            this.#boy.draw(this.#ctx)
        },17)
    }

}
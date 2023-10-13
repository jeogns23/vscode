export default class Background{
    #img
    #mapx
    #mapy
    #boy
    #speed
    constructor(boy) {
        this.#img = document.querySelector("#bg")
        this.#mapx = 0
        this.#mapy = 0
        this.#boy = boy
        this.#speed = 0
    }

    update(speed) {
        let w = canvas.width - this.#img.width
        let h = canvas.height - this.#img.height
        this.#speed = speed
        console.log(this.#mapy);
        if (this.#boy.x == 888 && this.#mapx > w && this.#boy.isWalking)
            this.#mapx -= this.#speed
        if (this.#mapx < w)
            this.#mapx = w
        if (this.#boy.x == 12 && this.#mapx < 0 && this.#boy.isWalking)
            this.#mapx += this.#speed
        if (this.#mapx > 0)
            this.#mapx = 0
        if (this.#boy.y == 676 && this.#mapy > h && this.#boy.isWalking)
            this.#mapy -= this.#speed
        if (this.#mapy < h)
            this.#mapy = h
        if (this.#boy.y == 12 && this.#mapy < 0 && this.#boy.isWalking)
            this.#mapy += this.#speed
        if (this.#mapy > 0)
            this.#mapy = 0
    }

     /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {

        ctx.drawImage(this.#img,this.#mapx,this.#mapy)
    }
}
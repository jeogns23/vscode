export default class Background{
    #img
    #x
    #y
    #imgWidth
    #imgHeight
    #canvasWidth
    #canvasHeight
    #speed
    #bounds
    constructor(x, y, bounds={x:801, y:433, w:99, h:267}) {
        this.#img = document.querySelector("#bg")
        this.#imgWidth = this.#img.width
        this.#imgHeight = this.#img.height
        this.#x = x //- this.#imgWidth/2
        this.#y = y //- this.#imgHeight/2
        this.#canvasWidth = canvas.width
        this.#canvasHeight = canvas.height
        this.#speed = 5
        this.#bounds = bounds
        this.onMapOfBounds = null
    }

    scrollBy(direction) {
        switch (direction) {
            case "right": {
                // console.log(this.#x);//801
                this.#x+=this.#speed
                if (this.#x >= this.#imgWidth / 2)
                    this.#x = this.#imgWidth / 2
            break
        }
            case "left": {
                // console.log(this.#x);//99
                this.#x-=this.#speed
                if (this.#x <= this.#canvasWidth - this.#imgWidth / 2)
                    this.#x = this.#canvasWidth - this.#imgWidth / 2
                break
            }
            case "down": {
                // console.log(this.#y); //433
                this.#y+=this.#speed
                if (this.#y >= this.#imgHeight / 2)
                    this.#y = this.#imgHeight / 2
                break
            }
            case "up": {
                // console.log(this.#y); //267
                this.#y-=this.#speed
                if (this.#y <= this.#canvasHeight - this.#imgHeight / 2)
                    this.#y = this.#canvasHeight - this.#imgHeight / 2
                break
            }
        }
    }

    update() {
        if (this.#x >= this.#bounds.x)
            this.onMapOfBounds({ bound: "left" })
        if (this.#x <= this.#bounds.w)
            this.onMapOfBounds({ bound: "right" })
        if (this.#y >= this.#bounds.y)
            this.onMapOfBounds({ bound: "up" })
        if (this.#y <= this.#bounds.h)
            this.onMapOfBounds({ bound: "down" })
    }

     /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
        let offX = this.#imgWidth / 2
        let offY = this.#imgHeight / 2
        // let offPos = {x:this.#imgWidth / 2, y:this.#imgHeight / 2}
        ctx.drawImage(this.#img,this.#x-offX,this.#y-offY)
    }
}
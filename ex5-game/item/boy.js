export default class Boy{
    #x
    #y
    #img
    #imgWalkingIndex
    #walkingDelay
    #delayCount
    #imgDirectIndex
    #isWalking
    #moveUp
    #moveDown
    #moveLeft
    #moveRight
    #speed
    constructor(x = 0, y = 0) {
        this.#x = x
        this.#y = y
        this.#img = document.querySelector("img")
        this.#imgWalkingIndex = 0
        this.#delayCount = 15
        this.#walkingDelay = this.#delayCount
        this.#imgDirectIndex = 0
        this.#isWalking = false
        this.#moveUp = false
        this.#moveDown = false
        this.#moveLeft = false
        this.#moveRight = false
        this.#speed = 5
    }

    moveTo(direction) {
        switch (direction) {
            case "up": {
                this.#imgDirectIndex = 2
                this.#moveUp = true
                break
            }
            case "down": {
                this.#imgDirectIndex = 0
                this.#moveDown = true
                break
            }
            case "left": {
                this.#imgDirectIndex = 1
                this.#moveLeft = true
                break
            }
            case "right": {
                this.#imgDirectIndex = 3
                this.#moveRight = true
                break
            }
        }
        this.#isWalking = true
    }

    stopTo(direction) {
        switch (direction) {
            case "up": {
                this.#imgWalkingIndex = 0
                this.#moveUp = false
                break
            }
            case "down": {
                this.#imgWalkingIndex = 0
                this.#moveDown = false
                break
            }
            case "left": {
                this.#imgWalkingIndex = 0
                this.#moveLeft = false
                break
            }
            case "right": {
                this.#imgWalkingIndex = 0
                this.#moveRight = false
                break
            }
        }
        if (!(this.#moveUp || this.#moveDown ||
            this.#moveLeft || this.#moveRight))
        this.#isWalking = false

        // this.#isWalking = this.#moveUp || this.#moveDown
        // this.#moveLeft || this.moveRight
        
        if (!this.#isWalking) {
            this.#imgWalkingIndex = 0
            this.#imgDirectIndex = 0
        }

    }

    get x() {
        return this.#x
    }

    get y() {
        return this.#y
    }

    get isWalking() {
        return this.#isWalking
    }

    get speed() {
        return this.#speed
    }
    
    update() { //캐릭터 이미지 변경 속도 조절
        // console.log(this.#walkingDelay);
        if (!this.#isWalking)
        return
        
        // 이동에 대한 코드
        if (this.#moveUp) this.#y -= this.#speed
        if (this.#y <= 12) this.#y = 12
        if (this.#moveDown) this.#y += this.#speed
        if (this.#y >= 700 - 24) this.#y = 700 - 24
        if (this.#moveLeft) this.#x -= this.#speed
        if (this.#x <=12) this.#x = 12
        if (this.#moveRight) this.#x += this.#speed
        if (this.#x >= 900 - 12) this.#x = 900 - 12
    
        // 이미지에 대한 코드
        if (this.#walkingDelay == 0) {
            this.#imgWalkingIndex++
            this.#walkingDelay = this.#delayCount
        }
        this.#imgWalkingIndex %= 4
        this.#walkingDelay--
    }
    
    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) { //캐릭터 이미지 위치 선정 및 출력
        let w = 48
        let h = 48
        // ctx.drawImage(this.#img, this.#x, this.#y)
        ctx.drawImage(
            this.#img,
            // src --
            w * this.#imgDirectIndex,
            h * this.#imgWalkingIndex,
            w,
            h,
            // dest --
            this.#x - w / 2,
            this.#y - h / 2,
            w,
            h
        )
        // ctx.drawImage(this.#img, 48*3, 0, 48, 48, this.#x+48, this.#y+48, 48, 48)
        // ctx.arc(this.#x, this.#y, 20, 0, Math.PI*2)
        // ctx.stroke()
    }

}
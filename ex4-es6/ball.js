export default class Ball {
    #x;
    #y;
    #dx;
    #dy;
    #vx;
    #vy;
    #color;
    #radius;
    #isActive;
    #speed;
    constructor(x = 100, y = 100, color = "black") {
        this.#x = x;
        this.#y = y;
        this.#dx = 0;
        this.#dy = 0;
        this.#vx = 0;
        this.#vy = 0;
        this.#color = color;
        this.#radius = 30;
        this.#isActive = false;
        this.#speed = 3;
    };

    moveTo(dx, dy) {
        this.#dx = dx;
        this.#dy = dy;
    
        let w = (this.#dx - this.#x);
        let h = (this.#dy - this.#y);
        let d = Math.sqrt(w*w + h*h);
    
        this.#vx = w/d; //정수를 정수로 나누면 실수
        this.#vy = h/d;
    };

    update() {
         if(this.#x-1 <= this.#dx && this.#dx <= this.#x+1){ //오차범위 조절
            this.#vx = 0;
            this.#vy = 0;
        };
        
        this.#x+=this.#vx*this.#speed;
        this.#y+=this.#vy*this.#speed;
    };

    draw(ctx) {
        let shape = new Path2D();
        shape.arc(this.#x,this.#y,this.#radius,0,Math.PI*2);
        // ctx.clearRect(0,0,canvas.width,canvas.height)
        let originColor = ctx.fillStyle;
        ctx.fillStyle = this.#color;
        ctx.fill(shape);
        ctx.fillStyle = originColor;

        if(this.#isActive){ //녹색 테두리넣기
            let originColor = ctx.strokeStyle;
            ctx.strokeStyle = "green";
            ctx.lineWidth = 3;
            ctx.stroke(shape);
            ctx.strokeStyle = originColor;
        };
    };

    setActive(active) {
         if(active === undefined){
            this.#isActive = true;
            return;
        };

        this.#isActive = active;
    };

    isLocated(x, y) {
         if(this.#x - this.#radius <= x && x <= this.#x + this.#radius
            && this.#y - this.#radius <= y && y <= this.#y + this.#radius){
            return true;
        };
    };

    get radius() {
        return this.#radius
    }
    get x() {
        return this.#x
    }
    get y() {
        return this.#y
    }
}

// export { Ball }
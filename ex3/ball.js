function Ball(x, y, color){
    this.x = x || 100;
    this.y = y || 100;
    this.dx = 0;
    this.dy = 0;
    this.vx = 0;
    this.vy = 0;
    this.color = color || "black"
    this.isActive = false;
    this.radius = 30;
    this.speed = 3;
}

Ball.prototype = {
    constructor: Ball,
    moveTo : function(dx, dy){
        this.dx = dx;
        this.dy = dy;
    
        var w = (this.dx - this.x);
        var h = (this.dy - this.y);
        var d = Math.sqrt(w*w + h*h);
    
        this.vx = w/d; //정수를 정수로 나누면 실수
        this.vy = h/d;
    },

    update : function(){
        if(this.x-1 <= this.dx && this.dx <= this.x+1){ //오차범위 조절
            this.vx = 0;
            this.vy = 0;
        }
        
        this.x+=this.vx*this.speed;
        this.y+=this.vy*this.speed;
        
    },

    draw : function(ctx){ //매개변수에 없어도 전역변수라 가능
        var shape = new Path2D();
        shape.arc(this.x,this.y,this.radius,0,Math.PI*2);
        // ctx.clearRect(0,0,canvas.width,canvas.height)
        var originColor = ctx.fillStyle;
        ctx.fillStyle = this.color;
        ctx.fill(shape);
        ctx.fillStyle = originColor;

        if(this.isActive){ //녹색 테두리넣기
            var originColor = ctx.strokeStyle;
            ctx.strokeStyle = "green";
            ctx.lineWidth = 3;
            ctx.stroke(shape);
            ctx.strokeStyle = originColor;
        };

    },

    setActive : function(active){
        if(active === undefined){
            this.isActive = true;
            return;
        }

        this.isActive = active;
    },

    isLocated : function(x, y){
        if(this.x - this.radius <= x && x <= this.x + this.radius
            && this.y - this.radius <= y && y <= this.y + this.radius){
            return true;
        }
    }, 

};

// Ball.prototype.moveTo = function(dx, dy){
//     this.dx = dx;
//     this.dy = dy;

//     var w = (this.dx - this.x);
//     var h = (this.dy - this.y);
//     var d = Math.sqrt(w*w + h*h);

//     this.vx = w/d; //정수를 정수로 나누면 실수
//     this.vy = h/d;
// }

// Ball.prototype.update = function(){
//     if(this.x-1 <= this.dx && this.dx <= this.x+1){ //오차범위 조절
//         this.vx = 0;
//         this.vy = 0;
//     }
    
//     this.x+=this.vx;
//     this.y+=this.vy;
// }

// Ball.prototype.draw = function(ctx){
//     var shape = new Path2D();
//     shape.arc(this.x,this.y,30,0,Math.PI*2);
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     ctx.fill(shape);
// } 

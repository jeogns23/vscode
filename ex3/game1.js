var ball1 = new Ball(100,100,"black");
var ball2 = new Ball(200,100,"blue");
var balls = [];
balls.push(ball1);
balls.push(ball2);
var upButton = new Button(850, 50, 30, "orange");
var downButton = new Button(850, 90, -20, "green");

/** @type {HTMLCanvasElement} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d"); //로드하는 방법을 모를때 사용하는 방법
//사용자의 마우스 입력 받기
//마우스가 click 될때 마다 함수 실행
//.on + '이벤트' 이벤트를 담을 변수(?)
var curBall = ball1;
curBall.setActive();

canvas.onclick = function(e){

    if(upButton.isLocated(e.x, e.y)){
        upButton.action();
        return;
    }

    for(var ball of balls)
        if(ball.isLocated(e.x, e.y)){
        curBall.setActive(false);
        curBall = ball;
        curBall.setActive();
        // ball2.isActive = false;
        return; //위에 조건이 다 맞으면 밑에 조건을 실행하지 않겠다
        }
        
    curBall.moveTo(e.x, e.y)
    
}

window.setInterval(function(){

    for(var ball of balls){
        if(ball === curBall)
            continue;

        var w = curBall.x-ball.x;
        var h = curBall.y-ball.y;
        var d = Math.sqrt(w*w + h*h);
        var rSum = curBall.radius + ball.radius

        if(d <= rSum){
            var idxBall = balls.indexOf(ball);
            balls.splice(idxBall, 1)
            console.log("충돌발생")
        }
    }

    for(var ball of balls)
        ball.update();

    upButton.update();
    // downButton.update();

    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    for(var ball of balls)
        ball.draw(ctx);

    //삼각형 그리기
    upButton.draw(ctx);
    downButton.draw(ctx);


    // var bx = 865;
    // var by = 30;
    // var br = 20;
    
    // var hw = Math.sqrt(br*br - br/2*br/2);
    // var pos1 = {x:bx, y:by-br};
    // var pos2 = {x:bx-hw, y:by+(br/2)};
    // var pos3 = {x:bx+hw, y:by+(br/2)};

    // var btnShape = new Path2D();
    // btnShape.moveTo(pos1.x, pos1.y);
    // btnShape.lineTo(pos2.x, pos2.y);
    // btnShape.lineTo(pos3.x, pos3.y);

    // var originFillStyle = ctx.fillStyle;
    // ctx.fillStyle = "orange";
    // ctx.fill(btnShape);
    // ctx.fillStyle = originFillStyle;

    // var btnShape = new Path2D("M870 10 L890 40 L850 40 Z");
    // ctx.fillStyle = "orange";
    // ctx.fill(btnShape);


}, 17);


var ball1 = new Ball(100,100,"black");
var ball2 = new Ball(200,100,"blue");
var balls = [];
balls.push(ball1);
balls.push(ball2);

/** @type {HTMLCanvasElement} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d"); //로드하는 방법을 모를때 사용하는 방법
//사용자의 마우스 입력 받기
//마우스가 click 될때 마다 함수 실행
//.on + '이벤트' 이벤트를 담을 변수(?)
var curBall = ball1;
curBall.setActive();

canvas.onclick = function(e){

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

    for(var ball of balls)
        ball.update();

    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    for(var ball of balls)
        ball.draw(ctx);

}, 10);


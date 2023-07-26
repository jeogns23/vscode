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

    if(balls[i].isLocated(e.x, e.y)){
    curBall.setActive(false);
    curBall = balls[i];
    curBall.setActive();
    // ball2.isActive = false;
    return; //위에 조건이 다 맞으면 밑에 조건을 실행하지 않겠다
    }
    
    if(ball2.isLocated(e.x, e.y)){
        curBall.setActive(false);
        curBall = ball2;
        curBall.setActive();
        // ball1.isActive = false;
        return;
    }

    // if(ball1.x - 30 <= e.x && e.x <= ball1.x + 30){
    //     curBall = ball1;
    //     curBall.setActive();
    //     ball2.isActive = false;
    //     return;
    // };
    // if(ball2.x -30 <= e.x && e.x <= ball2.x + 30){
    //     curBall = ball2;
    //     curBall.setActive();
    //     ball1.isActive = false;
    //     return;
    // };

    curBall.moveTo(e.x, e.y)
   
    // if(e.shiftKey){
    //     ball2.moveTo(e.x, e.y)
    // } else {
    //     curBall.moveTo(e.x, e.y);
    // }
    
}

// var ball = new Path2D();
// ball.arc(x,y,30,0,Math.PI*2);
// ctx.clearRect(0,0,canvas.width,canvas.height);
// ctx.fill(ball);

//setTimeout - 알람(정해진 시간 후에), setInterval - 주기적 알람(정해진 시간마다)
window.setInterval(function(){

    ball1.update();
    ball2.update();

    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    ball1.draw(ctx);
    ball2.draw(ctx);

}, 10);


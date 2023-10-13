let ball1 = new Ball(100,100,"black");
let ball2 = new Ball(200,100,"blue");
let balls = [];
balls.push(ball1);
balls.push(ball2);
// let upButton = new Button(850, 50, 30, "orange");
// let downButton = new Button(850, 90, -20, "green");

/** @type {HTMLCanvasElement} */
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d"); //로드하는 방법을 모를때 사용하는 방법
//사용자의 마우스 입력 받기
//마우스가 click 될때 마다 함수 실행
//.on + '이벤트' 이벤트를 담을 변수(?)
let curBall = ball1;
curBall.setActive();

canvas.onclick = function(e){

    // if(upButton.isLocated(e.x, e.y)){
    //     upButton.action();
    //     return;
    // }

    for(let ball of balls)
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

    for(let ball of balls){
        if(ball === curBall)
            continue;

            let w = curBall.x-ball.x;
            let h = curBall.y-ball.y;
            let d = Math.sqrt(w*w + h*h);
            let rSum = curBall.radius + ball.radius

        if(d <= rSum){
            let idxBall = balls.indexOf(ball);
            balls.splice(idxBall, 1)
            console.log("충돌발생")
        }
    }

    for(let ball of balls)
        ball.update();

    // upButton.update();
    // downButton.update();

    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    for(let ball of balls)
        ball.draw(ctx);

    //삼각형 그리기
    // upButton.draw(ctx);
    // downButton.draw(ctx);

}, 17);


var x = 100;
var y = 100;
var dx = 0;
var dy = 0;
var vx = 0;
var vy = 0;

/** @type {HTMLCanvasElement} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d"); //로드하는 방법을 모를때 사용하는 방법
//사용자의 마우스 입력 받기
//마우스가 click 될때 마다 함수 실행
//.on + '이벤트' 이벤트를 담을 변수(?)

canvas.onclick = function(e){
    // var ball = new Path2D();
    // ball.arc(e.x,e.y,30,0,Math.PI*2);
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    // ctx.fill(ball)
    // ----- 마우스 클릭할때마다 볼 생성

    dx = e.x;
    dy = e.y;

    var w = (dx - x);
    var h = (dy - y);
    var d = Math.sqrt(w*w + h*h);

    vx = w/d; //정수를 정수로 나누면 실수
    vy = h/d;
    
    // localStorage.setItem('x', x);
    // localStorage.setItem('y', y);
    
}

// var ball = new Path2D();
// ball.arc(x,y,30,0,Math.PI*2);
// ctx.clearRect(0,0,canvas.width,canvas.height);
// ctx.fill(ball);

//setTimeout - 알람(정해진 시간 후에), setInterval - 주기적 알람(정해진 시간마다)
window.setInterval(function(){

    if(x-1 <= dx && dx <= x+1){
        vx = 0;
        vy = 0;
    }
    
    x+=vx;
    y+=vy;
    
    var ball = new Path2D();
    ball.arc(x,y,30,0,Math.PI*2);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fill(ball);
    
}, 50);

var ball2 = new Path2D();

ball2.arc(200,100,30,0,Math.PI*2);
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fill(ball2);
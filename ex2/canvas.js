/** @type {HTMLCanvasElement} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d"); //로드하는 방법을 모를때 사용하는 방법

//중첩 사각형 그리기
// ctx.fillRect(25,25,100,100);
// ctx.clearRect(45,45,60,60);
// ctx.strokeRect(50,50,50,50);

// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(75,100);
// ctx.closePath();
// ctx.stroke();
// ctx.fill();

// --------------

//중첩 원 그리기
// ctx.beginPath();
// ctx.arc(75,75,50,0,Math.PI*2 , true) //(가로, 세로, 크기, degree, 그려질 위치, 시계반대방향)
// ctx.moveTo(110,75);
// ctx.arc(75,75,35,0,Math.PI,false);
// ctx.moveTo(80,75)
// ctx.arc(75,75,5,0,Math.PI*2,false);
// ctx.stroke();

// --------------

//배지어곡선 그리기
// ctx.beginPath();

// ctx.moveTo(50,50);
// // ctx.lineTo(100,100);
// // ctx.quadraticCurveTo(150,10,100,100) //점 하나일때
// ctx.bezierCurveTo(150,10,150,70,100,100); //a 지점, b 지점, 이동할 좌표(두개의 지점으로 끌어다길때)
// ctx.stroke();

// ctx.strokeRect(150,10,1,1);
// ctx.strokeRect(150,70,1,1);

// --------------

//객체 활용해서 그림 그리기
var shape = new Path2D();
shape.rect(10,10,100,100);
ctx.stroke(shape);

var shape1 = new Path2D();
shape1.arc(60,60,50,0,Math.PI*2)
ctx.stroke(shape1);

var shape2 = new Path2D("M150 10 h 100 v 100 h -100 z"); 
//("시작위치, h가로길이, v세로길이, h반대가로길이, close(z)")
ctx.stroke(shape2);
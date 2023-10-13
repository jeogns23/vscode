//import는 객체를 보내고 받을 수 있다.
//lib1.js 에 있는 모든 객체를 한번에 쓰겠다 => * 표시
import * as lib1 from './modules/lib1.js';
import test /* export default */, {test1 as lib2Test1} from './modules/lib2.js';
import Ball from './ball.js'

import './modules/config.js'
console.log(count);

console.log(lib1.data.x);
lib1.test();
lib1.test1();
test();
lib2Test1();

const balls = [
    new Ball(100, 100, "black"),
    new Ball(200, 100, "blue")
];

balls[2] = new Ball(200, 200);

/** @type {HTMLCanvasElement} */
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d"); //로드하는 방법을 모를때 사용하는 방법

balls[0].draw(ctx);
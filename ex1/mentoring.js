var arr = ['a', 'b', 'c'];
var nums = [1,2,3];

var newArr = nums.concat(arr);
console.log(newArr)
console.log(arr.concat(nums)); //배열 두개 합치기
console.log("--------------------------------------");
var arr = [0,0,0,0];
arr.fill(2, 1, 2); //값, 시작, 끝 숫자로 변경
console.log(arr);
console.log("--------------------------------------");
var arr = [1,1,1,1];
console.log(arr.toString()); //String 으로 변경
console.log("--------------------------------------");
var cars = ["Ferrari", "Aston", "Porshe"];
console.log(cars.join(' ')); //배열 사이에 문자 추가
console.log("--------------------------------------");
var cars = ["Ferrari", "Aston", "Porshe"];
var cars2 = cars.sort(); //오름차순
console.log(cars2);
var cars3 = cars.reverse(); //내림차순
console.log(cars3)
console.log("--------------------------------------");
var target = {a:1, b:2};
var source = {b: 4, c: 5};
console.log(Object.assign(target, source));
console.log(target) //원래 객체를 아예 변경해버림
console.log("--------------------------------------");
//함수 표현식
var aa = function(){
    console.log("aa:", "aa");
};

test();
aa();
var b = aa;
b();

//명시적 함수
function test(){
  console.log("test:", "test");
};
console.log("--------------------------------------");
var cars = ["Ferrari", "Aston", "Porshe"];

printCars(cars[0], cars[1], cars[2]);

function printCars (x, y){
    // console.log(x + "," +y);
    for (var item of arguments)
        console.log(item);
};
console.log("--------------------------------------");
printStr(1, 2);

function printStr(x){
    console.log(x);
};
function printStr(x,y){
    console.log(x + "," +y);
};
function printStr(x,y,z){
    console.log(x + "," + y + "," + z);
}; //매개변수가 가장 많은 함수 기준으로 실행 -> x
console.log("--------------------------------------");
var nums = [1,80,5,30,2];

var newNums = function (a,b){
    return a-b;
}; //함수 표현식은 순서 영향을 받음
nums.sort(newNums);
console.log(nums)
console.log("--------------------------------------");
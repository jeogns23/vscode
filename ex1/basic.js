{
    //제어구조
    var exam = {kor: 10, eng: 20, math: 30};
    for (var att in exam)
        console.log(att + ":" + exam[att]);

    console.log("--------------------------------------");
    
    var names = [, "철수", "영희", ,"맹구", "동천"];

    for(var i = 0; i<names.length; i++)
        console.log(names[i]); //기존 반복문 (from. java)
    console.log("------------------------");

    for (var i in names) //ES5 방식: $$인덱스 사용, 인덱스 있는 것들만 출력
        console.log(names[i]);
    console.log("for in, for out 출력 비교")
    for (var name of names) //바로 값 출력, 인덱스 없어도 위치를 인식->undefined 출력
        console.log(name);
}
console.log("--------------------------------------");
{
    var x = Infinity;
    console.log(Infinity - 1000000)
    console.log(Number.MAX_VALUE)
    var y = Math.pow(100, 10000000) //100^10000000
    console.log(y)
    console.log(isFinite(x))

    console.log("--------------------------------------");

    //NaN, Infinity : Global Property
    var x = 3 * 'a'
    console.log(x)
    console.log(x == NaN)
    console.log(x === NaN)
    console.log(isNaN(x)) // NaN 비교시 사용
}
console.log("--------------------------------------");
{
    var kor = null ?? 10 // null 로만 한정해서 기본값 설정할때 ?? 사용
    var kor = false ?? 10 //false 출력
    var kor = false || 10 // falsy 를 기반으로 기본값을 만들고 싶을 때
    console.log(kor)

    var result = true || false && true
    result = 'cat' || 'dog' && 'dragon'
    result = 'cat' && 'dog' || 'dragon'

    console.log(result)

    var kor = 10;
    var eng = 50;
    var math = 100;
    var valid = kor && eng && math

    if(valid)
        console.log("모든 값이 입력 되었습니다")
    else
        console.log("입력되지 않은 값이 있네요")

    // var age = prompt("나이를 입력해주세요")
    // age = age || "입력하지 않았습니다"
    // console.log(age)

    var result = null || 0 || undefined || "" || "aa" || " " || 4 || "hello"
    console.log(result)

    var o5 = "cat" || "dog"
    console.log(o5)
}
console.log("--------------------------------------");
{
    //연산자
    var result = 32 > "4" //"4" 문자열이 숫자형태로 변환되서 값 비교 (true 출력)
    console.log(result)

    var result = "32" > "4" //false 출력
    console.log(result)

    var result = 3.5 - "A" //NaN -> Not a Number. "A는 숫자형태가 아니라 변환이 안되!!"
    console.log(result)

    var result = 3.5 - "2" //"2" 문자열을 숫자형태로 바꿔서 연산 (1.5 출력)
    console.log(result)
}
console.log("--------------------------------------");
{
    var member = {id:1, username:"dragon", password:'1111'}
    var json = JSON.stringify(member)
    console.log(json)

    // var str = '{"id": 1, "username":"newLec", "password":111}'
    // var member = JSON.parse(str)
    // console.log(member.username)

    // var str = '({"id": 1, "username":"newLec", "password":111})'
    // var member = eval(str)
    // console.log(member.username)
    var str = "[3,4,2,3]"
    console.log(str[2])
    var list = eval(str)
    console.log(list[2])

    //eval() -> 문자열로 이루어진 자바스크립트코드를 실행 
    var code = "var x = 30;"
    eval(code)
    console.log(x)
}
console.log("--------------------------------------");
{
    //JSON
    var exam = {kor:40, eng:60, math:100}
    console.log(exam)
    var nums = [1,2,3,4,5]
    console.log(nums)
}
console.log("--------------------------------------");
{
    //object property manipulation
    var exam = new Object()
    exam.kor = 30
    exam["eng"] = 40
    var colName = "math"
    exam[colName] = 100

    console.log(exam["kor"])
    console.log(exam.eng)
    console.log(exam.math)
    console.log(exam)

    delete exam.eng

    console.log(exam)
    console.log(exam.eng) //값이 없다. .찍으면 다시 속성을 읽는다

    console.log("--------------------------------------");

    //object basic
    var exam = new Object()
    console.log(exam)
    exam.kor = 30
    console.log(exam)
    exam.eng = 70
    console.log(exam)
    exam.math= 100
    console.log(exam)

    console.log(exam.kor)
}
console.log("--------------------------------------");
{
    //Array manipulation
    var nums = new Array(1,2,3,4,5,6)
    console.log(nums)
    nums.splice(3, 0, new Array(7,8,9,10)) // splice (기준점, ~바꿀위치, 대체할 값)
    console.log(nums)
    //숫자 2를 100으로 수정해주세요
    nums.splice(1, 1, 100)
    console.log(nums)
}
console.log("--------------------------------------");
{
    //Queue (FIFO(First in First out))
    var nums = new Array()
    nums.push("그저께 산 바나나")
    console.log(nums)
    nums.push("어제 산 바나나")
    console.log(nums)
    nums.push("오늘 산 바나나")
    console.log(nums)
    
    var outBanana = nums.shift()
    console.log(outBanana)
    console.log(nums)

}
console.log("--------------------------------------");
{
    //Stack (LIFO(Last in First out))
    var nums = new Array()
    nums.push(1)
    nums.push(21)
    nums.push(30)
    nums.push(19)

    console.log(nums)

    var outNum = nums.pop()
    console.log(outNum)
    console.log(nums)
}
console.log("--------------------------------------");
{
    //Array
    var nums = new Array()
    nums[3] = 4

    console.log(nums)
    console.log(nums[0])
    console.log(typeof nums[0])
    console.log(nums.length)

    var nums = new Array(5,10,21, "hello", new Array(2,3,4))

    console.log(nums[4][1])
    console.log(nums[4])
    console.log(nums)
}
console.log("--------------------------------------");
{
    var x = 5
    var y

    console.log(typeof x)
    console.log(typeof y)
    console.log(y)

    //초기화 되었는지를 확인하는 코드는?
    console.log(y=="undefined")
    console.log(y==undefined)
    console.log(y===undefined)
}
console.log("--------------------------------------")
{  
    var x = 3
    var y = 5 //new Number(3);
    console.log(x)
    console.log(y)

    console.log(x==y) //박스에 들어있는 값을 비교하는 연산
    console.log(x===y) // 박스가 같은지를 비교하는 연산
}
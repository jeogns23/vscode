{
    let x = 30;
    var y = 50;
    console.log(x);
}

{
    console.log(y);
    for (let i = 0; i < 5; i++)
    console.log(i);
}

{
    let direction = 1;
    const North = 1;
    const South = 3;
    direction = North;

    let level = 1;
    let Top = 1;
    let Middle = 2;
}
console.log("----- : Template String : ----------");
{
    let title = "ES6";
    let color = "Red";
    let className = "note";
    
    let template = '<section class =' + className + '><h1 style=' + color + ';">'+ title + '</h1></section>';
    console.log(template); //기존 '+' 활용한 방식
    
    let template1 = `<section class = "${className}">
                        <h1 style="color : ${color}">${title}</h1>
                    </section>`;
    console.log(template1); //${} 활용한 새로운 방식
   
    let template2 = String.raw` 
    <section class = "${className}"> \n\n \" \' \`
    <h1 style="color : ${color}">${title}</h1>
    </section>
    `;
    console.log(template2); //String.raw => 문자열안에 \ 도 같이 기능이 아닌 문자열로 인식해서 출력하게 해주는 기능
}
console.log("----- : 향상된 JSON 표기법 1. : ----------");
{
    let kor = 30;
    let eng = 50;
    let math = 100;
    
    let exam = {kor:kor, eng:eng, math:math, 
        total:function(){
            return this.kor+this.eng+this.math;
        },
        avg:function(){
            return this.total / 3;
        }
    };
    console.log(exam); //기존방식

    let exam1 = {kor, eng, math,  //변수명과 객체명이 같으면 생략 가능
        total(){ //function() 생략 가능
            return this.kor + this.eng + this.math;
        },
        avg(){
            return this.total / 3;
        }
    };
    console.log(exam1);
}
console.log("----- : 향상된 JSON 표기법 2. : ----------");
{
    let kor = 30;
    let eng = 50;
    let math = 100;
    let aa = "com";
    
    let exam = {kor, eng, math,  //변수명과 객체명이 같으면 생략 가능
        total(){ //function() 생략 가능
            return this.kor + this.eng + this.math;
        },
        avg(){
            return this.total / 3;
        },
        [aa + "1"]: 50 //변수명을 객체명으로 활용할 수 있다 -> 변수명이 바뀌게되면 위험하다.
    };
    console.log(exam.com1);
}
console.log("----- : Object Destructuring 1. : ----------");
{
    let exam = {
        kor:10, 
        eng:20, 
        math:50,
        student:{
            name:'newLec',
            phone:'010-1111-2222'
        }
    };
    // let kor = exam.kor;
    // let eng = exam.eng; > 기존방식
    
    // let {kor, eng, com=50} = exam; //지역변수를 객체형식으로 한번에 담을 수 있다. 새로운 변수를 넣고 초기화도 바로 가능! (com = 50)
    // console.log(kor, eng, com)

    let {kor:newKor} = exam; //객체명을 새로운 변수명으로 바꾸게 해주는 기능 {기존객체명: 바꿀 새로운 변수명}
    console.log(newKor);

    let {kor, student:{name, phone}} = exam; //중첩된 객체 뽀개기
    console.log(kor, name, phone);
}
console.log("----- : Array Destructuring 1. : ----------");
{
    let kors = [10, 20, 30];
    
    let [, kor1, kor2, kor3=9] = kors; //새로운 변수를 만들면서 뽀개기
    console.log(kor1, kor2, kor3);
    
    let kors1 = [90, 80];
    [kor1, kor2] = kors1; //기존에 선언한 변수명을 새로운 변수명으로 변경 (변수 선언 없이 기존 변수명 바꾸면서 뽀개기)
    console.log(kor1, kor2, kor3);    
}
{
    let kor = 30;
    let eng = 20;
    
    [eng, kor] = [kor, eng]; //배열 뽀개기 = 새로운 배열 , 뽀개기 순서 변경하면 배열 순서도 바뀌면서 저장
    console.log(kor, eng);
}
{
    let kors = [[10,20,30,40], [50,60,70,80]];
    let [[kor1, kor2]] = kors;
    
    console.log(kor1, kor2);
}
{
    //기존 변수들을 이용한 뽀개기
    let kor1, kor2, eng;
    
    let kors = [10,20,30]; //배열
    let exam = {kor:20, eng:30, kors}; //객체
    
    ({kor:kor1, eng, kors:[kor2]} = exam); //exam 객체 안에 있는 kors 배열에 첫번째 값 출력
    console.log(kor1, eng, kor2);
}
{
    //나머지 매개변수들을 이용하기 위한 나머지 변수
    function print(x, y, ...rest) {
        console.log(x, y, rest[0], rest.length, "|", arguments[0], arguments.length);
    };
    //...(변수명) -> 매개변수의 나머지값들을 배열로 받아오는 기능.
    //arguments 매개변수가 없어도 함수내에서 매개변수를 쓸수있게 하는 배열명.
    print(1, 3, 5, 7, 9);
    
    console.log("---------------");
    
    function print1(nums) {
        console.log(nums);
    };
    
    let nums = [12, 34, 56, 78, 90];
    
    print1(nums);
    print1(...nums);
    
    let char = ['a', 'b', 'c', ...nums]; //배열안에 배열을 넣을때 ... spread 연산자를 사용하면 1차 배열로 한번에 만들 수 있다.
    console.log(char);
    
    console.log("복합 예--->");
    
    function print2([x,y,z]) { //배열을 뽀개서 함수에 매개변수로 넣기
        console.log(x,y,z);
    };
    
    print2(nums);
    
    function print3({kor, eng, math}) { //객체를 뽀개서 함수에 매개변수로 넣기
        console.log(kor, eng, math);
    };
    
    let exam = {
        kor: 30,
        eng: 20,
        math: 50
    };
    print3(exam);
}
console.log("----- : 함수의 기본값 : ----------");
{
    function sum() {
        return 100;
    };
    
    function print(x, y = sum(), z=x+1) { //null 이면 null, undefined 면 기본값, 기본값 세팅은 함수로도 가능
        console.log(x, y, z);
        console.log(arguments.length);
    };
    
    print(10, null, 10);
    print(20, undefined, 20);
    print(10, undefined);
    print(1);
}
console.log("----- : Arrow Function : ----------");
{
    let nums = [10, 20, 29, 82, 39, 28, 100];
    
    nums.sort(function (a, b) {
        return b - a;
    }); //내림차순 정렬
    console.log(nums);
    console.log("----------");
    nums.sort((a, b) => a - b); //오름차순 정렬, 람다식 표현
    console.log(nums);
    
    let print = function () {
        // console.log(arguments[0], arguments[1])
        console.log('normal', this);
    };
    print(1, 2);
    new print(1, 2);
    
    let print1 = () => {
        // console.log(arguments[0], arguments[1])
        console.log('arrow', this);
    };
    print1(1, 2);
    // new print1(1, 2);
    
    // let x = 40;
    
    // setInterval(function () {
    //     console.log(x);
    // }, 1000);
        
    let game = {
        x: 30,
        run() {
            setInterval(() => { //arrow function은 자기만의 this를 갖고 있지 않다, 생성자로 사용할 수 없다 (new x)
                this.x++;
                console.log(this.x);
            }, 1000);
            // setInterval(function () {
            //     this.x++;
            //     console.log(this.x);
            // }, 1000)
        }
    };
    // game.run();
}
console.log("----- : call/apply/bind : ----------");
{
    let game = {
        x: 30,
        run() {
            console.log(this);
            setTimeout(function () {
                console.log(this)
                this.x++;
                console.log(this.x);
            }.bind(this), 1000); //.bind를 쓰면 함수 밖에 있는 this를 사용할 수 있게 해준다.
        }
    };
    // game.run();
    // 람다식 함수를 쓰거나 function 과 .bind를 같이 쓰면 this를 사용할 수 있다.
    
    let f = function (a, b) {
        console.log(a, b);
        console.log(this);
        this.x++;
        console.log(this.x);
    };//.bind(game) -> 위임자의 역할로 나중에 호출할때
    
    let game2 = {
        x: 10
    };
    
    let array = [50, 60];
    f.call(game, 50, 60); //.call 호출자의 입장에서 사용할때
    f.call(game2);
    f.apply(game2, array); //call, apply 차이점 => call은 매개변수로 바로 사용할수있지만 apply는 배열로만 매개변수를 사용해야한다.
}
console.log("----- : Class : ----------");
{
    class Exam {
        constructor(kor = 0, eng = 0, math = 0) {
            this.kor = kor;
            this.eng = eng;
            this.math = math;
        };
        
        total() {
            return this.kor + this.eng + this.math;
        };
    };
    
    let exam = new Exam(20, 20, 30);
    console.log(exam.total());
}
console.log("----- : 보호모드 & getters/setters & static : ----------"); //다른 언어에서는 기본세팅
{
    class Exam {
        #kor;
        #eng;
        #math; // constructor 위에 # 붙여서 변수를 선언하면 private 변수
        static #count; //static 변수도 private 으로 바꿀 수 있다.

        static {
            Exam.#count = 100;
        }; //전역변수 초기화 블럭

        static get count() {
            return Exam.#count;
        };

        static set count(value) {
            Exam.#count = value;
        };

        static getKor(exam) { //static 에서는 this를 사용할 수 없다
            return exam.kor;
        };

        constructor(kor = 0, eng = 0, math = 0) {
            this.#kor = kor;
            this.#eng = eng;
            this.#math = math;

            Exam.count++; //객체가 만들어질때마다 ++
        }; //멤버변수 초기화 블럭
        
        total() {
            return this.#kor + this.#eng + this.#math;
        }; //과목의 합계 구하는 함수

        get kor() {
            return this.#kor;
        };

        set kor(value) {
            this.#kor = value;
        };
    };
    
    let exam = new Exam(30, 20, 30);
    let exam1 = new Exam();
    console.log(exam.kor); //getter 를 사용하면, 변수명을 호출한게 아니고 함수를 호출
    console.log(exam.total());
    console.log(Exam.count);

    console.log(Exam.getKor(exam)); //static 함수 호출 (객체를 매개변수로 넣어준다)

    console.log("----- : 상속 : ----------");

    class NewlecExam extends Exam{ //자바에서 상속하는것과 같은 방식 'extends'
        #com;
        constructor(kor, eng, math, com=0) {
            super(kor, eng, math); //자식 클래스에서 생성자를 만들때는 부모 생성자를 무조건 호출 해야됨
            this.#com = com;
        };

        total() {
            return super.total() + this.#com; //부모클래스의 total()를 갖고와서 새로운 자식클래스의 변수를 추가로 더해주는 함수
        };
    };
    
    let newExam = new NewlecExam(3,3,3);
    console.log(newExam.total());

    console.log(typeof exam1, typeof Exam, typeof NewlecExam);
    console.log(exam instanceof Exam, exam1 instanceof Exam);
    console.log(exam instanceof NewlecExam, newExam instanceof NewlecExam);
    console.log(Object.hasOwn(exam.__proto__, 'total'));
}
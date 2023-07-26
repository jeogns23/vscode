{
    // 생성자
    function f1(){
        console.log("f1");
        console.log(this);
        this.kor = 20;
    };

    var x1 = f1();
    console.log("x1: ", x1);
    console.log("----구분선----");
    var x2 = new f1();
    console.log("x2: ", x2);
}
console.log("--------------------------------------");
{
    //캡슐화
    // function Exam(){
    //     var kor = 20;
    //     var eng = 20;
    //     var math = 100;
        
    //     this.total = function(){
    //         return kor+eng+math;
    //     };
        
    // };
    // var exam = new Exam();
    // console.log(exam.total());
}
console.log("--------------------------------------");
{
    //생성자 오버로드
    function Exam(kor, eng, math){
        this.kor = kor || 0;
        this.eng = eng || 0;
        this.math = math || 0;
        
        this.total = function(){
            return this.kor+this.eng+this.math;
        };
        
        this.avg = function(){
            return this.total()/3;
        };

    };

    // Exam.prototype = { 
    //     total : function(){
    //         return this.kor+eng+math;
    //     }
    // }

    var exam = new Exam();
    Exam.prototype.total = function(){
        return this.kor+this.eng+this.math;
    }
    console.log("함수는?")
    console.log(Exam.prototype)

    var exam = new Exam();
    // console.log(exam.total());
    // console.log(exam.avg());
    var exam = new Exam(10,20,30);
    // console.log(exam.total());
    // console.log(exam.avg());

    var exam1 = new exam.constructor(10,10,10);
    //exam.constructor == Exam;
    // console.log(exam1.total());
    // console.log(exam1.avg());
}
console.log("--------------------------------------");
{
    //prototype을 이용한 캡슐화
    var exam1 = new Exam(1,1,1);
    var exam2 = new Exam(2,2,2);
    console.log(exam1.total === exam2.total);
    
    function Exam(kor, eng, math){
        this.kor = kor || 0;
        this.eng = eng || 0;
        this.math = math || 0;
    };
    
    Exam.prototype={
        total :function(){
            return this.kor+this.eng+this.math;
        },
        avg : function(){
            return this.total()/3;
        }
    };
    
    var exam5 = new Exam(1,2,3)
    
    console.log(exam5.total());
}
console.log("--------------------------------------");
{
    var nums = [];
    console.log(typeof(nums));
    console.log(nums instanceof Array);
    console.log(Array.isArray(nums));
}
console.log("--------------------------------------");
{
    function NewlecExam(){

    };

    NewlecExam.constructor = exam2;

    var newExam = new NewlecExam();
    console.log(newExam.__proto__);
    console.log(Object.getPrototypeOf(newExam));
    console.log(NewlecExam.prototype)
    console.log(newExam.constructor === NewlecExam)
    console.log(exam2.constructor === Exam)

    console.log(exam2.constructor)
}
console.log("--------------------------------------");
{
    function Omok(){
        this.x = 0;
        this.y = 0;
    };

    console.log(Omok.prototype);
    console.log(Omok.prototype.constructor);

    var omok1 = new Omok;
    console.log(omok1.constructor);

    Omok.prototype = {};

    var omok2 = new Omok;
    console.log(omok2.constructor);
}
console.log("--------------------------------------");
{
    //inheriting
    var base = {
        kor:10,
        eng:50,
        math:40
    }

    var exam = {
        //kor = 3;
        com: 20,
        __proto__:base
    };

    var exam1 = {
        com: 30,
        __proto__:base
    };

    exam.kor = 3; //Shadowing = 부모객체를 뜻하지 않게 가려버림.
    exam1.kor = 4;
    console.log(exam.kor, exam.eng, exam.math, exam.com);
    console.log(exam1.kor, exam1.eng, exam1.math, exam1.com);
}
console.log("--------------------------------------");
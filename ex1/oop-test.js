function Exam(){
    this.kor = 0;
    this.eng = 0;
    this.math = 0;
}


var exam1 = new Exam();
console.log(exam1.__proto__.constructor)
console.log(exam1.__proto__)
console.log(exam1.__proto__.__proto__)
console.log(exam1.__proto__.__proto__.__proto__)

console.log("----------------------")

Exam.prototype = { 
    constructor : Exam,
    total : function(){
        return this.kor+eng+math;
    }
}

// Exam.prototype.total = function(){
//     return this.kor+eng+math;
// }

var exam2 = new Exam();
console.log(exam2.__proto__.constructor)
console.log(exam2.__proto__)
console.log(exam2.__proto__.__proto__)
console.log(exam2.__proto__.__proto__.__proto__)
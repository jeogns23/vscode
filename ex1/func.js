{
    var add = new Function("x, y", "return x+y");
    console.log(add(3,4));

    var add = function(x,y){
        return x+y;
    };
    console.log(add(3,4));

    // function add(x,y){
    //     return x+y;
    // };
    // console.log(add(3,4));
}
console.log("--------------------------------------");
{
    var add = function(){
        // console.log("arguments:" + arguments.length)
        // var x = arguments[0];
        // var y = arguments[1];

        var sum = 0;
        for(var arg of arguments)
            sum += arg;

        return sum;
        // return x+y;
    };
    console.log(add(2,3,4,5));
}
console.log("--------------------------------------");
{   
    //전역 변수의 특징
    // var a = 2; //var -> 준비물, var 없으면 준비x
    // console.log(window.a);
    // for(var k in window)
    //     console.log(k)
}
console.log("--------------------------------------");
{   
    //outer 변수의 특징
    var f1 = function(){
        var a = 1;
        console.log(a)

        function f2(){
            a = 10;
            a++;
            console.log(a);
        };

        f2();

        console.log(a);
    };
    f1();
}
console.log("--------------------------------------");
{
    var fclosure = null;
    var fclosure2 = null;
    var f1 = function(){
        var a = 1;
        a++;
        console.log("f1 : " + a);

            function f2(){
                a++;
                console.log("f2 : " + a);
            };
            fclosure = f2;

            function f3(){
                a--;
                console.log("f3 : " + a);
            };
            fclosure2 = f3;
    };

    f1();
    f1();
    f1();
    fclosure();
    fclosure();
    fclosure();
    fclosure2()
    fclosure2()
    fclosure2()
}
console.log("--------------------------------------");
function Button(x, y, radius, color){
    this.x = x || 850;
    this.y = y || 50;
    this.radius = radius || 30;
    this.color = color || "orange";

    this.invalide();
}

Button.prototype = {
    constructor: Button,
    update : function(){
        this.radius++;
        if(this.radius == 40){
            this.radius = 0;
        }
            
        this.invalide();
    },

    draw : function(){

        var originFillStyle = ctx.fillStyle;
        ctx.fillStyle = this.color;
        ctx.fill(this.shapePath);
        ctx.btnShape = originFillStyle;

    },

    // increase : function(){
    //     this.radius += 20;
    // },

    isLocated : function(x, y){
        var check = ctx.isPointInPath(this.shapePath, x, y);
        console.log(check)
        return check;
    }, 

    invalide : function(){
        var d = this.radius;

        var hw = Math.sqrt(d*d - (d/2)*(d/2));
        var pos1 = {x:this.x, y:this.y-d};
        var pos2 = {x:this.x-hw, y:this.y+(d/2)};
        var pos3 = {x:this.x+hw, y:this.y+(d/2)};
    
        this.shapePath = new Path2D();
        this.shapePath.moveTo(pos1.x, pos1.y);
        this.shapePath.lineTo(pos2.x, pos2.y);
        this.shapePath.lineTo(pos3.x, pos3.y);
    },

    action : function(){
        this.radius = 40;
        this.invalide();
    }
}
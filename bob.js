class Bob{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.circle(x, y, 30,options);
        //this.Image = loadImage("")
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        angleMode(RADIANS);
        rotate(angle);
        //image(this.Image,0,0)
        circle(0,0,30);  
        //fill("brown");
        pop();

    }
}
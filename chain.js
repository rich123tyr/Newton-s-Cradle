class Chain{
    constructor(body1,point2){
        var options={
            bodyA : body1,
            pointB : point2,
            length : 5,
            stiffness : 0.04,
        }

        this.chain = Constraint.create(options);
        //this.bodyA = bodyA;
        //this.pointB = pointB;
        World.add(world, this.chain);
    }
   

    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.pointB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();

    }

}
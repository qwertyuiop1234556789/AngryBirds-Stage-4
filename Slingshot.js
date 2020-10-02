class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200 ,20);
        image(this.sling2, 175, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 23, 8);
            if (pointA.x<220){
            image(this.sling3, pointA.x-30, pointA.y-5, 15, 25);
            strokeWeight(10);
            line(pointA.x-25, pointA.y, pointB.x-5, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+20, pointB.y);
            }   else{
            image(this.sling3, pointA.x+20, pointA.y-5, 15, 25);
            strokeWeight(4);
            line(pointA.x+25, pointA.y, pointB.x-5, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+20, pointB.y);
            }
        }
    }
    
}
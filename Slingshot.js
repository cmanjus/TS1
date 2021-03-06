class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 25
        }
        this.pointB = pointB;
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(this.sling)
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(255);
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}
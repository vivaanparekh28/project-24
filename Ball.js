class Ball {
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body=Bodies.circle(100,650,20,options)
        World.add(world, this.body);

    }
    display(){
        push()
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,20);
        pop()
    }

}
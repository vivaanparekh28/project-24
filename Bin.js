class Bin{
constructor(x,y,width,height){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    
    World.add(world, this.body);
   // Matter.Body.setAngle(this.body,angle);
this.width=width
this.height=height
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
push()
fill("blue")
translate(pos.x,pos.y)
        angleMode(RADIANS);
        rotate(angle);
rectMode(CENTER)
rect(0,0,this.width,this.height);
pop()

}

}
class Ball{
    constructor(x,y,radius){
      var  options={
density:1,
restitution:0.2
        }
        this.object=Bodies.circle(x,y,radius,options);
        World.add(world,this.object);
        this.r=radius;
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.object.position.x,this.object.position.y,this.r)
    }
}
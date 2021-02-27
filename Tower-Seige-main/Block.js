class Block{
    constructor(x,y,w,h){
       var options={
restitution:0.3
        }
        this.object=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.object);
        this.width=w;
        this.height=h;
    }
    display(){
        push ()
        translate (this.object.position.x,this.object.position.y);
        rotate(this.object.angle);

        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop ();
    }
}
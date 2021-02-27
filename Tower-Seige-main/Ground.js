class Ground{
    constructor(x,y,w,h){
       var options={
isStatic:true
        }
        this.object=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.object);
        this.width=w;
        this.height=h;
    }
    display(){
        rectMode(CENTER);
        rect(this.object.position.x,this.object.position.y,this.width,this.height)
    }
}
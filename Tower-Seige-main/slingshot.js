class Slingshot{// In index file, check the spelling of file slingshot and a wrong format of writing script.
    //<script src="js/Slingshot.js"></script>-- No need to write js/ because here your files are not in a folder named js
    constructor(a,b){
var prop={
    bodyA:a,
    pointB:b,
    length:10,
    stiffness:0.4
}
this.sling=Matter.Constraint.create(prop)
World.add(world,this.sling);
    }
    fly(){
this.sling.bodyA=null;
    }
    attach(A){
        this.sling.bodyA=A;
    }

    display(){
        if(this.sling.bodyA!=null){
            line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
        }
    }
}
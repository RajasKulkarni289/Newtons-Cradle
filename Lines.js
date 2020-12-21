class Line{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var ops={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(ops)
        World.add(world,this.rope)
    }
    display(){
       var pointA=this.rope.bodyA.position;
       var pointB=this.rope.bodyB.position;
       var anchorx=pointB+this.offsetX;
       var anchory=pointB+this.offsetY;
       fill("black");
       stroke("black");
       line(pointA.x,pointA.y,anchorx,anchory);
    }
}

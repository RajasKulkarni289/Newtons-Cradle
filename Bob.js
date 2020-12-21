class Ball{
    constructor(x,y,r){
        var ops={
            isStatic:false,
            friction:0.5,
            restitution:0.8,
            density:1.2
            }
        this.r=r/2;
        this.body=Bodies.circle(x,y,r/2,ops);
        World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill("pink");
    stroke("pink");
    ellipse(0,0,this.r,this.r)
    pop();
}
}
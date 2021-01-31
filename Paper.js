class Paper{
    constructor(x, y, radius){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:0.5,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var paperpos = this.body.position; 
        push(); 
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        fill("LightBlue");
        stroke("CadetBlue")
        ellipse(0, 0, this.radius, this.radius);
        pop(); 
     

    }
}
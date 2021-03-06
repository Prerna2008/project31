class Plinko{
    constructor(x,y){

        var option = {
            isStatic: true,
            restitution: 0.5,
            density: 0.5
        }

        this.body = Bodies.circle(x,y,10,option);
        this.radius = 10;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, 10, 10);
    }
}

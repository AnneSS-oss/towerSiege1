class Polygon {
    constructor(x, y) {
      var options = {
          'restitution':2,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("orange");
      stroke("pink");
      strokeWeight(3);
      image(this.image,0, 0, this.width, this.height)
      pop();
    }
  };
  
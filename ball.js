class Ball{
 constructor(x, y, width, height){
  var options={
      density:1,
      frictionAir:0.005
  }   
  this.Body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.Body);
 }   
 display() {
    var angle = this.Body.angle;
    push();
    translate(this.Body.position.x, this.Body.position.y);
    rotate(angle);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}

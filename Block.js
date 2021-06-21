class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity=255
    }
  
    display(){
      var pos= this.body.position;
      if(this.body.speed < 6){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
      
      else{
       World.remove(world, this.body);
       push()
       this.Visiblity=this.Visiblity-5
        tint(255,this.Visiblity);
        rect(0,0,this.width, this.height);
       // image(this.image, this.body.position.x, this.body.position.y ,50,50);
     pop()
      }
      
      
     // rectMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
    }
  }
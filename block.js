class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :1.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this .visibility= 255; 
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
       console.log(this. body.speed);
        if (this.body.speed>=2)
        {

          World.remove(world,this.body)
          this.visibility=this.visibility-5;
        }
        else{
        

          
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        tint(255,this.visibility);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}
}
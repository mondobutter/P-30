class Ground{

    constructor(x,y,width,hieght){
        var ground_options={
            isStatic : true
          }
        this.x = x;
        this.y = y;
        this.width = width;
        this.hieght = hieght;
          this.ground = Bodies.rectangle(this.x,this.y,this.width,this.hieght,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}
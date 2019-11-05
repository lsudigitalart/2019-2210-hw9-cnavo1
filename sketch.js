
// var myCar 
// var myCar2

var glitchs = []

let bg;

let timer = 25



function setup() {
   
    bg = loadImage('fts_5.jpg');
    fish = loadImage('Exotic_Fish.png')  
    createCanvas(800, 600);

        
    for (var i = 0; i < 75; i++) {
        glitchs.push(new Glitch(random(1.5)))
    }

    // myCar = new Car (10, 300) //speed, color
    // myCar2 = new Car (50, 300)

    // myCar.display()
    // myCar2.display()
    
}

function draw() {
 
    background(bg);
    
    
   
    

    print(glitchs[0].yMov)

    for(var i = 0; i < 75; i++) {
        glitchs[i].update()
    

    if(mouseY > glitchs[i].yMov && mouseY < (glitchs[i].yMov + 19)) {
        if(mouseX > glitchs[i].xPos && mouseX < (glitchs[i].xPos + 19)) {
          
            glitchs[i].speed = 20
            glitchs[i].speed = fill(95, 251, 249, 0)
        }

}

    image(fish, mouseX, mouseY, 50, 50)

    push()
    fill(225, 225, 225)
    text("Pop The Bubbles!", 10, 35)
    text(timer, 740, 35);
    pop()
    textSize(32)
    fill(95, 251, 249, 70)



}


if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
      push()
    textSize(100)
    fill(225, 225, 225)
    text("GAME OVER", 100, 400);
    pop()
  }
  
}








function Glitch(tempSpeed) {

    

    this.speed = tempSpeed
    this.color = fill(95, 251, 249, 70)
    this.yMov = random(-60, 0, 25)
    this.xPos = random(width, -50, 850)
    
    

    this.update = function(){
        this.yMov += this.speed
        stroke(201, 250, 250)
        fill(0, 0, this.color)
        ellipse(this.xPos, this.yMov, 30, 30)
        
    }
}


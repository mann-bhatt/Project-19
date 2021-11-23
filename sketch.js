var boyIMG, boy
var rockIMG, rock
var roadIMG, road
var Play = 1
var End  = 0  
var gameState = Play
var invisible 
var rocksGroup
var score

function preload(){
  boyIMG = loadImage("boy.png")
  rockIMG = loadImage("rocks.png")
  roadIMG = loadImage("road.jpg")
}

function setup() {
  createCanvas(600,600)  
  background("blue")
    road = createSprite(300,300)
    road.addImage(roadIMG)
    road.scale = 2.5
    road.velocityX = -3  

    boy = createSprite(100,350)  
    boy.addImage(boyIMG)
    boy.scale = 0.2

    invisible = createSprite(200,450,800,20)
    invisible.visible = false             
    
    rocksGroup = createGroup()

    boy.setCollider("rectangle",50,50,50,50)
    boy.debug =     true

    score = 0
}

function draw() { 

  text("Score: "+score, 500,50)

   if(gameState === Play){
     score = score + Math.round(frameCount/60)

    if(road.x < 0){
      road.x = road.width/2
    }

    if(keyDown("space") && boy.y >=350){
      boy.velocityY = -12      

    }

    boy.velocityY = boy.velocityY + 0.8  
    
    spawnRocks()

    if(boy.isTouching(rocksGroup)){
      boy.destroy()
      rocksGroup.destroy(  )
      road.velocity
      gameState = "End"
    }
    if(boy.y >=600){
      gameState = "End"
      
    }

    else if (gameState === End){  
      road.velocityX = 0 
      background("black")
      fill("red")
      textSize(30)
      text("Game Over", 300,300)
      text("Press R to Restart", 300, 400)
    }
  }
   


  drawSprites()

}

function spawnRocks(){
  if (frameCount % 60 === 0){
    var rock = createSprite(380,445,20,20)
    rock.addImage(rockIMG)
      rock.velocityX = -6

    rock.scale = 0.4
    rock.lifetime = 300

    rocksGroup.add(rock           )
  }
}
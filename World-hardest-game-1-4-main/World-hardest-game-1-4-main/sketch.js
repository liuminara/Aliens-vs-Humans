var b, enemyImage, ballImage, scene, ball, alien1, alien2, alien3, score=0, opscore=0, speed=5

function preload(){
  b = loadImage("b.png");
  enemyImage = loadImage("alien.png");
  ballImage = loadImage("ball.png");
}


function setup() {
  createCanvas(400, 400);

  scene = createSprite(200,200);
  scene.addImage(b)
  ball = createSprite(200,345,200,345)
  ball.addImage(ballImage)
  ball.scale=0.1

  alien1 = createSprite(200,280,10,10)
  alien2 = createSprite(200,170,10,10)
  alien3 = createSprite(200,50,10,10)
  alien1.addImage(enemyImage)
  alien2.addImage(enemyImage)
  alien3.addImage(enemyImage)

  alien1.scale=0.3
  alien2.scale=0.3
  alien3.scale=0.3

  score = 0

}

function draw() {
  background(0);
  createEdgeSprites()

  alien1.x=alien1.x+speed
  alien2.x=alien2.x-speed
  alien3.x=alien3.x+speed

  if(alien1.x<0 || alien1.x>width)
  {
    speed=speed*-1
  }


  if(keyDown(UP_ARROW)){
    ball.y=ball.y-3
  }

  if(keyDown(DOWN_ARROW)){
    ball.y=ball.y+3
  }

  if(keyDown(LEFT_ARROW)){
    ball.x=ball.y-3
  }

  if(keyDown(RIGHT_ARROW)){
    ball.x=ball.y+3
  }


  drawSprites();
  textSize(15)
  fill("Yellow")
  text("Humans:"+score,328,30);

  fill("Yellow")
  text("Aliens:"+score,5,30);
}



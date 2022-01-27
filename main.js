const game = new Game();

//new p5.SoundFile("effects/ocean-wave-one")

function preload(){
    game.preload()
}


function setup(){
    createCanvas(800, 600)
    game.setup()
    textFont("roboto")
    textSize(30)
    fill("black")
}

//function music(){
   // let sound = loadSound("effects/ocean-wave-one")
   // sound.loop()
//}

function draw(){
    clear()
    game.draw()
    fill("black")
    textSize(width/30)
    text("Score: " + game.score, 0, height )
    
}

function keyPressed (){
    if(keyCode === 37 || keyCode === 65){
        game.player.left()
    }
    if(keyCode === 39 || keyCode === 83){
        game.player.right()
    }
    if(keyCode === 38 || keyCode === 87){
        game.player.advance()
    }
    if(keyCode === 40 || keyCode === 89){
        game.player.back()
    }
    if(keyCode === 32){
        game.gameStart = true;
    }
    if (keyCode === 32){
        reset()
    }
}

function reset (){
    game.gameOver = false
    game.gameWin = false
    game.waterBottle = []
    game.beer = []
    game.beans =[]
    game.fish = []
    game.turtle = []
    game.pizza = []
    game.bird = []
    game.wind=[]
    game.timer
    game.background
    game.score = 0;
    game.player.x = 315;
    game.player.y = 515 
    loop()
}

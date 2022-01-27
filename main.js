const game = new Game();


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
}

function reset (){
    this.waterBottle = []
    this.beer = []
    this.beans =[]
    this.fish = []
    this.turtle = []
    this.pizza = []
    this.bird = []
    this.wind=[]
    keyPressed()
}

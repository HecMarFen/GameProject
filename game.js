class Game {

    setup(){
        this.background = new Background()
        this.player = new Player()
        this.timer
        this.waterBottle = []
        this.beer = []
        this.beans =[]
        this.fish = []
        this.turtle = []
        this.pizza = []
        this.bird = []
        this.wind=[]
        this.score = 0;
    }

    constructor(){
        this.backgroundImagesStatic = []
        this.backgroundImages = []
        this.waterBottleImage
        this.beerImage
        this.beansImage
        this.fishImage
        this.turtleImage
        this.pizzaImage
        this.birdImage
        this.gameOver = false;
        this.gameWin = false;
        this.gameStart = false;
    }
    preload(){
        this.backgroundImagesStatic = [
            {src: loadImage("backgroundImages/sky7.png"), x:0, y:0, speed: 0},
            {src: loadImage("backgroundImages/sun.png"), x:0, y:0, speed: 0},
            {src: loadImage("backgroundImages/clouds.png"), x: 0, y: -100, speed:0}
        ]
        this.backgroundImages =[
            {src: loadImage("backgroundImages/sea4.png"), x:0, y: -100, speed:1},
            {src: loadImage("backgroundImages/sea3.png"), x:0, y: -100, speed:1},
            {src: loadImage("backgroundImages/sea2.png"), x:0, y: -100, speed:1},
            {src: loadImage("backgroundImages/sea1.png"), x: 0, y: - 100, speed:1},
            {src: loadImage("backgroundImages/beach4.png"), x: 0, y:0, speed:1},
            {src: loadImage("backgroundImages/beach3.png"), x: 0, y:0, speed:1},
            {src: loadImage("backgroundImages/beach2.png"), x: 0, y:0, speed:1},
            {src: loadImage("backgroundImages/beach1.png"), x: 0, y:0, speed:1}
        ]
        this.winImage = loadImage("backgroundImages/cover4.png")
        this.playerImage = loadImage("Crabby/Ground 02.png")
        this.playerImageDead = loadImage("Crabby/DeadCrabby.png")
        this.playerImageVictory = loadImage("Crabby/victory.png")
        this.waterBottleImage = loadImage("trash/waterBottle2.png")
        this.waterBottleImageInit = loadImage("trash/waterBottle.png")
        this.beerImage = loadImage("trash/glassBeer3.png")
        this.beerImageInit= loadImage("trash/glassBeer.png")
        this.beansImage = [
            loadImage("trash/beansCan1.png"),
            loadImage("trash/beansCanLeft1.png"),
        ]
        this.beansImageInit = loadImage("trash/beansCanRight.png")
        this.fishImage = loadImage("animals/fish.png")
        this.turtleImage = loadImage("animals/turtle.png")
        this.pizzaImage = [
            loadImage("trash/pizzaCarton.png"), 
            loadImage("trash/pizzaCartonLeft.png"),
            loadImage("trash/pizzaCartonRight.png"),
            loadImage("trash/pizzaCartonDown.png")
        ]
        this.birdImage = loadImage("animals/bird.png")
        this.windImage = loadImage("effects/wind.png")
        this.controlsImage = loadImage("effects/arrow-png.png")
    }
    wonGame(){
        if(this.score >=200){
            this.gameWin = true;
            rectMode(CENTER);
            fill(153, 255, 255);
            rect(width/2, height/2, 490, 440);
            rectMode(CENTER);
            fill(255, 223, 128),
            rect(width/2, height/2, 470, 420);
            fill(230, 46, 0)
            textFont("Roboto")
            fill(230, 46, 0)
            textSize(width / 20)
            text("VICTORY", 310, 155)
            textSize(width/35)
            text("CRABBY CLEANED THE BEACH", 225, 255)
            text("NOW IT IS SAVE TO GET IN", 255, 280)
            textSize(width / 50)
            textFont("inconsolata")
            text("PRESS SPACE TO PLAY AGAIN", 295, 500)
            image(this.playerImageVictory, 240, 350, 170, 85)
            image(this.winImage, 400,345, 125, 95 )
            this.waterBottle = []
            this.beer = []
            this.beans =[]
            this.fish = []
            this.turtle = []
            this.pizza = []
            this.bird = []
            this.wind=[]
            this.player.x = -1000
            this.player.y = -1000
            noLoop()
        }
    }
    lostGame(){
        //check the gamestatus
        if (this.score < 0){
            this.gameOver = true;
            rectMode(CENTER);
            fill(153, 255, 255);
            rect(width/2, height/2, 490, 440);
            rectMode(CENTER);
            fill(255, 223, 128),
            rect(width/2, height/2, 470, 420);
            fill(230, 46, 0)
            textFont("Roboto")
            fill(230, 46, 0)
            textSize(width / 20)
            text("GAME OVER", 285, 155)
            textSize(width/ 35)
            //text("YOU WERE EATEN BY ...")
            text("THE TRASH TOOK OVER THE BEACH", 205, 255)
            text("IT IS TOXIC TO SWIM IN", 265, 280)
            textSize(width / 50)
            textFont("inconsolata")
            text("PRESS SPACE TO PLAY AGAIN", 295, 500)
            image(this.playerImageDead, 240, 340, 180, 90)
            image(this.pizzaImage[0], 420, 380, 60, 45)
            image(this.beerImageInit, 470, 380)
            image(this.waterBottleImageInit, 490, 370)
            image(this.beansImageInit, 500, 400)
            //game.player.clear()
            this.waterBottle = []
            this.beer = []
            this.beans =[]
            this.fish = []
            this.turtle = []
            this.pizza = []
            this.bird = []
            this.wind=[]
            this.player.x = -1000
            this.player.y = -1000
            noLoop()
        }
    }
    draw(){
        clear()
        this.background.draw()
        if(this.gameStart === false){
            rectMode(CENTER);
            fill(153, 255, 255);
            rect(width/2, height/2, 490, 440);
            rectMode(CENTER);
            fill(255, 223, 128),
            rect(width/2, height/2, 470, 420);
            fill(230, 46, 0)
            textFont("Roboto");
            textSize(width/20);
            text("CLEAN THE BEACH", 215, 155);
            textFont("sans-serif");
            textSize(width/40);
            text("HELP CRABBY CLEANING", 275, 255);
            text("COLLECTING THE TRASH", 275, 280);
            text("WATCH OUT; DO NOT GET", 275, 305);
            text("EATEN BY OTHER ANIMALS", 270 ,330);
            textSize(width / 50);
            textFont("inconsolata");
            text("PRESS SPACE TO START PLAYING", 285, 500)
            image(this.playerImage, 240, 350, 170, 85)
            image(this.controlsImage, 410, 360, 130, 65)
            //insert image of crabby with effect??
            //if(frameCount % 2 === 0){
            //}
        } else { 

        this.wonGame()
        this.lostGame()

        this.player.draw()
        
        if(frameCount % 200 === 0){
            this.waterBottle.push(new WaterBottle(this.waterBottleImage))
            console.log(this.waterBottle)
        }
        this.waterBottle.forEach(function(bottle){
            bottle.draw()
        })
        this.waterBottle = this.waterBottle.filter(bottle => {
            if (bottle.collision(this.player) || bottle.x  < 0 - bottle.width){
                return false
            } else {
                return true
            }
        })
        if(frameCount % 600 === 0){
            this.beer.push(new Beer(this.beerImage))
            console.log(this.beer)
        }
        this.beer.forEach(function(berliner){
            berliner.draw()
        })
        this.beer = this.beer.filter(berliner => {
            if (berliner.collision(this.player) || berliner.x  < 0 - berliner.width){
                return false
            } else {
                return true
            }
        })
        if(frameCount % 650 === 0){
            this.beans.push(new Beans(this.beansImage))
            console.log(this.beans)
        }
        this.beans.forEach(function(bean){
            bean.draw()
        })
        this.beans = this.beans.filter(bean => {
            if (bean.collision(this.player) || bean.x  < 0 - bean.width){
                return false
            } else {
                return true
            }
        })
        if(frameCount % 80 === 0){
            this.fish.push(new Fish(this.fishImage))
            console.log(this.fish)
        }
        this.fish.forEach(function(nemo){
            nemo.draw()
        })
        this.fish = this.fish.filter(nemo => {
            if (nemo.collision(this.player) || nemo.x > width){
                return false
            } else {
                return true
            }
        })
        if(frameCount % 480 === 0 || frameCount % 485 === 0){
            this.turtle.push(new Turtle(this.turtleImage))
            console.log(this.turtle)
        }
        this.turtle.forEach(function(turty){
            turty.draw()
        })
        this.turtle = this.turtle.filter(turty => {
            if (turty.collision(this.player) || turty.x  < 0 - turty.width){
                return false
            } else {
                return true
            }
        })
        if(frameCount % 400 === 0){
            this.pizza.push(new Pizza(this.pizzaImage))
            console.log(this.pizza)
        }
        this.pizza.forEach(function(pizz){
            pizz.draw()
        })
        this.pizza = this.pizza.filter(pizz => {
            if (pizz.collision(this.player) || pizz.x  < 0 - pizz.width || pizz.y > height){
                return false
            } else {
                return true
            }
        })
        if(frameCount % 520 === 0){
            this.bird.push(new Bird(this.birdImage))
            console.log(this.bird)
        }
        this.bird.forEach(function(birdy){
            birdy.draw()
        })
        this.bird = this.bird.filter(birdy => {
            if (birdy.collision(this.player) || birdy.x  >  width){
                return false
            } else {
                return true
            }
        })
        /*if(frameCount % 400 === 0){
            this.wind.push(new Wind(this.windImage))
            console.log(this.wind)
        }
        this.wind.forEach(function(windy){
            windy.draw()
        })
        this.wind = this.wind.filter(windy => {
            if(frameCount % 410 === 0){
                return false
            } else {
                return true
            }
        }*/
    }
}
}
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
        this.gameStart = "preStart";
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
        this.playerImage = loadImage("Crabby/Ground 02.png")
        this.waterBottleImage = loadImage("trash/waterBottle2.png")
        this.beerImage = loadImage("trash/glassBeer3.png")
        this.beansImage = [
            loadImage("trash/beansCan1.png"),
            loadImage("trash/beansCanLeft1.png"),
        ]
        this.fishImage = loadImage("animals/fish.png")
        this.turtleImage = loadImage("animals/turtle.png")
        this.pizzaImage = [
            loadImage("trash/pizzaCarton.png"), 
            loadImage("trash/pizzaCartonLeft.png"),
            loadImage("trash/pizzacartonRight.png"),
            loadImage("trash/pizzaCartonDown.png")
        ]
        this.birdImage = loadImage("animals/bird.png")
        this.windImage = loadImage("effects/wind.png")
    }
    winGame(){
        if(this.score>=200){
            textFont("Roboto")
            fill("black")
            textSize(width / 6)
            text("VICTORY")
            textSize(width/ 20)
            text("CRABBY CLEANED THE BEACH; NOW IT CAN GET IN")
            textSize(width / 10)
            textFont("inconsolata")
            text("PRESS SPACE TO PLAY AGAIN")
        }
    }
    lostGame(){
        if (this.score < 0){
            textFont("Roboto")
            fill("black")
            textSize(width / 6)
            text("GAME OVER")
            textSize(width/ 20)
            text("THE TRASH TOOK OVER THE BEACH, IT IS TOXIC TO SWIM IN")
            textSize(width / 10)
            textFont("inconsolata")
            text("PRESS SPACE TO PLAY AGAIN")
        }
    }
    draw(){
        clear()
        this.background.draw()
        if(this.gameStart === "preStart"){
            rectMode(CENTER);
            fill(153, 255, 255);
            rect(width/2, height/2, 390, 440);
            rectMode(CENTER);
            fill(255, 223, 128),
            rect(width/2, height/2, 370, 420);
            fill(230, 46, 0)
            textFont("Roboto");
            textSize(width/10);
            text("CLEAN THE BEACH");
            textFont("sans-serif");
            textSize(width/40);
            text("HELP CRABBY TO CLEAN THE BEACH");
            text("COLLECT THE TRASH");
            text("WATCH OUT; DO NOT GET EATEN BY OTHER ANIMALS");
            textSize(width / 20);
            textFont("inconsolata");
            text("PRESS SPACE TO START CLEANING")

            image(this.playerImage)
            //insert image of crabby with effect??
            //if(frameCount % 2 === 0){
            //}
        }else if(this.gameStart === "start"){
            this.player.draw();
        if(this.gameOver){
            this.lostGame()
        }
        }
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
            if (berliner.collision(this.player) || berliner.x  > width){
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
        
    }
}
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
        this.waterBottleImage = loadImage("trash/waterBottle.png")
        this.beerImage = loadImage("trash/glassBeer.png")
        this.beansImage = loadImage("trash/beansCan.png")
        this.fishImage = loadImage("animals/fish.png")
        this.turtleImage = loadImage("animals/turtle.png")
        this.pizzaImage = loadImage("trash/pizzaCarton.png")
        this.birdImage = loadImage("animals/bird.png")
    }
    draw(){
        clear()
        this.background.draw()
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
        if(frameCount % 125 === 0){
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
        if(frameCount % 580 === 0){
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
        if(frameCount % 550 === 0){
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
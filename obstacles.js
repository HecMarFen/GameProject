class WaterBottle {
    constructor(image){
        this.score = 0
        this.image = image
        this.width = 20;
        this.height = 40;
        this.x = width;
        //substract the gaps from top to bottom add the bottom gap
        this.y = random(175, 340) 
        }
    collision(playerInfo){

        //get the middle of the player
        const playerX = playerInfo.x + playerInfo.width /2
        const playerY = playerInfo.y + playerInfo.height /2
        //get the middle of the obstacle
        const waterBottleX = this.x + this.width / 2
        const waterBottleY = this.y + this.height / 2
        //measure the ditance between the obstacle and the player
        if(dist(waterBottleX, waterBottleY, playerX, playerY) > 30){
            return false
        }else {
            //if true then there is a collision
            game.score += 10;
            return true
        }
    }
    draw(){
        this.x = this.x - 1.5
        this.y = this.y + 0.1
        image(this.image, this.x, this.y, this.width, this.height)
    }
}

class Beer {
    constructor(image){
        this.score = 0
        this.image = image
        this.width = 20;
        this.height = 40;
        this.x = 0 - this.width;
        //substract the gaps from top to bottom add the bottom gap
        this.y = random(175, 250)
    }
    collision(playerInfo){

        //get the middle of the player
        const playerX = playerInfo.x + playerInfo.width /2
        const playerY = playerInfo.y + playerInfo.height /2
        //get the middle of the obstacle
        const beerX = this.x + this.width / 2
        const beerY = this.y + this.height / 2
        //measure the ditance between the obstacle and the player
        if(dist(beerX, beerY, playerX, playerY) > 30){
            return false
        }else {
            //if true then there is a collision
            game.score += 15;
            return true
        }
    }
    draw(){
        if (this.x <= 680){
            this.x = this.x + 0.75
            this.y = this.y + 0.01
        }else {
            this.x = this.x + 0.5
            this.y = this.y + 0.75
        }
        image(this.image, this.x, this.y, this.width, this.height)
    }

}

class Beans {
    constructor(image){
        this.score = 0
        this.image = image
        this.width = 30;
        this.height = 30;
        this.x = width;
        //substract the gaps from top to bottom add the bottom gap
        this.y = random(height - this.height, 450) 
        
    }
    collision(playerInfo){

        //get the middle of the player
        const playerX = playerInfo.x + playerInfo.width /2
        const playerY = playerInfo.y + playerInfo.height /2
        //get the middle of the obstacle
        const beansX = this.x + this.width / 2
        const beansY = this.y + this.height / 2
        //measure the ditance between the obstacle and the player
        if(dist(beansX, beansY, playerX, playerY) > 30){
            return false
        }else {
            //if true then there is a collision
            game.score += 20;
            return true
        }
    }
    draw(){
        if(this.x <= 75){
            this.x = this.x - 1.1
            this.image = game.beansImage[1]
        } else if(this.x <= 150){
            this.x = this.x - 1.1
            this.image = game.beansImage[0]
        }else if(this.x <= 225){
            this.x = this.x - 1.1
            this.image = game.beansImage[1]
        }else if(this.x <= 300){
            this.x = this.x - 1.1
            this.image = game.beansImage[0]
        }else if(this.x <= 375){
            this.x = this.x - 1.1
            this.image = game.beansImage[1]
        }else if(this.x <= 450){
            this.x = this.x - 1.1
            this.image = game.beansImage[0]
        }else if(this.x <= 525){
            this.x = this.x - 1.1
            this.image = game.beansImage[1]
        }else if(this.x <= 600){
            this.x = this.x - 1.1
            this.image = game.beansImage[0]
        }else if(this.x <= 700){
            this.x = this.x - 1.1
            this.image = game.beansImage[1]
        }else{
            this.x = this.x - 1.1
            this.image = game.beansImage[0]
        }
        
        image(this.image, this.x, this.y, this.width, this.height)
    }
}
class Fish {
    constructor(image){
        this.score = 0
        this.image = image
        this.width = 80;
        this.height = 40;
        this.x = 0 - this.width;
        //substract the gaps from top to bottom add the bottom gap
        this.y = random(190, 370)
    }
    collision(playerInfo){

        //get the middle of the player
        const playerX = playerInfo.x + playerInfo.width /2
        const playerY = playerInfo.y + playerInfo.height /2
        //get the middle of the obstacle
        const fishX = this.x + this.width / 2
        const fishY = this.y + this.height / 2
        //measure the ditance between the obstacle and the player
        if(dist(fishX, fishY, playerX, playerY) > 40){
            return false
        }else {
            //if true then there is a collision
            game.score -= 100;
            return true
        }
    }
    draw(){
        if(this.x < 220){
            this.x = this.x + 1.7
        }else if(this.x < 490) {
            this.x = this.x + 3.4
        } else{
            this.x = this.x + 4.8
        }
        image(this.image, this.x, this.y, this.width, this.height)
    }
}

class Turtle {
    constructor(image){
        this.score = 0
        this.image = image
        this.width = 40;
        this.height = 20;
        this.x = width;
        //substract the gaps from top to bottom add the bottom gap
        this.y = random(height - this.height, 500 ) 
    }
    collision(playerInfo){

        //get the middle of the player
        const playerX = playerInfo.x + playerInfo.width /2
        const playerY = playerInfo.y + playerInfo.height /2
        //get the middle of the obstacle
        const turtleX = this.x + this.width / 2
        const turtleY = this.y + this.height / 2
        //measure the ditance between the obstacle and the player
        if(dist(turtleX, turtleY, playerX, playerY) > 40){
            return false
        }else {
            //if true then there is a collision
            game.score -= 60;
            return true
        }
    }
    draw(){
        this.x = this.x - 0.5
        this.y = this.y - 0.05
        image(this.image, this.x, this.y, this.width, this.height)
    }
}
class Pizza {
    constructor(image){
        this.score = 0
        this.image = image
        this.width = 60;
        this.height = 45;
        this.x = width;
        //substract the gaps from top to bottom add the bottom gap
        this.y = (Math.random() * height) / 4
    }
    collision(playerInfo){

        //get the middle of the player
        const playerX = playerInfo.x + playerInfo.width /2
        const playerY = playerInfo.y + playerInfo.height /2
        //get the middle of the obstacle
        const pizzaX = this.x + this.width / 2
        const pizzaY = this.y + this.height / 2
        //measure the ditance between the obstacle and the player
        if(dist(pizzaX, pizzaY, playerX, playerY) > 30){
            return false
        }else {
            //if true then there is a collision
            game.score += 5;
            return true
        }
    }
    draw(){
        if(this.x <= 100){
            this.image = game.pizzaImage[2]
            this.x = this.x - 2
            this.y++
        }else if (this.x <= 240) {
            this.image = game.pizzaImage[0]
            this.x--;
            this.y--
        }else if (this.x <= 260) {
            this.image = game.pizzaImage[1]
            this.x--;
            this.y = this.y - 0.5
        }else if (this.x <= 300) {
            this.image = game.pizzaImage[3]
            this.x--;
            this.y = this.y - 0.6
        }else if (this.x <= 340) {
            this.image = game.pizzaImage[2]
            this.x--;
            this.y = this.y - 0.8
        }else if(this.x <= 380){
            this.image = game.pizzaImage[0]
            this.x = this.x - 0.5
            this.y = this.y +1.2
        }else if(this.x <= 400){
            this.image = game.pizzaImage[1]
            this.x = this.x - 1.3
            this.y = this.y +1.2
        }else if(this.x <= 430){
            this.image = game.pizzaImage[3]
            this.x = this.x - 1.2
            this.y = this.y +1.2
        }else if(this.x <= 450){
            this.image = game.pizzaImage[2]
            this.x = this.x - 1.2
            this.y = this.y +1.2
        }else if(this.x <= 480){
            this.image = game.pizzaImage[0]
            this.x = this.x - 1.2
            this.y = this.y +1.2
        }else if(this.x <= 500){
            this.image = game.pizzaImage[1]
            this.x = this.x - 1.2
            this.y--
        }else if(this.x <= 520){
            this.image = game.pizzaImage[3]
            this.x = this.x - 1.2;
            this.y--
        } else if(this.x <= 550){
            this.image = game.pizzaImage[2]
            this.x = this.x - 1.2;
            this.y--
        }else if(this.x <= 580){
            this.image = game.pizzaImage[0]
            this.x = this.x - 0.8
            this.y = this.y + 1.3
        }else if(this.x <= 630){
            this.image = game.pizzaImage[1]
            this.x = this.x - 0.8
            this.y++
        }else if(this.x <= 650){
            this.image = game.pizzaImage[3]
            this.x = this.x - 0.8
            this.y++
        }else if(this.x <= 700){
            this.image = game.pizzaImage[2]
            this.x = this.x - 0.8
            this.y++
        }else{
            this.image = game.pizzaImage[0]
            this.x--;
            this.y = this.y - 0.2
        }
        image(this.image, this.x, this.y, this.width, this.height)
    }
}

class Bird {
    constructor(image){
        this.score = 0
        this.image = image
        this.width = 50;
        this.height = 50;
        this.x = 0 - this.width;
        //substract the gaps from top to bottom add the bottom gap
        this.y = random(80, 200) 
    }
    collision(playerInfo){

        //get the middle of the player
        const playerX = playerInfo.x + playerInfo.width /2
        const playerY = playerInfo.y + playerInfo.height /2
        //get the middle of the obstacle
        const birdX = this.x + this.width / 2
        const birdY = this.y + this.height / 2
        //measure the ditance between the obstacle and the player
        if(dist(birdX, birdY, playerX, playerY) > 40){
            return false
        }else {
            //if true then there is a collision
            game.score -= 200;
            return true
        }
    }
    draw(){
        if(this.x <= 400){
            this.x = this.x + 3.3
            this.y = this.y + 1.2
        }else {
            this.x = this.x + 3.3;
            this.y--
        }
        image(this.image, this.x, this.y, this.width, this.height)
    }
}
class Wind {
    constructor(image){
        this.x = 50
        this.y = 50
        this.image = image
        this.width = 30
        this.height = 30
    }
    draw(){
        image(this.image, this.x, this.y, this.width, this.height)
    }
}
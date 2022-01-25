class Player{
    constructor(){
        // this.waterCurrent 
        this.width = 190;
        this.height = 95;
        this.x = (width - this.width)/ 2;
        this.y = height - this.height

    }
    draw(){
        //if crabby is in the water then apply the force of the waterCurrent
        //if not let crabby move with the normal parameters
        // this.y += this.waterCurrent
        //this.x -= this.waterCurrent
        if(this.y >= height - this.height){
            this.y = height - this.height
        }
        if(this.y <= 180){
            this.y = 180
        }
        if(this.x <= -45){
            this.x = -45
        }
        if(this.x >= width - 150){
            this.x = width - 150
        }
        image(game.playerImage, this.x, this.y, this.width, this.height)
    }
    left(){
        this.x -= 30
    }
    right(){
        this.x += 30
    }
    advance(){
        this.y -= 30
    }
    back(){
        this.y += 30
    }
    score(){
        game.score
    }
}
//keydown
//change the image
//if the key is ddown the collision else if, else if

//keydown sets a boolean
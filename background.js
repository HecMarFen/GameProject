class Background{
    constructor(){
        this.timer = 0;
    }
    draw(){
        //Image(game.backgroundImages[0].src, 0, 0, width, height)
        //make a better effect on the waves
        game.backgroundImagesStatic.forEach(function(img){
            img.x -= img.speed
            image(img.src, img.x, img.y, width, height)
            image(img.src, img.x + width, img.y , width, height)
            if(img.x <= -width){
                img.x = 0
            }
        })
        if(frameCount % 25 === 0){
            this.timer++
        }
        if(this.timer === 4){
            this.timer = 0;
        }
        if(this.timer === 0){
            image(game.backgroundImages[3].src, 0, -100, width, height)
            image(game.backgroundImages[7].src, 0, 0, width, height)
        }else if(this.timer === 1){
            image(game.backgroundImages[2].src, 0, -100, width, height)
            image(game.backgroundImages[6].src, 0, 0, width, height)
        }else if(this.timer === 2){
            image(game.backgroundImages[1].src, 0, -100, width, height)
            image(game.backgroundImages[5].src, 0, 0, width, height)
        }else if(this.timer === 3){
            image(game.backgroundImages[0].src, 0, -100, width, height)
            image(game.backgroundImages[4].src, 0, 0, width, height)

        }
    }
}
class Ninja {
    x;
    y;
    image;
    speed
    constructor(image, x, y, speed) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.speed = speed;
    }
    moveUp() {
        this.y = this.y - this.speed;
    }
    moveDown() {
        this.y = this.y + this.speed;
    }
    moveRight() {
        this.x += this.speed;
    }
    moveLeft() {
        this.x -= this.speed;
    }
    getNinja(ctx) {
        let newImage = new Image(100, 100);
        newImage.src = this.image;
        ctx.drawImage(newImage, this.x, this.y);
        // newImage.onload = () => {
        //    ctx.drawImage(newImage, this.x, this.y);
        // }
    }
    getImage(changeImage){   
         this.image=changeImage;
    }
}


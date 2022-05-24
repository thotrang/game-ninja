class Obstacle {
    x;
    y;
    width;
    height;
    speed;
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    getObstacle(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }
    moveDown() {
        this.y += this.speed;
    }

}


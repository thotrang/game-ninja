let c = document.getElementById('gameCanvas');
let ctx = c.getContext("2d");

let ninja = new Ninja('img/up1.png', 200, 700, 10);
ninja.getNinja(ctx);
let arrObstacle = [];
for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 600);
    let y = -Math.floor(Math.random() * 200);
    let obstacle = new Obstacle(x, y, 50, 50, 5);
    arrObstacle.push(obstacle);
}
for (let i = 0; i < arrObstacle.length; i++) {
    arrObstacle[i].getObstacle(ctx);
}
let a = 1;
function move() {
    switch (event.keyCode) {
        case 37:
            if (ninja.x > 0)
                ninja.moveLeft();
            a = 4;
            break;
        case 39:
            if (ninja.x + 60 < 600)
                ninja.moveRight();
            a = 3;
            break;
        case 38:
            if (ninja.y + 10 > 0)
                ninja.moveUp();
            a = 1;
            break;
        case 40:
            if (ninja.y + 90 < 900)
                ninja.moveDown();
            a = 2;
            break;
    }
    start();
}
function start() {
    ctx.clearRect(0, 0, 600, 900);
    ninja.getNinja(ctx);
    for (let i = 0; i < arrObstacle.length; i++) {
        arrObstacle[i].getObstacle(ctx);
    }
    vacham();
}
function moveObstacle() {
    for (let i = 0; i < arrObstacle.length; i++) {
        if (arrObstacle[i].y >= 900) {
            arrObstacle[i].y = -Math.floor(Math.random() * 200);;
            arrObstacle[i].x = Math.floor(Math.random() * 600);
        }
        arrObstacle[i].moveDown();
        console.log('1')
    }
    start();
    requestAnimationFrame(moveObstacle);
}
moveObstacle();
function vacham() {
    for (let i = 0; i < arrObstacle.length; i++) {
    if (Math.abs(ninja.x - arrObstacle[i].x) <= arrObstacle[i].width && Math.abs(ninja.y - arrObstacle[i].y) <= arrObstacle[i].height) {
        alert("Bạn đã thua. Chơi lại chứ");
        arrObstacle[i].y = 0;
        arrObstacle[i].x = x = Math.floor(Math.random() * 600);
        location.reload();
    }}

}
let n = 1;
function runUp() {

    n++;
    if (n % 2 == 0) {
        ninja.getImage('img/up1.png');
    }
    else {
        ninja.getImage('img/up2.png');
    }
}
function runDown() {
    n++;
    if (n % 2 == 0) {
        ninja.getImage('img/down1.png');
    }
    else {
        ninja.getImage('img/down2.png');
    }
}
function runleft() {
    n++;
    if (n % 2 == 0) {
        ninja.getImage('img/left1.png');
    }
    else {
        ninja.getImage('img/left2.png');
    }
}
function runRight() {
    n++;
    if (n % 2 == 0) {
        ninja.getImage('img/right1.png');
    }
    else {
        ninja.getImage('img/right2.png');
    }
}
function direction() {
    if (a == 1) return runUp();
    else if (a == 2) return runDown();
    else if (a == 3) return runRight();
    else return runleft();
}
setInterval(direction, 200);

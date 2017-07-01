/**
 * Created by AroundTheCorner on 7/1/2017.
 */
var bird;
var target;
var maxObstacles = 6;
var obstacles = [];

function setup() {
    createCanvas(800, 600);
    resetSketch();
    for (var i = 0; i < maxObstacles; i++) {
        var obstacle = new Obstacle()
    }
    while (obstacles.length < 6) {
        var x = random(700) + 50;
        var y = random(500) + 50;
        var size = random(25) + 5;
        var hasTheSame = false;
        for (var i = 0; i < obstacles.length; i++) {
            var currObstacle = obstacles[i];
            
        }
    }
}

function resetSketch() {
    bird = new Bird(width / 2, height / 2, 30);
    target = new Target(800, 0, 30);
}

function draw() {
    background(0);

    var d = dist(bird.pos.x, bird.pos.y, target.x, target.y)

    if (d <= target.speed) {
        target.gotCaught();
        target.changeColor();
    }

    stroke(200);
    fill(200, 200, 200, 80);

    bird.seek(createVector(target.x, target.y));
    bird.update();
    bird.show();
    target.update();
    target.show();

}
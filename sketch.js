/**
 * Created by AroundTheCorner on 7/1/2017.
 */
var bird;
var target;
var maxObstacles = 15;
var obstacles = [];


function setup() {
    createCanvas(800, 600);
    resetSketch();

    while (obstacles.length < maxObstacles) {
        var x = random(700) + 50;
        var y = random(500) + 50;
        var size = random(50) + 15;
        var doesOverlap = false;

        var currObstacle = new Obstacle(x, y, size);
        if (currObstacle.doOverlap(bird.pos.x, bird.pos.y, bird.size).result) {
            continue;
        }

        for (var i = 0; i < obstacles.length; i++) {
            if (obstacles[i].doOverlap(currObstacle.x, currObstacle.y, currObstacle.size).result) {
                doesOverlap = true;
                break;
            }
        }

        if (! doesOverlap) {
            obstacles.push(currObstacle);
        }
    }
}

function resetSketch() {
    bird = new Bird(width / 2, height / 2, 35);
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

    obstacles.forEach(function (currentValue) {
        currentValue.draw();
    });

    bird.seek(createVector(target.x, target.y));
    bird.update();
    bird.show();
    target.update();
    target.show();

}
/**
 * Created by AroundTheCorner on 7/1/2017.
 */
function Target(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.col = color(255);

    this.speed = 2;

    this.changeColor = function () {
        this.col = color(255, 0, 0);
    }

    this.show = function () {
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.gotCaught = function () {
        this.speed = 0;
    }

    this.update = function () {
        if (this.x == 0) {
            this.x = this.x + this.speed;
        } else if (this.y < height) {
            this.y = this.y + this.speed;
        }
    }
}
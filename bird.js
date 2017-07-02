/**
 * Created by AroundTheCorner on 7/1/2017.
 */
function Bird(x, y, size) {

    this.size = size;
    this.pos = createVector(x, y);

    this.v = createVector();
    this.a = createVector();

    this.maxSeekVelocity = 5;
    this.maxSeekForce = 5;

    this.halfSize = size/2;

    this.topLeft = {
        x: x - this.size /2,
        y: y - this.size /2
    };
    this.bottomRight = {
        x: x + this.size /2,
        y: y + this.size /2
    };

    this.applyForce = function (force) {
        this.a.add(force);
    };

    this.seek = function (target) {

        var desire = p5.Vector.sub(target, this.pos);
        desire.limit(this.maxSeekVelocity);

        var seekForce = p5.Vector.sub(desire, this.v);
        seekForce.limit(this.maxSeekForce);

        var collideResult = this.isColliding();
        if (collideResult.result) {
            var y = collideResult.orientation;
            var x = y*Math.PI/4;
            console.log(x, y);
            this.v.rotate(x);
        } else {
            this.applyForce(seekForce);
        }
    };

    this.update = function () {
        this.v.add(this.a);
        this.pos.add(this.v);

        this.a.mult(0);

        this.topLeft = {
            x: this.pos.x - this.size /2,
            y: this.pos.y - this.size /2
        };
        this.bottomRight = {
            x: this.pos.x + this.size /2,
            y: this.pos.y + this.size /2
        };
    };

    this.show = function () {

        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.v.heading());
        beginShape();
        vertex(-this.size / 2, -this.size / 4);
        vertex(this.size / 2, 0);
        vertex(-this.size / 2, this.size / 4);
        endShape(CLOSE);
        pop();
    };

    this.isColliding = function () {
        var result = {
            result: false
        };

        var self = this;
        obstacles.forEach(function (obstacle) {
            var overlapResult = obstacle.doOverlap(self.pos.x, self.pos.y, self.size);
            if (overlapResult.result) {
                result = overlapResult;
            }
        });

        return result;
    }
}
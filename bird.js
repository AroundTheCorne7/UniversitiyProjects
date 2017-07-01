/**
 * Created by AroundTheCorner on 7/1/2017.
 */
function Bird(x, y, size) {

    this.size = size;
    this.pos = createVector(x, y);

    this.v = createVector();
    this.a = createVector();

    this.maxSeekVelocity = 10;
    this.maxSeekForce = 10;

    this.applyForce = function (force) {
        this.a.add(force);
    }

    this.seek = function (target) {
        var desire = p5.Vector.sub(target, this.pos);
        desire.limit(this.maxSeekVelocity);

        var seekForce = p5.Vector.sub(desire, this.v);
        seekForce.limit(this.maxSeekForce);

        this.applyForce(seekForce);
    }

    this.update = function () {
        this.v.add(this.a);
        this.pos.add(this.v);

        this.a.mult(0);
    }

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
    }
}
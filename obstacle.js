/**
 * Created by AroundTheCorner on 7/1/2017.
 */
function Obstacle(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.halfSize = size/2;

    this.topLeft = {
        x: x - this.halfSize,
        y: y - this.halfSize
    };
    this.bottomRight = {
        x: x + this.halfSize,
        y: y + this.halfSize
    };
}

Obstacle.prototype.doOverlap = function (x, y, size) {
    var w = h = 0.5 * (this.size + size);
    var dx = this.x - x;
    var dy = this.y - y;

    if (Math.abs(dx) <= w && Math.abs(dy) <= h) {
        /* collision! */
        var wy = w * dy;
        var hx = h * dx;

        if (wy > hx) {
            if (wy > -hx) {
                /* collision at the top */
                return {
                    result: true,
                    orientation: -1
                }
            } else {
                /* on the left */
                return {
                    result: true,
                    orientation: -1
                }
            }
        } else {
            if (wy > -hx) {
                /* on the right */
                return {
                    result: true,
                    orientation: +1
                }
            } else {
                /* at the bottom */
                return {
                    result: true,
                    orientation: +1
                }
            }
        }
    }

    return {
        result: false
    };

    if (this.topLeft.x > obstacle.bottomRight.x) {
        return {
            result:false,
            orientation: 1
        };
    }
    if (obstacle.topLeft.x > this.bottomRight.x) {
        return {
            result:false,
            orientation: -1
        };
    }

    if (this.topLeft.y > obstacle.bottomRight.y) {
        return {
            result:false,
            orientation: -1
        };
    }

    if (obstacle.topLeft.y > this.bottomRight.y) {
        return {
            result:false,
            orientation: 1
        };
    }

    return {
        result:true
    };
};

Obstacle.prototype.draw = function () {
    rect(this.topLeft.x, this.topLeft.y, this.size, this.size);
};
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
        fill(this.col);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.gotCaught = function () {
        this.speed = 0;
    }

    this.update = function (update) {
        if (!updateFromBeg) {
            var maxTargetWidth = width - 30;
            var maxTargetHeight = height - 30;
            if (this.x < maxTargetWidth) {
                this.x = this.x + this.speed;
                if (this.x >= maxTargetWidth) {
                    updateFromBeg = true;
                }
            } else if (this.y < maxTargetHeight) {
                this.y = this.y + this.speed;
                if (this.y >= maxTargetHeight) {
                    updateFromBeg = true;
                }
            }
        } else {
            var minTargetWidth = 30;
            var minTargetHeight = 30;
            if (this.x > minTargetWidth) {
                this.x = this.x - this.speed;
                if (this.x <= minTargetWidth) {
                    updateFromBeg = false;
                }
            } else if (this.y > minTargetHeight) {
                this.y = this.y - this.speed;
                if (this.y <= minTargetHeight) {
                    updateFromBeg = false;
                }
            }
        }

    }
}
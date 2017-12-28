var L05_Class;
(function (L05_Class) {
    class Snowflakes {
        constructor(_x, _y, _color, _r) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.r = _r;
        }
        setStartPosition() {
            this.x = Math.random() * 800;
            this.y = Math.random() * 600;
        }
        move() {
            this.x += Math.random();
            this.y += Math.random() * 5;
            if (this.y > 600) {
                this.y = 0;
            }
            if (this.x > 800) {
                this.x = 0;
            }
        }
        draw() {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = this.color;
            L05_Class.crc2.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
        }
    }
    L05_Class.Snowflakes = Snowflakes;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=snowflakes.js.map
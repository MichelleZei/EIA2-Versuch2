var L05_Class;
(function (L05_Class) {
    class Skifahrer {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        setStartPosition() {
            this.x = 155 + Math.random() * 70;
            7;
            this.y = Math.random() * 100;
        }
        move() {
            this.x += Math.random() * 3;
            this.y += Math.random() * 5;
            if (this.y > 600) {
                this.y = 0;
            }
            if (this.x > 500) {
                this.x = 150 + Math.random() * 70;
                this.y = 0;
            }
        }
        draw() {
            //Kopf
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = this.color;
            L05_Class.crc2.strokeStyle = this.color;
            L05_Class.crc2.arc(this.x, this.y, 5, 0, Math.PI * 2);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
            L05_Class.crc2.stroke();
            //K�rper
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = this.color;
            L05_Class.crc2.moveTo(this.x, this.y);
            L05_Class.crc2.lineTo(this.x, this.y + 25);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            //Arme
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = this.color;
            L05_Class.crc2.moveTo(this.x, this.y + 15);
            L05_Class.crc2.lineTo(this.x + 10, this.y + 10);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = this.color;
            L05_Class.crc2.moveTo(this.x, this.y + 15);
            L05_Class.crc2.lineTo(this.x - 10, this.y + 10);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            //Beine
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = this.color;
            L05_Class.crc2.moveTo(this.x, this.y + 25);
            L05_Class.crc2.lineTo(this.x - 10, this.y + 35);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = this.color;
            L05_Class.crc2.moveTo(this.x, this.y + 25);
            L05_Class.crc2.lineTo(this.x + 10, this.y + 35);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            //Ski
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = this.color;
            L05_Class.crc2.moveTo(this.x - 20, this.y + 20);
            L05_Class.crc2.lineTo(this.x, this.y + 50);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = this.color;
            L05_Class.crc2.moveTo(this.x + 5, this.y + 20);
            L05_Class.crc2.lineTo(this.x + 15, this.y + 50);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
        }
    }
    L05_Class.Skifahrer = Skifahrer;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=skifahrer.js.map
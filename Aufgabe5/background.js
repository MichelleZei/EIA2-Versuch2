var L05_Class;
(function (L05_Class) {
    class Background {
        constructor(_x, _y, _fillColor, _r) {
            this.x = _x;
            this.y = _y;
            this.r = _r;
            this.fillColor = "#B0C4DE";
        }
        drawMountain1() {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#EEEEE0";
            L05_Class.crc2.fillRect(this.x, this.y, 800, 600);
            L05_Class.crc2.closePath();
        }
        drawPiste() {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#E0FFFF";
            L05_Class.crc2.arc(this.x + 950, this.y, 800, 0, Math.PI * 2);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
        }
        drawBackground() {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = this.fillColor;
            L05_Class.crc2.arc(this.x + 790, this.y - 200, 600, 0, Math.PI * 2);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
        }
        drawMountain2() {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#EEEEE0";
            L05_Class.crc2.strokeStyle = "#EEEEE0";
            L05_Class.crc2.moveTo(this.x + 700, this.y);
            L05_Class.crc2.lineTo(this.x + 500, this.y + 600);
            L05_Class.crc2.lineTo(this.x + 800, this.y + 600);
            L05_Class.crc2.lineTo(this.x + 800, this.y);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.fill();
        }
        drawSun() {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#FFEC8B";
            L05_Class.crc2.arc(this.x + 550, this.y + 100, this.r, 0, Math.PI * 2);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
        }
        drawLift1() {
            // rechtes Seil
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = "#1F1F1F";
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.moveTo(this.x + 100, this.y);
            L05_Class.crc2.lineTo(this.x + 300, this.y + 600);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.fill();
            // linkes Seil
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = "#1F1F1F";
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.moveTo(this.x, this.y + 80);
            L05_Class.crc2.lineTo(this.x + 100, this.y + 600);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.fill();
            // Liftsitz
            // Halterung
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = "#1F1F1F";
            L05_Class.crc2.moveTo(this.x + 145, this.y + 155);
            L05_Class.crc2.lineTo(this.x + 150, this.y + 150);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = "#1F1F1F";
            L05_Class.crc2.moveTo(this.x + 150, this.y + 150);
            L05_Class.crc2.lineTo(this.x + 150, this.y + 165);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            // Sitze
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.fillRect(this.x + 140, this.y + 165, 20, 20);
            L05_Class.crc2.closePath();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.arc(this.x + 140, this.y + 175, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.arc(this.x + 160, this.y + 175, 10, 1.5 * Math.PI, 0.5 * Math.PI);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
        }
        drawLift2() {
            // Liftsitz
            // Halterung
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = "#1F1F1F";
            L05_Class.crc2.moveTo(this.x + 245, this.y + 455);
            L05_Class.crc2.lineTo(this.x + 250, this.y + 450);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = "#1F1F1F";
            L05_Class.crc2.moveTo(this.x + 250, this.y + 450);
            L05_Class.crc2.lineTo(this.x + 250, this.y + 465);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            // Sitze
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.fillRect(this.x + 240, this.y + 465, 20, 20);
            L05_Class.crc2.closePath();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.arc(this.x + 240, this.y + 475, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.arc(this.x + 260, this.y + 475, 10, 1.5 * Math.PI, 0.5 * Math.PI);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
        }
        drawLift3() {
            // Liftsitz
            // Halterung
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = "#1F1F1F";
            L05_Class.crc2.moveTo(this.x + 47, this.y + 355);
            L05_Class.crc2.lineTo(this.x + 52, this.y + 350);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.strokeStyle = "#1F1F1F";
            L05_Class.crc2.moveTo(this.x + 52, this.y + 350);
            L05_Class.crc2.lineTo(this.x + 52, this.y + 365);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            // Sitze
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.fillRect(this.x + 42, this.y + 365, 20, 20);
            L05_Class.crc2.closePath();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.arc(this.x + 42, this.y + 375, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#1F1F1F";
            L05_Class.crc2.arc(this.x + 62, this.y + 375, 10, 1.5 * Math.PI, 0.5 * Math.PI);
            L05_Class.crc2.closePath();
            L05_Class.crc2.fill();
        }
    }
    L05_Class.Background = Background;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=background.js.map
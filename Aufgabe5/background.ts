namespace L05_Class {
    export class Background {
        x: number;
        y: number;
        r: number;
        fillColor: string;

        constructor(_x: number, _y: number, _fillColor: string, _r: number) {
            this.x = _x;
            this.y = _y;
            this.r = _r;
            this.fillColor = "#B0C4DE";
        }
        
        drawMountain1(): void {
            crc2.beginPath();
            crc2.fillStyle = "#EEEEE0";
            crc2.fillRect(this.x, this.y, 800, 600);
            crc2.closePath();
        }
        
        drawPiste(): void {
            crc2.beginPath();
            crc2.fillStyle = "#E0FFFF";
            crc2.arc(this.x + 950, this.y, 800, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
        }

        drawBackground(): void {
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.arc(this.x + 790, this.y - 200, 600, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
        }

        drawMountain2(): void {
            crc2.beginPath();
            crc2.fillStyle = "#EEEEE0";
            crc2.strokeStyle = "#EEEEE0";
            crc2.moveTo(this.x + 700, this.y);
            crc2.lineTo(this.x + 500, this.y + 600);
            crc2.lineTo(this.x + 800, this.y + 600);
            crc2.lineTo(this.x + 800, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }     
           
        drawSun(): void {
            crc2.beginPath();
            crc2.fillStyle = "#FFEC8B";
            crc2.arc(this.x + 550, this.y + 100, this.r, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
        }

        drawLift1(): void {
            // rechtes Seil
            crc2.beginPath();
            crc2.strokeStyle =  "#1F1F1F";
            crc2.fillStyle =  "#1F1F1F";
            crc2.moveTo(this.x + 100 , this.y);
            crc2.lineTo(this.x + 300, this.y + 600);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            // linkes Seil
            crc2.beginPath();
            crc2.strokeStyle =  "#1F1F1F";
            crc2.fillStyle = "#1F1F1F";
            crc2.moveTo(this.x, this.y + 80);
            crc2.lineTo(this.x + 100, this.y + 600);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            // Liftsitz
            // Halterung
            crc2.beginPath();
            crc2.strokeStyle =  "#1F1F1F";
            crc2.moveTo(this.x + 145, this.y + 155);
            crc2.lineTo(this.x + 150, this.y + 150);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle =  "#1F1F1F";
            crc2.moveTo(this.x + 150, this.y + 150);
            crc2.lineTo(this.x + 150, this.y + 165);
            crc2.closePath();
            crc2.stroke();

            // Sitze
            crc2.beginPath();
            crc2.fillStyle =  "#1F1F1F";
            crc2.fillRect(this.x + 140, this.y + 165, 20, 20);
            crc2.closePath();

            crc2.beginPath();
            crc2.fillStyle =  "#1F1F1F";
            crc2.arc(this.x + 140, this.y + 175, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle =  "#1F1F1F";
            crc2.arc(this.x + 160, this.y + 175, 10, 1.5 * Math.PI, 0.5 * Math.PI);
            crc2.closePath();
            crc2.fill();

        }

        drawLift2(): void {
            // Liftsitz
            // Halterung
            crc2.beginPath();
            crc2.strokeStyle = "#1F1F1F";
            crc2.moveTo(this.x + 245, this.y + 455);
            crc2.lineTo(this.x + 250, this.y + 450);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle = "#1F1F1F";
            crc2.moveTo(this.x + 250, this.y + 450);
            crc2.lineTo(this.x + 250, this.y + 465);
            crc2.closePath();
            crc2.stroke();

            // Sitze
            crc2.beginPath();
            crc2.fillStyle = "#1F1F1F";
            crc2.fillRect(this.x + 240, this.y + 465, 20, 20);
            crc2.closePath();

            crc2.beginPath();
            crc2.fillStyle = "#1F1F1F";
            crc2.arc(this.x + 240, this.y + 475, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#1F1F1F";
            crc2.arc(this.x + 260, this.y + 475, 10, 1.5 * Math.PI, 0.5 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
        drawLift3(): void {
            // Liftsitz
            // Halterung
            crc2.beginPath();
            crc2.strokeStyle = "#1F1F1F";
            crc2.moveTo(this.x + 47, this.y + 355);
            crc2.lineTo(this.x + 52, this.y + 350);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle = "#1F1F1F";
            crc2.moveTo(this.x + 52, this.y + 350);
            crc2.lineTo(this.x + 52, this.y + 365);
            crc2.closePath();
            crc2.stroke();

            // Sitze
            crc2.beginPath();
            crc2.fillStyle = "#1F1F1F";
            crc2.fillRect(this.x + 42, this.y + 365, 20, 20);
            crc2.closePath();

            crc2.beginPath();
            crc2.fillStyle = "#1F1F1F";
            crc2.arc(this.x + 42, this.y + 375, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#1F1F1F";
            crc2.arc(this.x + 62, this.y + 375, 10, 1.5 * Math.PI, 0.5 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
           
    }
}
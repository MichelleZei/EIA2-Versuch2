/*
Aufgabe: Aufgabe 5 - Skipiste
Name: Michelle Zeißner
Matrikel: 254665
Datum: 27.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L05_Class {    
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let snow: Snowflakes[] = [];
    let ski: Skifahrer[] = [];
    let imgData: ImageData;
    let r: number = 5 + Math.random() * 20;

    function init(_event: Event): void {
        let y: number = 0;
        let x: number = 0;
        let fillColor: string = "#B0C4DE";
        let color: string = "000000";
        let b: Background = new Background(x,y, fillColor, r);
        
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        b.drawMountain1();
        b.drawPiste();
        b.drawBackground();
        b.drawMountain2();
        b.drawSun();
        b.drawLift1();
        b.drawLift2();
        b.drawLift3();
       
        drawBaum(600, 500, "#556B2F");
        
        //Raum für die Bäume festlegen, in dem sie random verteilt sind

        for (var i: number = 0; i < 5; i++) {
            let x: number = 600 + Math.random() * 180;
            let y: number = 300 + Math.random() * 270;

            drawBaum(x, y, "#556B2F");
        }

        for (var i: number = 0; i < 5; i++) {
            let x: number = 600 + Math.random() * 180;
            let y: number = 300 + Math.random() * 270;

            drawBaum(x, y, "#458B00");
        }

        imgData = crc2.getImageData(0, 0, 800, 600);
        
        //Startpositionen Schneeflocken und Skifahrer
        
        for (var i: number = 0; i < 200; i++) {
            let thecolor: string = "ffffff";
            let s: Snowflakes = new Snowflakes(x, y, thecolor, r);
            s.x = Math.random() * 800;
            s.y = Math.random() * 600;
            
            snow[i] = s;
        }
        
        for (var i: number = 0; i < 10; i++) {
            let s: Skifahrer = new Skifahrer(x, y, color);
            s.setStartPosition();            
            ski[i] = s;
        }

        window.setTimeout(animate, 20);
    }

    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        
        //Animation Schneeflocken

        for (var i: number = 0; i < 100; i++) {
            let s: Snowflakes = snow[i];
            s.move();

            s.draw();
        }
        
        //Animation Skifahrer
        
        for (var i: number = 0; i < 5; i++){
            let s: Skifahrer = ski [i];
            s.move();
            
            s.draw();
        }
        
        window.setTimeout(animate, 20);
    }

    function drawBaum(_x: number, _y: number, _fillColor: string): void {

        // Tannenbaum
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 10, _y + 5);
        crc2.lineTo(_x - 5, _y + 10);
        crc2.lineTo(_x - 20, _y + 15);
        crc2.lineTo(_x - 10, _y + 20);
        crc2.lineTo(_x - 30, _y + 25);
        crc2.lineTo(_x - 20, _y + 30);
        crc2.lineTo(_x + 20, _y + 30);
        crc2.lineTo(_x + 30, _y + 25);
        crc2.lineTo(_x + 10, _y + 20);
        crc2.lineTo(_x + 20, _y + 15);
        crc2.lineTo(_x + 5, _y + 10);
        crc2.lineTo(_x + 10, _y + 5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    
}
/*
Aufgabe: Aufgabe 3 - Skipiste
Name: Michelle Zeißner
Matrikel: 
Datum: 30.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L3_Animation {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let x: number[] = [];
    let y: number[] = [];
    let x_ski: number[] = [];
    let y_ski: number[] = [];
    let r: number = Math.random() * 10;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawMountain1(0, 0, "#EEEEE0");
        drawPiste(950, 0, "#E0FFFF");
        drawBackground(790, -200, "#B0C4DE");
        drawMountain2(700, 0, "#EEEEE0");
        drawSun(550, 100, 30, "#FFEC8B");
        drawLift1(100, 0, "#1F1F1F");
        drawLift2(200, 300, "#1F1F1F");
        drawLift3(2, 200, "#1F1F1F");
        drawBaum(600, 500, "#556B2F");
        //drawSkifahrer(155, 0, "000000");


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
        
        for (var i: number = 0; i < 200; i++) {
            x[i] = Math.random() * 800;
            y[i] = Math.random() * 600;
        }
        
        for (var i: number = 0; i < 10; i++) {
            x_ski[i] = 155 + Math.random() * 70;
            y_ski[i] = Math.random() * 100;
        }

        window.setTimeout(animate, 20);
    }

    function animate(): void {
        crc2.putImageData(imgData, 0, 0);

        for (var i: number = 0; i < 100; i++) {
            x[i] += Math.random();
            y[i] += Math.random() * 5;

            if (y[i] > 600) {
                y[i] = 0;
            }
            
            if(x[i] > 800) {
                x[i] = 0;
            } 

            drawSnowflakes(x[i], y[i], "#F8F8FF", r)
        }
        
        for (var i: number = 0; i < 5; i++){
            x_ski[i] += Math.random() * 3;
            y_ski[i] += Math.random() * 5;
            
            if(y_ski[i] > 600){
                y_ski[i] = 0;    
            }
            
            if(x_ski[i] > 500) {
                x_ski[i] = 150 + Math.random()*70;
                y_ski[i] = 0;
            }
            
            drawSkifahrer(x_ski[i], y_ski[i], "#000000");
        }
        
        window.setTimeout(animate, 20);
    }

    function drawBackground(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 600, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }

    function drawSun(_x: number, _y: number, _r: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, _r, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }

    function drawMountain1(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x, _y, 800, 600);
        crc2.closePath();
    }

    function drawLift1(_x: number, _y: number, _fillColor: string): void {
        // rechtes Seil
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 200, _y + 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        // linkes Seil
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x - 100, _y + 80);
        crc2.lineTo(_x, _y + 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        // Liftsitz
        // Halterung
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x + 45, _y + 155);
        crc2.lineTo(_x + 50, _y + 150);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x + 50, _y + 150);
        crc2.lineTo(_x + 50, _y + 165);
        crc2.closePath();
        crc2.stroke();

        // Sitze
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x + 40, _y + 165, 20, 20);
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 40, _y + 175, 10, 0.5 * Math.PI, 1.5 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 60, _y + 175, 10, 1.5 * Math.PI, 0.5 * Math.PI);
        crc2.closePath();
        crc2.fill();

    }

    function drawLift2(_x: number, _y: number, _fillColor: string): void {

        // Liftsitz
        // Halterung
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x + 45, _y + 155);
        crc2.lineTo(_x + 50, _y + 150);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x + 50, _y + 150);
        crc2.lineTo(_x + 50, _y + 165);
        crc2.closePath();
        crc2.stroke();

        // Sitze
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x + 40, _y + 165, 20, 20);
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 40, _y + 175, 10, 0.5 * Math.PI, 1.5 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 60, _y + 175, 10, 1.5 * Math.PI, 0.5 * Math.PI);
        crc2.closePath();
        crc2.fill();

    }

    function drawLift3(_x: number, _y: number, _fillColor: string): void {

        // Liftsitz
        // Halterung
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x + 45, _y + 155);
        crc2.lineTo(_x + 50, _y + 150);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x + 50, _y + 150);
        crc2.lineTo(_x + 50, _y + 165);
        crc2.closePath();
        crc2.stroke();

        // Sitze
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x + 40, _y + 165, 20, 20);
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 40, _y + 175, 10, 0.5 * Math.PI, 1.5 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 60, _y + 175, 10, 1.5 * Math.PI, 0.5 * Math.PI);
        crc2.closePath();
        crc2.fill();

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

    function drawPiste(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 800, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }

    function drawMountain2(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 200, _y + 600);
        crc2.lineTo(_x + 100, _y + 600);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawSnowflakes(_x_snow: number, _y: number, _fillColor: string, _r: number): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x_snow, _y, _r, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }
    
    function drawSkifahrer(_x: number, _y: number, _strokeColor: string): void {
        
        //Kopf
        crc2.beginPath();
        crc2.fillStyle = _strokeColor;
        crc2.strokeStyle = _strokeColor
        crc2.arc(_x, _y, 5, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        //Körper
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y)
        crc2.lineTo(_x, _y + 25)
        crc2.closePath();
        crc2.stroke();
        
        //Arme
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y + 15)
        crc2.lineTo(_x + 10, _y + 10)
        crc2.closePath();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y + 15)
        crc2.lineTo(_x - 10, _y + 10)
        crc2.closePath();
        crc2.stroke();
        
        //Beine
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y + 25)
        crc2.lineTo(_x - 10, _y + 35)
        crc2.closePath();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y + 25)
        crc2.lineTo(_x + 10, _y + 35)
        crc2.closePath();
        crc2.stroke();
        
        //Ski
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 20, _y + 20)
        crc2.lineTo(_x , _y + 50)
        crc2.closePath();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 5, _y + 20)
        crc2.lineTo(_x + 15, _y + 50)
        crc2.closePath();
        crc2.stroke();
    }
}
/*
Aufgabe: Aufgabe 4 - Skipiste
Name: Michelle Zei�ner
Matrikel:
Datum: 19.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L4_Schneegestoeber;
(function (L4_Schneegestoeber) {
    window.addEventListener("load", init);
    let crc2;
    let imgData;
    let x = [];
    let y = [];
    let x_ski = [];
    let y_ski = [];
    let r = Math.random() * 10;
    let snow = [];
    let ski = [];
    function init(_event) {
        let canvas;
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
        //Raum f�r die B�ume festlegen, in dem sie random verteilt sind
        for (var i = 0; i < 5; i++) {
            let x = 600 + Math.random() * 180;
            let y = 300 + Math.random() * 270;
            drawBaum(x, y, "#556B2F");
        }
        for (var i = 0; i < 5; i++) {
            let x = 600 + Math.random() * 180;
            let y = 300 + Math.random() * 270;
            drawBaum(x, y, "#458B00");
        }
        imgData = crc2.getImageData(0, 0, 800, 600);
        //Startpositionen Schneeflocken und Skifahrer
        for (var i = 0; i < 200; i++) {
            let s = { x: 0, y: 0, color: " " };
            s.x = Math.random() * 800;
            s.y = Math.random() * 600;
            snow[i] = s;
        }
        for (var i = 0; i < 10; i++) {
            let s = { x: 0, y: 0, color: " " };
            s.x = 155 + Math.random() * 70;
            s.y = Math.random() * 100;
            ski[i] = s;
        }
        window.setTimeout(animate, 20);
    }
    function animate() {
        crc2.putImageData(imgData, 0, 0);
        //Animation Schneeflocken
        for (var i = 0; i < 100; i++) {
            let s = snow[i];
            s.x += Math.random();
            s.y += Math.random() * 5;
            if (s.y > 600) {
                s.y = 0;
            }
            if (s.x > 800) {
                s.x = 0;
            }
            drawSnowflakes(s.x, s.y, "#F8F8FF", r);
        }
        //Animation Skifahrer
        for (var i = 0; i < 5; i++) {
            let s = ski[i];
            s.x += Math.random() * 3;
            s.y += Math.random() * 5;
            if (s.y > 600) {
                s.y = 0;
            }
            if (s.x > 500) {
                s.x = 150 + Math.random() * 70;
                s.y = 0;
            }
            drawSkifahrer(s.x, s.y, "#000000");
        }
        window.setTimeout(animate, 20);
    }
    function drawBackground(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 600, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }
    function drawSun(_x, _y, _r, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, _r, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }
    function drawMountain1(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x, _y, 800, 600);
        crc2.closePath();
    }
    function drawLift1(_x, _y, _fillColor) {
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
    function drawLift2(_x, _y, _fillColor) {
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
    function drawLift3(_x, _y, _fillColor) {
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
    function drawBaum(_x, _y, _fillColor) {
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
    function drawPiste(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 800, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }
    function drawMountain2(_x, _y, _fillColor) {
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
    function drawSnowflakes(_x_snow, _y, _fillColor, _r) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x_snow, _y, _r, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }
    function drawSkifahrer(_x, _y, _strokeColor) {
        //Kopf
        crc2.beginPath();
        crc2.fillStyle = _strokeColor;
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x, _y, 5, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //K�rper
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 25);
        crc2.closePath();
        crc2.stroke();
        //Arme
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y + 15);
        crc2.lineTo(_x + 10, _y + 10);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y + 15);
        crc2.lineTo(_x - 10, _y + 10);
        crc2.closePath();
        crc2.stroke();
        //Beine
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y + 25);
        crc2.lineTo(_x - 10, _y + 35);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y + 25);
        crc2.lineTo(_x + 10, _y + 35);
        crc2.closePath();
        crc2.stroke();
        //Ski
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 20, _y + 20);
        crc2.lineTo(_x, _y + 50);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 5, _y + 20);
        crc2.lineTo(_x + 15, _y + 50);
        crc2.closePath();
        crc2.stroke();
    }
})(L4_Schneegestoeber || (L4_Schneegestoeber = {}));
//# sourceMappingURL=aufgabe4.js.map
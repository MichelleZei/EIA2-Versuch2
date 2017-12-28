/*
Aufgabe: Aufgabe 5 - Skipiste
Name: Michelle Zei�ner
Matrikel: 254665
Datum: 27.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L05_Class;
(function (L05_Class) {
    window.addEventListener("load", init);
    let snow = [];
    let ski = [];
    let imgData;
    let r = 5 + Math.random() * 20;
    function init(_event) {
        let y = 0;
        let x = 0;
        let fillColor = "#B0C4DE";
        let color = "000000";
        let b = new L05_Class.Background(x, y, fillColor, r);
        L05_Class.canvas = document.getElementsByTagName("canvas")[0];
        L05_Class.crc2 = L05_Class.canvas.getContext("2d");
        b.drawMountain1();
        b.drawPiste();
        b.drawBackground();
        b.drawMountain2();
        b.drawSun();
        b.drawLift1();
        b.drawLift2();
        b.drawLift3();
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
        imgData = L05_Class.crc2.getImageData(0, 0, 800, 600);
        //Startpositionen Schneeflocken und Skifahrer
        for (var i = 0; i < 200; i++) {
            let thecolor = "ffffff";
            let s = new L05_Class.Snowflakes(x, y, thecolor, r);
            s.x = Math.random() * 800;
            s.y = Math.random() * 600;
            snow[i] = s;
        }
        for (var i = 0; i < 10; i++) {
            let s = new L05_Class.Skifahrer(x, y, color);
            s.setStartPosition();
            ski[i] = s;
        }
        window.setTimeout(animate, 20);
    }
    function animate() {
        L05_Class.crc2.putImageData(imgData, 0, 0);
        //Animation Schneeflocken
        for (var i = 0; i < 100; i++) {
            let s = snow[i];
            s.move();
            s.draw();
        }
        //Animation Skifahrer
        for (var i = 0; i < 5; i++) {
            let s = ski[i];
            s.move();
            s.draw();
        }
        window.setTimeout(animate, 20);
    }
    function drawBaum(_x, _y, _fillColor) {
        // Tannenbaum
        L05_Class.crc2.beginPath();
        L05_Class.crc2.fillStyle = _fillColor;
        L05_Class.crc2.strokeStyle = _fillColor;
        L05_Class.crc2.moveTo(_x, _y);
        L05_Class.crc2.lineTo(_x - 10, _y + 5);
        L05_Class.crc2.lineTo(_x - 5, _y + 10);
        L05_Class.crc2.lineTo(_x - 20, _y + 15);
        L05_Class.crc2.lineTo(_x - 10, _y + 20);
        L05_Class.crc2.lineTo(_x - 30, _y + 25);
        L05_Class.crc2.lineTo(_x - 20, _y + 30);
        L05_Class.crc2.lineTo(_x + 20, _y + 30);
        L05_Class.crc2.lineTo(_x + 30, _y + 25);
        L05_Class.crc2.lineTo(_x + 10, _y + 20);
        L05_Class.crc2.lineTo(_x + 20, _y + 15);
        L05_Class.crc2.lineTo(_x + 5, _y + 10);
        L05_Class.crc2.lineTo(_x + 10, _y + 5);
        L05_Class.crc2.closePath();
        L05_Class.crc2.fill();
        L05_Class.crc2.stroke();
    }
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=aufgabe5.js.map
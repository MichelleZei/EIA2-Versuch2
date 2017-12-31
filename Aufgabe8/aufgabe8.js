/*
Aufgabe: Aufgabe 8 - RandomBoxes
Name: Michelle Zei�ner
Matrikel:
Datum: 31.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var RandomBoxes;
(function (RandomBoxes) {
    window.addEventListener("load", init);
    let crc2;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        eingegebeneZahlEntgegennehmen();
    }
    function eingegebeneZahlEntgegennehmen() {
        var i = parseInt(prompt("Gib eine Zahl zwischen 10 und 100 ein"));
        if (i < 10 || i > 100) {
            alert("Das ist keine Zahl zwischen 10 und 100");
        }
        else {
            kreiereQuadrate(i);
        }
    }
    function kreiereQuadrate(_i) {
        for (_i; _i > 0; _i--) {
            let c = '#' + Math.floor(Math.random() * 16777215).toString(16);
            let x = 50;
            let z = 10 + Math.random() * 700;
            let y = 10 + Math.random() * 500;
            drawQuadrat(c, x, z, y);
        }
    }
    function drawQuadrat(_c, _x, _z, _y) {
        crc2.beginPath();
        crc2.fillStyle = _c;
        crc2.fillRect(_z, _y, _x, _x);
        crc2.closePath();
    }
})(RandomBoxes || (RandomBoxes = {}));
//# sourceMappingURL=aufgabe8.js.map
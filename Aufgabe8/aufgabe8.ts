/*
Aufgabe: Aufgabe 8 - RandomBoxes
Name: Michelle Zeiﬂner
Matrikel: 
Datum: 31.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace RandomBoxes {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        eingegebeneZahlEntgegennehmen();
    }
    function eingegebeneZahlEntgegennehmen(): void {
        var i: number = parseInt(prompt("Gib eine Zahl zwischen 10 und 100 ein"));

        if (i < 10 || i > 100) {
            alert( "Das ist keine Zahl zwischen 10 und 100");
        }
        else {
            kreiereQuadrate(i);
        }
    }

    function kreiereQuadrate(_i: number): void {
        for (_i; _i > 0; _i--) {
            let c: string = '#' + Math.floor(Math.random() * 16777215).toString(16);
            let x: number = 50;
            let z: number = 10 + Math.random() * 700;
            let y: number = 10 + Math.random() * 500;

            drawQuadrat(c, x, z, y);
        }
    }

    function drawQuadrat(_c: string, _x: number, _z: number, _y: number) {
        crc2.beginPath();
        crc2.fillStyle = _c;
        crc2.fillRect(_z, _y, _x, _x);
        crc2.closePath();
    }
}
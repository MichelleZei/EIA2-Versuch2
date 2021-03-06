/*
Aufgabe: Aufgabe 2 - Skipiste
Name: Michelle Zei�ner
Matrikel: 
Datum: 7.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace L2_Functions{
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    
    function init(_event:Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        drawMountain1(0, 0, "#E0FFFF");
        drawPiste(950, 0, "#F0FFFF");       
        drawBackground(790, -200, "#B0C4DE");
        drawMountain2(700, 0, "#E0FFFF");
        drawSun(550, 100, 30, "#FFEC8B");
        drawLift1(100, 0, "#1F1F1F");
        drawLift2(200, 300, "#1F1F1F");
        drawLift3(2, 200, "#1F1F1F");
        drawBaum(600, 500, "#556B2F");
        
        for( var i: number = 0; i < 5; i++){
            let x: number = 600 + Math.random() * 180;
            let y: number = 300 + Math.random() * 270;
            
            drawBaum(x, y, "#556B2F");
        }
        
        for( var i: number = 0; i < 5; i++){
            let x: number = 600 + Math.random() * 180;
            let y: number = 300 + Math.random() * 270;
            
            drawBaum(x, y, "#458B00");
        }
        
    }
    
    function drawBackground(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 600, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
    }
    
    function drawSun(_x:number, _y: number, _r:number, _fillColor: string): void {
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
        crc2.lineTo(_x-10, _y+5);
        crc2.lineTo(_x-5, _y+10);
        crc2.lineTo(_x-20, _y+15);
        crc2.lineTo(_x-10, _y+20);
        crc2.lineTo(_x-30, _y+25);
        crc2.lineTo(_x-20, _y+30);     
        crc2.lineTo(_x+20, _y+30);
        crc2.lineTo(_x+30, _y+25);
        crc2.lineTo(_x+10, _y+20);
        crc2.lineTo(_x+20, _y+15);
        crc2.lineTo(_x+5, _y+10);
        crc2.lineTo(_x+10, _y+5);
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
}
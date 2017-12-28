namespace L05_Class{
    export class Skifahrer{
        x: number;
        y: number;
        color: string;
        
        constructor(_x: number, _y:number, _color: string) {
            this.x = _x;
            this.y = _y; 
            this.color = _color;   
        }
        
        setStartPosition(): void{
            this.x = 155 + Math.random() * 70;7
            this.y = Math.random() * 100;
        }
        
        move(): void{
            this.x += Math.random() * 3;
            this.y += Math.random() * 5;
            
            if(this.y > 600){
                this.y = 0;    
            }
            
            if(this.x > 500) {
                this.x = 150 + Math.random()*70;
                this.y = 0;
            }
            
        }
        
        draw(): void{
        //Kopf
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.strokeStyle = this.color;
        crc2.arc(this.x, this.y, 5, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        //Körper
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.moveTo(this.x, this.y)
        crc2.lineTo(this.x, this.y + 25)
        crc2.closePath();
        crc2.stroke();
        
        //Arme
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.moveTo(this.x, this.y + 15)
        crc2.lineTo(this.x + 10, this.y + 10)
        crc2.closePath();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.moveTo(this.x, this.y + 15)
        crc2.lineTo(this.x - 10, this.y + 10)
        crc2.closePath();
        crc2.stroke();
        
        //Beine
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.moveTo(this.x, this.y + 25)
        crc2.lineTo(this.x - 10, this.y + 35)
        crc2.closePath();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.moveTo(this.x, this.y + 25)
        crc2.lineTo(this.x + 10, this.y + 35)
        crc2.closePath();
        crc2.stroke();
        
        //Ski
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.moveTo(this.x - 20, this.y + 20)
        crc2.lineTo(this.x , this.y + 50)
        crc2.closePath();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.moveTo(this.x + 5, this.y + 20)
        crc2.lineTo(this.x + 15, this.y + 50)
        crc2.closePath();
        crc2.stroke();
        }
    }
}
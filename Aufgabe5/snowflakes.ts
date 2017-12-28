namespace L05_Class{
    export class Snowflakes{
        x: number;
        y: number;
        color: string;
        r: number;    
        
        constructor(_x: number, _y:number, _color: string, _r: number) {
           this.x = _x;
           this.y = _y; 
           this.color = _color;
           this.r = _r;
        }
        setStartPosition(): void{
            this.x = Math.random() * 800;
            this.y = Math.random() * 600;
        }
        
        move(): void{
            this.x += Math.random();
            this.y += Math.random() * 5;
            
            if(this.y > 600){
                this.y = 0;    
            }
            
            if(this.x > 800) {
                this.x = 0;
            }
            
        }
        
        draw(): void{
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
        }
    }
}
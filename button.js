class Button{

    constructor(x, y, w, h, text){
        
        this.x = x;
        this.y = y; 
        this.w = w;
        this.h = h;
        this.text = text;
    }

    show(){
        stroke(0,255,0)
        noFill()
        rect(this.x,this.y,this.w, this.h)
        fill(255)
        textAlign(CENTER)
        textSize(24)
        text("Play Again", this.x + this.w /2, this.y + this.h * 0.6)
    }
    clearButton(){

    }
}
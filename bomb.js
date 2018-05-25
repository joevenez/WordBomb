class Bomb{

    constructor(spc){
        if(spc === null){
            this.w = 30 
            this.h = 40
            //this.coord = getPos()
            this.x = randomNum(width - this.w)
            this.y = -(randomNum(100)) - this.h 
            this.disarm = code[randomNum(26 - 1)]
            this.gravity = 0.01
            this.velocity = 1
        }else if(spc === "bombClear"){
            this.r = 30
            this.x = randomNum(width - this.w)
            this.y = -(randomNum(100)) - this.h 
            this.disarm = code[randomNum(26 - 1)]
            this.gravity = 0.02
            this.velocity = 2
            this.color = (0,0,255)
        }else if(spc === "extraLife"){
            this.r = 30
            this.x = randomNum(width - this.w)
            this.y = -(randomNum(100)) - this.h 
            this.disarm = code[randomNum(26 - 1)]
            this.gravity = 0.02
            this.velocity = 2
            this.color = (0,0,255)
        }
    }

    show(){
        stroke(0)
        strokeWeight(2)
        noFill()
        rect(this.x,this.y, this.w, this.h)
        textAlign(CENTER)
        textSize(32)
        fill(0)
        text(this.disarm, this.x + this.w / 2, this.y + this.h - 10)
    }

    updatePos(){
        this.y += this.velocity
        this.velocity += this.gravity
        
    }

    checkHeight(){
        if(this.y + this.h > height){
            return true 
        }else{
            return false;
        }
    }


    /// added null to constructor for different types maybe make new class 
    // new function to check for clearing special
    // or change back to original with no special bombs
    clearSpecial(){
        return (this.y - this.r > height)
    }




    


}
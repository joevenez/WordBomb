const width = 800; 
const height = 720;
let bombs = []; 
let code = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let alive
let score
let replayButton


let addBomb = false 

function setup(){
    //Create canvas and position it
    var vas = createCanvas(width,height);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    vas.position(x, y);
    score = 0
    alive = true;
    //Populate bombs array
    for(let i = 0; i < 5; i++){
        bombs.push(new Bomb(null))
    }
}
function draw(){
    background(255);
    console.log(bombs.length)
    
    //testing adding more bombs 
    if(score % 25 == 0 && addBomb){
        bombs.push(new Bomb(null))
        addBomb = false 
    }else if(score % 25 == 1 &&  !addBomb){
        addBomb = true
    }
    //Game Running
    //Show bombs even after death
    for(let i = bombs.length - 1; i >= 0 ; i--){
        bombs[i].show()
    }

    //Game When alive
    if(alive){
        textSize(24)
        text("Score: " + score, width - 75 , 40)
        for(let i = bombs.length - 1; i >= 0 ; i--){
            bombs[i].updatePos()
            if(bombs[i].checkHeight()){
                alive = false
                break;
            }
        }
    }
    // Create Game Over screen
    if(!alive){
        replayButton = new Button(width / 2 -80, height / 2 + 110, 160 , 50)
        fill(0)
        rect(width * 0.25, height * 0.25, width * 0.5, height * 0.5)
        fill(255)
        textAlign(CENTER);
        textSize(64);
        text("Game Over",width/2 ,height/2);
        textAlign(CENTER);
        textSize(32)
        text("Score: " + score, width /2, height/2 + 80)
        replayButton.show()

    }
}

function keyPressed(){
    //Test for key to disarm bomb by matching object disarm password
    if(alive){
        disarm(key);
    }
}

function mousePressed(){
    //Click replay button 
    let x = mouseX
    let y = mouseY
    if(!alive){
        if(x > replayButton.x && x < replayButton.x + replayButton.w){
            if(y > replayButton.y && y < replayButton.y + replayButton.h){
                replay()
            }        
        }
    }
}

function disarm(input){
    let maxy = null
    let index = null
    //Test for bombs for disarm code 
    for(let i = bombs.length - 1; i >= 0 ; i--){
        if(input === bombs[i].disarm){
            if(bombs[i].y > maxy){
                maxy = bombs[i].y
                index = i
            }
        }
        if(i == 0 && maxy != null && index !=null){
            bombs.splice(index,1);
            bombs.push(new Bomb(null))
            score++
        }
    }
}

function randomNum(max){
    // Create a random number between 1 and max 
    let num = Math.floor(Math.random() * max + 1);
    return num
}

function replay(){
    
    //Reset game for restart
    alive = true;
    score = 0;
    //Repopulate bombs array
    bombs = []
    for(let i = 0; i < 5; i++){
        bombs.push(new Bomb(null))
    }
}
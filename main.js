class Krono{
    constructor(div=1){
        this.startTime = 0;
        this.isRunning = false;
        // 
        this.div = div;
        // 
        this.startPause = 0;
        this.pauseTime = 0;
        this.isPaused = false;
    }
    
    start(){
        if(!this.isRunning && !this.isPaused){
        this.startTime = Date.now()
        this.isRunning = true;
        }
    }

    
    reset(){
        this.startTime = 0;
        this.isRunning = false;
        // 
        this.startPause = 0;
        this.pauseTime = 0;
        this.isPaused = false;
    }

    getTime(){
        let elapsedTime = Math.floor((this.startPause - this.startTime - this.pauseTime)/this.div);

        if(this.isRunning){
            elapsedTime = Math.floor((Date.now()-this.startTime-this.pauseTime)/this.div); 
        }
        return elapsedTime;
    }

    
    pause(){
        if(this.isRunning){
        this.startPause = Date.now()
        this.isRunning = false;
        this.isPaused = true;
        }
    }
    
    continue(){
        if(!this.isRunning){
        this.pauseTime += Date.now()-this.startPause;
        this.isRunning = true;
        this.isPaused = false;
        }
    }

    toZero(){
        this.startTime = 0;
        this.isRunning = false;
        
        this.startPause = 0;
        this.pauseTime = 0;
        
        if(!this.isPaused){
            this.start();
        }
    }
}


let reloj = new Krono;
let reloj2 = new Krono(1000)
reloj2.start();






function showTime(){
    document.querySelector('#timer').innerText = reloj.getTime();
}


window.setInterval( function(){
    showTime();
    console.log(reloj2.getTime())

    // if(reloj.getTime()>5000){
    //     reloj.toZero();
    // }
  },0);


document.addEventListener('keypress',(e)=>{

    switch (e.code) {
        case 'KeyS':
            reloj.start()
            break;
            
            case 'KeyR':
                reloj.reset()
                break;
                case 'KeyP':
                    if(reloj.isPaused){
                        reloj.continue()
                    }else{
                        reloj.pause()
            }
            break;
        case 'KeyZ':
            reloj.toZero()
            break;

    
        default:
            break;
    }
})
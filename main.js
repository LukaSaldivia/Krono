class Krono{
    constructor(){
        this.startTime = 0;
        this.isRunning = false;
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
        let elapsedTime = this.startPause - this.startTime - this.pauseTime;

        if(this.isRunning){
            elapsedTime = Date.now()-this.startTime-this.pauseTime; 
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





function showTime(){
    document.querySelector('#timer').innerText = `${reloj.getTime()} ms`;
}


window.setInterval( function(){
    showTime();
  },1000/60);


document.addEventListener('keypress',(e)=>{

    switch (e.code) {
        case 'KeyS':
            reloj.start()
            break;
    
        case 'KeyR':
            reloj.reset()
            break;
        case 'KeyP':
            reloj.isPaused? reloj.continue() : reloj.pause()
            break;
        case 'KeyZ':
            reloj.toZero()
            break;

    
        default:
            break;
    }
})
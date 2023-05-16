class Krono{
    constructor(div=1){
        this.startTime = 0;
        this.isRunning = false;
        this.isPaused = false;
        this.div = div;
        this.startPause = 0;
        this.pauseTime = 0;
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

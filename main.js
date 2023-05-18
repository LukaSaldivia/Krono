

let reloj = new Krono({
    output:1000,
    isBackwards:true,
    end:true,
    initial:4,
    whenDone: ()=>{funcionX()}
});
let reloj2 = new Krono({
    output:1
})

let example = new Krono({
    output: 1,
    isBackwards: false,
    end:true,
    initial:7,
    whenDone: ()=>{console.error('Terminaron los 7 segundos')}
})


example.start();

function funcionX() {
    console.warn('Hola')
}


function showTime(){
    document.querySelector('#timer').innerText = reloj.getTime();
}


window.setInterval( function(){
    showTime();
    console.log(example.getTime())

    // if(reloj.getTime()>5000){
    //     reloj.toZero();
    // }
  },10);


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
            reloj.toInitial()
            break;

    
        default:
            break;
    }
})
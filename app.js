let s = [];
let p;

const sound1 = new Audio('/sounds/C5.mp3');
const sound2 = new Audio('/sounds/E5.mp3');
const sound3 = new Audio('/sounds/G5.mp3');
const sound4 = new Audio('/sounds/B5.mp3');
const wrong1 = new Audio('/sounds/A2.mp3');
const wrong2 = new Audio('/sounds/G2.mp3');
const wrong3 = new Audio('/sounds/Db2.mp3');
const wrong4 = new Audio('/sounds/G1.mp3');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const box4 = document.querySelector('.box-4');
const title = document.querySelector('.title');

function createSequence(n){
    for(i=0;i<n;i++){
        let r = Math.ceil(Math.random()*4);
        s.push(r)
    }
}

function wrong(box){
    title.textContent = `WRONG!!!!! Press R to play again`;
    title.classList.add('wrongh')
    wrongSeq();
   
}

function init(){
    createSequence(50);
    p = 1;
    title.textContent = `Press A to Start`;
    box1.addEventListener('mousedown',function(){
        box1.classList.add('clicked')
        sound1.load();
        sound1.play();
        if(curr[0]===1){
            curr.shift();
            if(curr.length<1){
                title.textContent = `Correct!!!`
                p+=1
                setTimeout(()=>{
                    start();
                },800);
              }
        } else{
            wrong(box1) 
        }
    })
    box2.addEventListener('mousedown',function(){
        box2.classList.add('clicked')
        sound2.load()
        sound2.play()
        if(curr[0]===2){
            curr.shift();
            if(curr.length<1){
                title.textContent = `Correct!!!`
                p+=1
                setTimeout(()=>{
                    start();
                },800);
              }
        }  else{
            wrong(box2)
        }
    })
    box3.addEventListener('mousedown',function(){
        box3.classList.add('clicked')
        sound3.load()
        sound3.play()
        if(curr[0]===3){
            curr.shift();
            if(curr.length<1){
                title.textContent = `Correct!!!`
                p+=1
                setTimeout(()=>{
                    start();
                },800);
            }
        } 
         else{
            
            wrong(box3)
        }
    })
    box4.addEventListener('mousedown',function(){
        box4.classList.add('clicked')
        sound4.load()
        sound4.play()
        if(curr[0]===4){
            curr.shift();
            if(curr.length<1){
                title.textContent = `Correct!!!`
                p+=1
                setTimeout(()=>{
                    start();
                },800);
              }
        }
         else{
            wrong(box4)
        }
    })
    box1.addEventListener('mouseup',function(){
        box1.classList.remove('clicked')
    })
    box2.addEventListener('mouseup',function(){
        box2.classList.remove('clicked')
    })
    box3.addEventListener('mouseup',function(){
        box3.classList.remove('clicked')
    })
    box4.addEventListener('mouseup',function(){
        box4.classList.remove('clicked')
    })
}

let curr;

function start(){
    title.textContent = "";
    curr = s.slice(0,p);
    playSequence(curr) 
}

init();









async function playSequence(arr){
    for(i=0; i<arr.length;i++){
        await playSound(arr[i]);
    }
}

async function wrongSeq(){
    await playWrong(wrong1,200);
    await playWrong(wrong2,200);
    await playWrong(wrong3,200);
    await playWrong(wrong4,200);
}

async function playWrong(sound,t){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
          sound.load();
          sound.play();
          res();
        },t);
    })
}

async function playSound(n){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(n===1){
                box1.classList.add('clicked');
                sound1.load();
                sound1.play();        
            }
            if(n===2){
                box2.classList.add('clicked');
                sound2.load();
                sound2.play();          
            }
            if(n===3){
                box3.classList.add('clicked');
                sound3.load();
                sound3.play();          
            }
            if(n===4){
                box4.classList.add('clicked');
                sound4.load();
                sound4.play();        
            }
            res()
        }, 1000);
        setTimeout(()=>{
            if(n===1){
                box1.classList.remove('clicked');
            }
            if(n===2){           
                box2.classList.remove('clicked');
            }
            if(n===3){           
                box3.classList.remove('clicked');
            }
            if(n===4){          
                box4.classList.remove('clicked');
            }
            res()
        }, 1050);
    })
}

document.addEventListener('keyup', (e)=>{
    
    if(e.key === 'a'){
        start();
    }
    if(e.key === 'r'){
        location.reload();
        init();
    }
})








     const mario = document.querySelector('.mario');
     const pipe = document.querySelector('.pipe');
     const jump = () => {mario.classList.add('jump');
     setTimeout(() => {mario.classList.remove('jump');} ,500);}
    
     const Loop = setInterval(() => {console.log('loop')
     const pipePosition = pipe.offsetLeft;
     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
     
     console.log(marioPosition);

     if  (pipePosition <= 145 && pipePosition > 0 && marioPosition < 111) {
    
     pipe.style.animation = 'none';
     pipe.style.left = `${pipePosition}px`;

     mario.style.animation = 'none';
     mario.style.bottom = `${marioPosition}px`;

     mario.src= "game-over.png"
     mario.style.width = '80px'
     mario.style.marginLeft = '65px'
     var img = document.querySelector("#image");

     img.setAttribute('src', 'game_over.png');
     clearInterval(cron);
     
     clearInterval(Loop);}}, 10);
     document.addEventListener('keydown', jump);

/* TESTES Adry */ 
    
     "use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

/* part2*/ 

document.addEventListener('keydown', start);

function start() {
     pause();
     cron = setInterval(() => { timer(); }, 10);
   }
   
   function pause() {
     clearInterval(cron);
   }
   
   function reset() {
     hour = 0;
     minute = 0;
     second = 0;
     millisecond = 0;
     document.getElementById('hour').innerText = '00';
     document.getElementById('minute').innerText = '00';
     document.getElementById('second').innerText = '00';
     document.getElementById('millisecond').innerText = '000';
   }

   /* part3 */ 

   function timer() {
     if ((millisecond += 10) == 1000) {
       millisecond = 0;
       second++;
     }
     if (second == 60) {
       second = 0;
       minute++;
     }
     if (minute == 60) {
       minute = 0;
       hour++;
     }
     document.getElementById('hour').innerText = returnData(hour);
     document.getElementById('minute').innerText = returnData(minute);
     document.getElementById('second').innerText = returnData(second);
     document.getElementById('millisecond').innerText = returnData(millisecond);
   }
   
   function returnData(input) {
     return input > 10 ? input : `0${input}`
   }
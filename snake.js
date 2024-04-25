let inputd = { x : 0, y:0};
const foodsound= new Audio("food.mp3");
const gameoversound = new Audio("over.mp3");
const movesound = new Audio("move.mp3");
const musicsound = new Audio("back.mp3");
let speed =5;
let score = 0;
let lastpainttime=0;
let snakearr = [
    { x: 13, y: 15}
]
food = {x: 7, y: 5};
function main(ctime){
    window.requestAnimationFrame(main);
   // console.log(ctime)
    if((ctime - lastpainttime)/1000 < 1/speed){
    return;}
    lastpainttime = ctime;
    gameE();
}
function colloide(snake) {
    for (let i = 1; i < snakearr.length; i++) {
     if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
      return true;
     }
    }
        if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0)
     {
        return true;
     }
}

function gameE(){

     if(colloide(snakearr)){
        gameoversound.play();
        musicsound.pause();
        inputd = { x : 0, y:0};
        alert("GAME OVER . PRESS ANY KEY TO PLAY AGAIN");
        snakearr = [ { x: 13, y: 15}];
        musicsound.play();
        score = 0;

    }

      if(snakearr[0].y === food.y && snakearr[0].x === food.x){
        foodsound.play();
        score += 1;
        if(score>hiscoreval){
            hiscoreval=score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval) )
            hiscorebox.innerHTML = "Hi score: "+ hiscoreval;
        }
        scorebox.innerHTML="score: "+ score;
        snakearr.unshift({x: snakearr[0].x + inputd.x,  y: snakearr[0].y + inputd.y });
       let a = 2;
       let b = 16;
        food = {x: Math.round(a + (b - a)* Math.random()), y: Math.round(a + (b - a)* Math.random()) }
      }

      for(let i = snakearr.length - 2 ; i >=0 ; i--){
        snakearr[i+1] = {...snakearr[i]};
      }
     snakearr[0].x += inputd.x;
     snakearr[0].y += inputd.y;

board.innerHTML = "";
snakearr.forEach((e, index)=>{
    snakeelement = document.createElement('div');
    snakeelement.style.gridRowStart =e.y;
    snakeelement.style.gridColumnStart =e.x;
    if(index === 0){
        snakeelement.classList.add('head');
    }
   else{
    snakeelement.classList.add('snake');
   }
    board.appendChild(snakeelement);
});
foodelement = document.createElement('div');
foodelement.style.gridRowStart =food.y;
foodelement.style.gridColumnStart =food.x;
foodelement.classList.add('food') 
board.appendChild(foodelement);




}

musicsound.play();
let hiscore = localStorage.getItem("hiscore");

if(hiscore===null)
{
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval) )
} 
else{
    hiscoreval = JSON.parse(hiscore);
     hiscorebox.innerHTML = "Hi score: "+ hiscore;
}



window.requestAnimationFrame(main);
window.addEventListener('keydown', e=> {
    inputd = {x:0, y:1}
    movesound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputd.x= 0;
            inputd.y= -1;
              break;

         case "ArrowDown":
             console.log("ArrowDown")
             inputd.x =0;
             inputd.y =1;
                break;
    
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputd.x = -1;
            inputd.y = 0;
                 break;
    
         case "ArrowRight":
             console.log("ArrowRight")
             inputd.x = 1;
             inputd.y = 0;
                 break;
                
        default:
            break;
    }
});


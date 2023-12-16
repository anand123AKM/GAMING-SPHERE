console.log("WELCOME TO TIC TAC TOE")
let music = new Audio("bg.mp3")
let aturn = new Audio("over.mp3")
let gameover = new Audio("back.mp3")
let back = new Audio("back.mp3")
let turn = "x"
 let isgameover = false

const changeTurn = () => {
    return turn === "x"?"0":"x"
}

const checkwin = () => {
    let bts= document.getElementsByClassName('bt')
     let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ]
     wins.forEach(e =>{
        if
            ((bts[e[0]].innerText === bts[e[1]].innerText) && (bts[e[1]].innerText === bts[e[2]].innerText) && (bts[e[0]].innerText !== ''))
        {document.querySelector('.info').innerText= bts[e[0]].innerText+" own "
        document.querySelector('.i').innerText= bts[e[0]].innerText+" own "
        isgameover = true}
      if((bts[e[0]].innerText === bts[e[1]].innerText) && (bts[e[1]].innerText === bts[e[2]].innerText) && (bts[e[0]].innerText !== '')===true)
      {
        document.querySelector('.img').getElementsByTagName('img')[0].style.width="220px"
        music.pause();
        back.play();

      }
      if((bts[e[0]].innerText === bts[e[1]].innerText) && (bts[e[1]].innerText === bts[e[2]].innerText) && (bts[e[0]].innerText !== '')===true)
      {
        return alert("game over ")
     
      }
      
    })
  
} 


let bs = document.getElementsByClassName("b");
Array.from(bs).forEach(element=>{
    let bt = element.querySelector('.bt')
    element.addEventListener('click', ()=>{

        if(bt.innerText===''){
            bt.innerText= turn;
            music.play();
        turn = changeTurn();
        document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
            aturn.play();
            checkwin();      
        }
    })
   
})

reset.addEventListener('click', ()=> {
    let bt = document.querySelectorAll('.bt');
    Array.from(bt).forEach(bts => {
        bts.innerText=""
    });
    turn ="x"
    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width="0px"
    back.pause();
    music.play();
})
let gameSeq=[];
let userSeq=[];
let color=["red","blue","green","yellow"];

let start=false;
let level=0;
let h2=document.querySelector("h2");
let max=0;
let highscore=document.querySelector(".highscore");


document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
       setTimeout(levelUp,1000);
    }
})

function levelUp(){
    userSeq=[];
    level++;

    h2.innerText=`Level  ${level}`;
   
    let rndmindx=Math.floor(Math.random()*3);
    let rndcolor=color[rndmindx];
    console.log(rndmindx);
    console.log(rndcolor);
    let btn=document.querySelector(`.${rndcolor}`);
    gameSeq.push(rndcolor);
    console.log(gameSeq);

    console.dir(btn);
    btnflash(btn);
    
  



}
function btnflash(btn){{
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash");
    },200);
}}

function userflash(btn){{
    btn.classList.add("green2");
    setTimeout(function(){
       btn.classList.remove("green2");
    },100);
}}

function btnpress(){
    console.log(this);
    let btn=this;
userflash(btn);
let userColor=btn.getAttribute("id");
userSeq.push(`${userColor}`);
console.log(userSeq);
checkAns(userSeq.length-1);
}


let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnpress);
}



 function checkAns(idx){
  
   
  
if(userSeq[idx]==gameSeq[idx]){

    console.log(level);
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,800);
    }
   
  }
  else{

    h2.innerHTML=`Game Over! Your Score is <i>
    <b>${level}</b></i> <br> Press any key to start`;
    if(max<level){
        max=level;
        
    }
    highscore.innerText=`Your Highest Score = ${max}`;
    
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="rgb(150, 190, 190)"
        
    },100)
    reset();
}
 }
 function reset(){
    start=false;
    gameSeq=[];
    level=0;
    userSeq=[];

 }


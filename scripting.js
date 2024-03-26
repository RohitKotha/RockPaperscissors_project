let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user");
const cscore=document.querySelector("#computer");
const getcompChoice =()=>{
    const arr=['rock','paper','scissors'];
    const rm=Math.floor(Math.random()*arr.length);
    return  arr[rm];
}
const showwinner= (userwin,userChoice,compChoice)=>{
    if(userwin){
        console.log("YOU win");
        msg.innerText =`YOU Won! ${userChoice} beats  ${compChoice}.`;
        msg.style.backgroundColor="green";
        userscore++;
        uscore.innerText=userscore;
    }else{
        console.log("YOU lose");
        msg.innerText =`YOU Won! ${compChoice} beats ${userChoice}.`;
        msg.style.backgroundColor="red";
        compscore++;
        cscore.innerText=compscore;
    }
    
}

const playgame =(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=getcompChoice();
    console.log("Computer choice =",compChoice);
    if (userChoice===compChoice) {
        console.log("Game was Draw");
        msg.innerText ="GAME WAS DRAW, PLAY AGAIN :| ";
        msg.style.backgroundColor="gray";
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userwin= compChoice==='scissors' ? false : true ;
        }
        else{
            userwin = compChoice=== "rock"? false : true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
    
}

choices.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const userChoice = choices.getAttribute("id");
        playgame(userChoice);
    })
})
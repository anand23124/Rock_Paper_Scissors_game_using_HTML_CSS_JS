let userscore = 0;
let compscore = 0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-sc");
const compScorepara = document.querySelector("#comp-sc");

const reset = document.querySelector(".rst-btn");

const genCompChoice =()=>{
    const options =["rock","paper","scissors"];
    compChoice=options[Math.floor(Math.random()*3)];
    return compChoice;
};

const drawGame = () =>{
    console.log("game was draw");
}
const showWinner = (userWin , userChoice, computerChoice) =>{
    if(userWin){
        userscore++;
        userScorepara.innerText=userscore;
        console.log("you won");
        msg.innerText=`You won! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        compscore++
        compScorepara.innerText=compscore;
        console.log("you loose");
        msg.innerText=`You loose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}


const playGame =(userChoice) =>{
    console.log("user choice :",userChoice);
    //genrate computer choice
    const computerChoice=genCompChoice()
    console.log("comp choice :",computerChoice);
    if(userChoice === computerChoice){
        drawGame();
        msg.innerText="Game draw Play Again";
        msg.style.backgroundColor="Gray";

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin= computerChoice==="paper"?false:true;
        }
        else if(userChoice === "paper"){
            userWin= computerChoice==="scissors"?false:true;
        }
        else{
            userWin= computerChoice==="rock"?false:true;
        }
        showWinner(userWin , userChoice,computerChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
})

reset.addEventListener("click",() =>{
    compScorepara.innerText="0";
    userScorepara.innerText="0";
})
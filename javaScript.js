let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#users-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const draw = ()=>{
    msg.style.backgroundColor = "#081b31";
    msg.style.border="solid 5px #3a9ad9";
    msg.innerText="Game Draw";
};

const getComputerChoice = ()=>{
    let options=["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const showWinner = (userWin,compChoice,userChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.style.border="solid 4px black";
        msg.innerText = `You won.. your ${userChoice} beats ${compChoice}`;
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.style.border="solid 4px black";
        msg.innerText=`You lose.. ${compChoice} beats your ${userChoice}`;
    }
}

const playGame = (userChoice)=>{
    console.log("user choice: ",userChoice);
    const compChoice = getComputerChoice();
    console.log("Computers choice: ",compChoice);
    if(userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice=== "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice=== "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice Clicked ",userChoice);
        playGame(userChoice);
    });
});
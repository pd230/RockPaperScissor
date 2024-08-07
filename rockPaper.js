let imgs = document.querySelectorAll(".images");

imgs.forEach((images)=>{
    images.addEventListener("click",()=>{
        const userIpt = images.getAttribute("id");
        compare(userIpt);
    });
});

const cmpChoice = ()=>{
    let choiceArr = ["rock", "paper", "scissor"];
    let compIpt = Math.floor(Math.random()*3);
    return choiceArr[compIpt];
}

let compare = (userChoise) =>{
    console.log(`you - ${userChoise}`);
    const cmpchoice = cmpChoice()
    console.log(`comp - ${cmpchoice}`);
    winner(userChoise,cmpchoice);
}

let result = "";

let winner = (userChoise,cmpchoice)=>{
    if(userChoise === 'rock' && cmpchoice === 'paper'||userChoise === 'paper' && cmpchoice === 'scissor' || userChoise === 'scissor' && cmpchoice === 'rock'){
         result = "compter win";
    }else if(userChoise === 'rock' && cmpchoice === 'scissor' || userChoise === 'paper' && cmpchoice === 'rock' || userChoise === 'scissor' && cmpchoice === 'paper'){
         result ="you win";
    }else if(userChoise === 'rock' && cmpchoice === 'rock' || userChoise === 'scissor' && cmpchoice === 'scissor'|| userChoise === 'paper' && cmpchoice === 'paper' ){
         result ="its a Tie";
    }
    console.log(result);
    score(result);
    updateWinBoard(result);
    return result;
}

userScore = 0;
compScore = 0;

let score = (result) =>{
     if(result==="compter win"){
        compScore++;
     }else if(result==="you win"){
        userScore++;
     }
     console.log(`compScore : ${compScore} && userScore: ${userScore}`)
     updatedScore(compScore, userScore);
     finalWin(compScore, userScore)
}

let userCnt = document.querySelector("#userCnt");
let cmtCnt = document.querySelector("#cmtCnt");

let updatedScore = (compScore, userScore)=>{
    userCnt.innerHTML = userScore;
    cmtCnt.innerHTML = compScore;
}

let winBoard = document.querySelector(".currentotpt");
let changeContent;

let updateWinBoard = (result) =>{
    if(result==="compter win"){
        changeContent ="now computer win !"
     }else if(result==="you win"){
        changeContent ="now you win !"
     }else{
        changeContent ="now it's a Tie !"
     }

     winBoard.innerHTML = changeContent;
     winBoard.classList.add("winboard");
}


let finalWinner = document.querySelector(".otpt");
let win;
let finalWin = (compScore, userScore)=>{
     if(compScore > userScore){
        finalWinner.innerHTML = "Winner is Computer"
     }
     else if(compScore < userScore){
         finalWinner.innerHTML = "You are the Winner"
     }
     else{
        finalWinner.innerHTML = "Its A tie"
     }
}

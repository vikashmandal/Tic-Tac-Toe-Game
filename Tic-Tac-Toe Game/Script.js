let singleBox = document.querySelectorAll(".single-box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".win-msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; 

// ----------winPatterns----------

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// ----------resetGameLogic----------
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}
singleBox.forEach((box) => {

    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });

}); 
// ----------boxDisableLogic----------
const disableBoxes =() => {
    for(let box of singleBox){
        box.disabled = true;
    }
}
// ----------boxEnableLogic----------
const enableBoxes =() => {
    for(let box of singleBox){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `player ${winner} win`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// ----------winnerCheckingLogic----------

    const checkWinner = () => {
        for ( let pattern of winPatterns){
            
             let pos1Val = singleBox[pattern[0]].innerText;
             let pos2Val = singleBox[pattern[1]].innerText;
             let pos3Val = singleBox[pattern[2]].innerText;

             if (pos1Val != "" && pos2Val != "" && pos3Val != "") {

                 if(pos1Val === pos2Val && pos2Val === pos3Val){
                    
                     showWinner(pos1Val);
                 }
             }
        }
    }

resetBtn.addEventListener("click", resetGame);
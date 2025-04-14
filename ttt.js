let body = document.querySelector("body");
let btns = document.querySelectorAll(".box");
let newGame = document.querySelector(".new-game");
let winnerText = document.querySelector(".winner");
let mode = document.querySelector(".mode");
let sound = document.querySelector(".sound");




let count = 0;
let user = "X";
let winningArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("fontStyle");
    sound.play();
    if (user === "X") {
      let x = btn.style.color = " #09C372";
      btn.innerText = "X";
      user = "O";
    } else {
      btn.style.color = " #498AFB";
      btn.innerText = "O";
      user = "X";
    }

    count++;
    
    btn.disabled = true;
    let isWinner = winner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});
const winner = () => {
  for (let pattern of winningArr) {
    let pos1Val = btns[pattern[0]].innerText;
    let pos2Val = btns[pattern[1]].innerText;
    let pos3Val = btns[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};
newGame.addEventListener("click", () => {
  enablebtns();
  user = "X";
  winnerText.classList.add("hide");
});
const enablebtns = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
    count = 0;
  }
};
const disablebtns = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};
const showWinner = (winner) => {
  winnerText.innerText = `Winner is ${winner}`;
  winnerText.classList.remove("hide");
  

  disablebtns();
}
const gameDraw = () => {
  winnerText.innerText = " Game Draw";
  winnerText.classList.remove("hide");
  disablebtns();
};
let bodyColor = "dark"

mode.addEventListener("click", ()=> {
 colorMode();
 if(bodyColor === "dark"){
  body.style.backgroundColor = "#D9E2E6";
  btns.forEach((btn) => {
     btn.style.backgroundColor = "#D9E2E6";
     btn.style.border = "1px solid #12181B";
     
    })

  bodyColor="light";
 }else{
  body.style.backgroundColor = " #12181B";
  btns.forEach((btn) => { 
    btn.style.backgroundColor = " #12181B";
    btn.style.border = "1px solid #D9E2E6";});
  bodyColor = "dark";
 }

})

const colorMode = ()=> {
  body.style.backgroundColor = "#D9E2E6";
  
}
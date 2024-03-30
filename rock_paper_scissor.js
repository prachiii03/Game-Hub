let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
let gotomenu = document.querySelector("#go-to-menu");

const genCompChoice = () => {
  //rock,paper,choice
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "GAME WAS DRAW,PLAY AGAIN !!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice, compchoice) => {
  if (userWin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `YOU WIN!!,Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `YOU LOSE ,${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  console.log("user choice =", userchoice);
  //generate computer choice
  const compchoice = genCompChoice();
  console.log("computer choice =", compchoice);

  if (userchoice === compchoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      //scissor,paper
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock ,scissor
      userWin = compchoice === "scissor" ? false : true;
    } else {
      //rock,paper
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});

gotomenu.addEventListener("click", () => {
  // code to go to the main menu here
  window.open("Menu.html", "_self");
});
